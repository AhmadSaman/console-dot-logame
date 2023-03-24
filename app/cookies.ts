import { createCookie } from "@remix-run/node";

export let colorSchemeCookie = createCookie("color-scheme");

export const getColorSchemeToken = async (request: Request) =>
  await colorSchemeCookie.parse(request.headers.get("Cookie"));

export const getColorScheme = async (request: Request) => {
  const selectedColorScheme = await getColorSchemeToken(request);
  return selectedColorScheme;
};
