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
