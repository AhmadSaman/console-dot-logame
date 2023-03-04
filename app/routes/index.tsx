import { useRef } from "react";
import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import ThemeDropdown from "~/components/ThemeDropdown";

// TODO: in the next Task you will work on the theming
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  console.log(formData.get("theme"));
  return redirect(request.url);
};

export default function Index() {
  const buttonRef = useRef() as any;

  const changeTheme = (newTheme: string) => {
    buttonRef.current.value = newTheme;
    buttonRef.current.click();
  };

  return (
    <Form method="post">
      <ThemeDropdown
        theme={buttonRef?.current?.value ?? "ahmad"}
        setTheme={changeTheme}
      />
      <button ref={buttonRef} type="submit" name="theme" hidden></button>
    </Form>
  );
}
