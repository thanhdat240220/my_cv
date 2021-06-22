import { listTechDefault } from '@interface/Model/common';

export type TLanguageDev = {
  name: listTechDefault;
  link?: string;
  color?: string;
};
export const listTechConfig: Array<TLanguageDev> = [
  {
    name: "javascript",
    color: "#deaa07",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "c#",
    color: "#5b1150",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "css",
    color: "#264de4",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "typescript",
    color: "#3178c6",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "html",
    color: "#f77900",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "react",
    color: "#48cef7",
    link: "https://reactjs.org/",
  },
  {
    name: "nodejs",
    color: "#00a7d0",
    link: "https://golang.org/",
  },
  {
    name: "scss/sass",
    color: "#c96097",
    link: "https://sass-lang.com/",
  },
];
