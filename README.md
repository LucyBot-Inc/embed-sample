# LucyBot Embed Sample
Learn how to embed LucyBot components in an existing website

## Setup
Most of this repository contains Angular 2 boilerplate, but there are two additional steps to get LucyBot
components into your Angular app:

### OpenAPI
The OpenAPI definition is contained in `./openapi.json`.
It is loaded by setting `window.lucybot.openapi.default` in ./app/openapi.js.

You can load multiple API definitions and switch between them by calling `OpenAPIService.retrieveSpec(specName)`.

### Angular Module, Components, and Pipes
In ./app/app.module.ts, we add the line `import * as LucyBot from lucybot/app/embed.module;`,
and add `LucyBot.EmbedModule` to the `imports` array.

Now you can use the `<api-call>`, `<operation-documentation>`, and `<schema>` components provided by LucyBot,
as well as the `OpenAPIService`.

## Usage
./app/components/home.ts contains the logic and HTML of this demo. It shows how to use each
of the above components, as well as the `OpenAPIService`.

For example:
```html
<div class="box">
  <operation-documentation [apiCall]="openapi.getAPICall('GET /albums')"></operation-documentation>
</div>
```
