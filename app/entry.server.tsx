import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

// getCssText for the server side style
import { getCssText } from "config/stitches.config";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(
    /<\/head>/,
    `
    <link rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/dark.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-dark.css" integrity="sha512-6TNeuM0qy53coeyqVAiTdCjcBi26zGhbvVIjTOLNI0lcWW0Aoa3/TwMcPWNSjbmmK8nsCowwKIp9gnBCi4J3YQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style id="stitches">
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  ${getCssText()}
  </style></head>`
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
