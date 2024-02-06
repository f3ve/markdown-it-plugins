import type Markdownit from "markdown-it";

export const vueLinksPlugin: Markdownit.PluginWithOptions = (mdIt, options) => {
  console.log(mdIt, options);
};
