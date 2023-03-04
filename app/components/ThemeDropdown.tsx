import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { styled } from "config/stitches.config";

const ToggleButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "10px",
  height: 40,
  width: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "Beige",
});

const Item = styled(DropdownMenu.RadioItem, {
  margin: "3px",
  borderRadius: "10px",
});

const DivOne = styled("div", {
  height: "40px",
  width: "40px",
  backgroundColor: "#F6E1C3",
  borderRadius: "10px",
});
const DivTwo = styled("div", {
  height: "40px",
  width: "40px",
  backgroundColor: "#222831",
  borderRadius: "10px",
});
const DivThree = styled("div", {
  height: "40px",
  width: "40px",
  backgroundColor: "#FFF5E4",
  borderRadius: "10px",
});

const ThemeDropdown: React.FC<{
  theme: string;
  setTheme: (newTheme: string) => void;
}> = ({ theme, setTheme }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <ToggleButton>
          <MixerHorizontalIcon />
        </ToggleButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <Item value="ahmad">
              <DivOne />
            </Item>
            <Item value="saman">
              <DivTwo />
            </Item>
            <Item value="hadi">
              <DivThree />
            </Item>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeDropdown;
