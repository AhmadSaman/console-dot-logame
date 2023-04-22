import { styled } from "@stitches/react";

const Div = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "$color-1",
  display: "flex",
  justifyContent: "center",
});
const H2 = styled("h2", {
  margin: "0 auto",
  color: "$color-4",
});

const Container = styled("div", {
  margin: "auto 0px",
  display: "flex",
  flexDirection: "column",
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
const Modes = styled("div", {
  margin: "auto auto",
  display: "flex",
  gap: "1rem",
});

function mode() {
  return (
    <Div>
      <Container>
        <H2>Select Mode</H2>
        <Modes>
          <Button>Casual</Button>
          <Button disabled={true}>Nerds</Button>
        </Modes>
      </Container>
    </Div>
  );
}

export default mode;
