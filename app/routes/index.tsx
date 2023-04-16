import { styled } from "config/stitches.config";

const Div = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "$color-1",
  display: "flex",
  justifyContent: "center",
});

const Container = styled("div", {
  margin: "auto 0px",
  display: "flex",
  flexDirection: "column",
});

const H1 = styled("h1", {
  color: "$color-4",
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
});

export default function Index() {
  return (
    <Div>
      <Container>
        <H1>Console Logame</H1>
        <Button>Play</Button>
      </Container>
    </Div>
  );
}
