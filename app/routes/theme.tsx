import { useRef, useCallback } from "react";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import ThemeDropdown from "~/components/ThemeDropdown";
import { secondTheme, styled, thirdTheme } from "config/stitches.config";
import { colorSchemeCookie, getColorScheme } from "~/cookies";

const Mdiv = styled("div", {
  display: "flex",
  marginTop: 190,
});
const DivColor1 = styled("div", {
  backgroundColor: "$color-1",
  height: 60,
  width: 60,
});
const DivColor2 = styled("div", {
  backgroundColor: "$color-2",
  height: 60,
  width: 60,
});
const DivColor3 = styled("div", {
  backgroundColor: "$color-3",
  height: 60,
  width: 60,
});

// TODO: in the next Task you will work on the theming
export const action = async ({ request }: ActionArgs) => {
  const currentColorScheme = await getColorScheme(request);
  const formData = await request.formData();
  const newColorScheme =
    formData.get("theme") !== currentColorScheme
      ? formData.get("theme")
      : currentColorScheme;

  return redirect(request.url, {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log("ahsss");

  return {
    colorScheme: await getColorScheme(request),
  };
};

const scheme = {
  ahmad: secondTheme,
  saman: thirdTheme,
};

export default function Theme() {
  const { colorScheme } = useLoaderData();

  const buttonRef = useRef() as any;

  const changeTheme = useCallback((newTheme: string) => {
    buttonRef.current.value = newTheme;
    buttonRef.current.click();
  }, []);
  console.log(colorScheme);

  return (
    <div className={scheme[colorScheme]}>
      <Form method="post">
        <ThemeDropdown
          theme={buttonRef?.current?.value ?? "ahmad"}
          setTheme={changeTheme}
        />
        <Mdiv>
          <DivColor1 />
          <DivColor2 />
          <DivColor3 />
        </Mdiv>
        <button ref={buttonRef} type="submit" name="theme" hidden></button>
      </Form>
    </div>
  );
}
