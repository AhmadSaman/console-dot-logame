import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { globalStyles } from "config/stitches.config";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Console Logame",
  viewport: "width=device-width,initial-scale=1",
  ["og:image"]:
    "https://user-images.githubusercontent.com/55833403/234310259-589831f2-9721-482d-8773-02f24f65076f.png",
});

export default function App() {
  globalStyles();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
