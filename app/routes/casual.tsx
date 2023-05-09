import { useState, useEffect } from "react";
import fs from "fs";
import { styled } from "config/stitches.config";

import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

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
        width: "fit-content",
        borderRadius: "0px 0px 10px 10px",
      },
      false: {
        borderRadius: "10px",
        margin: "50px",
      },
    },
  },
});

const ButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "350px",
  margin: "0px auto",
});

const Button = styled("button", {
  fontWeight: "bold",
  color: "white",
  fontSize: "16px",
  backgroundColor: "$color-2",
  width: "80px",
  height: "40px",
  padding: "4px 10px",
  margin: "20px auto",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  transition: "all 200ms",
  "&:hover": {
    backgroundColor: "$color-1",
    border: "1px solid $color-2",
    color: "$color-4",
  },
  "&:disabled": {
    opacity: "0.4",
    "&:hover": {
      backgroundColor: "$color-2",
      border: "none",
      color: "white",
      cursor: "auto",
    },
  },
});

const Container = styled("div", {
  height: "100vh",
});
const H3 = styled("h3", {
  color: "$color-4",
  margin: "0 auto",
});

export async function loader() {
  const randomNumber = Math.floor(Math.random() * 154) + 1;
  const file = fs.readFileSync(
    `${__dirname}/../questions/a-${randomNumber}.md`,
    "utf8"
  );
  const {
    attributes,
    body,
  }: {
    attributes: { answer: string };
    body: string;
  } = parseFrontMatter(file);
  const converter = new showdown.Converter({
    extensions: [showdownHighlight({ pre: true, auto_detection: true })],
  });
  const question = converter.makeHtml(body);
  return json({ attributes, question });
}

function Casual() {
  const data = useLoaderData<typeof loader>();
  const [msg, setMsg] = useState<string>();
  const [showNext, setShowNext] = useState<boolean>();

  const handleClick = (clickedAnswer: string) => {
    if (clickedAnswer === data.attributes.answer) {
      setMsg("Correct! 🎉");
    } else {
      setMsg(`Wrong! 🥲`);
    }
    setShowNext(true);
  };
  useEffect(() => {
    setShowNext(false);
  }, [data.question]);

  return (
    <Div>
      <Container>
        <Wrapper
          small={{ "@initial": false, "@bp1": true }}
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: data.question,
          }}
        />
        <ButtonsContainer>
          {showNext ? (
            <Form method="get">
              <H3>{msg}</H3>
              <Button type="submit">Next</Button>
            </Form>
          ) : (
            <>
              <Button onClick={() => handleClick("A")}>A</Button>
              <Button onClick={() => handleClick("B")}>B</Button>
              <Button onClick={() => handleClick("C")}>C</Button>
              <Button onClick={() => handleClick("D")}>D</Button>
            </>
          )}
        </ButtonsContainer>
      </Container>
    </Div>
  );
}
export default Casual;
