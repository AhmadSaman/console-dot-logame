import { styled } from "config/stitches.config";
import { TypeAnimation } from "react-type-animation";

const Div = styled("div", {
  color: "$color-4",
});
const TextAnimation = styled(TypeAnimation, {
  fontSize: "1.5rem",
});

export default function Index() {
  return (
    <Div>
      <TextAnimation sequence={["Console.logame", 1000]} speed={50} />
      <div>
        <TextAnimation
          sequence={[2000, "null", 1000, "undefined", 1000, "NaN", 1000]}
          speed={50}
        />
      </div>
    </Div>
  );
}
