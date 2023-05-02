import fs from "fs";
import { styled } from "@stitches/react";

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
  margin: "50px 0 0 0",
  minWidth: "500px",
  height: "fit-content",
  padding: "15px",
  fontSize: "1.2rem",
  borderRadius: "10px",
});

export async function loader() {
  const randomNumber = Math.floor(Math.random() * 154) + 1;
  const file = fs.readFileSync(
    `${__dirname}/../questions/a-${randomNumber}.md`,
    "utf8"
  );
  const { attributes, body } = parseFrontMatter(file);
  return json({ attributes, body });
}

function Casual() {
  const data = useLoaderData<typeof loader>();
  const converter = new showdown.Converter({
    extensions: [showdownHighlight({ pre: true, auto_detection: true })],
  });
  return (
    <Div>
      <Wrapper
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(data.body),
        }}
      />
    </Div>
  );
}
export default Casual;
