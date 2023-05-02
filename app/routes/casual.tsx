import fs from "fs";
import { styled } from "config/stitches.config";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import parseFrontMatter from "front-matter";

const Div = styled("div", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "$color-1",
  display: "flex",
  justifyContent: "center",
});

const Wrapper = styled("div", {
  height: "fit-content",
  padding: "15px",
  fontSize: "1.2rem",
  variants: {
    small: {
      true: {
        margin: "0px",
        width: "100%",
        borderRadius: "0px 0px 10px 10px",
      },
      false: {
        borderRadius: "10px",
        margin: "50px",
      },
    },
  },
});

export async function loader() {
  const randomNumber = Math.floor(Math.random() * 154) + 1;
  const file = fs.readFileSync(
    `${__dirname}/../questions/a-${randomNumber}.md`,
    "utf8"
  );
  const { attributes, body } = parseFrontMatter(file);
  const converter = new showdown.Converter({
    extensions: [showdownHighlight({ pre: true, auto_detection: true })],
  });
  const question = converter.makeHtml(body);
  return json({ attributes, question });
}

function Casual() {
  const data = useLoaderData<typeof loader>();

  return (
    <Div>
      <Wrapper
        small={{ "@initial": false, "@bp1": true }}
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: data.question,
        }}
      />
    </Div>
  );
}
export default Casual;
