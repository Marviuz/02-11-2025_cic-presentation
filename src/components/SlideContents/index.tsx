import { FC } from "react";
import { PresentationTitle } from "./PresentationTitle";
import { Intro } from "./Intro";
import { WhatIsFrontEnd, WhatIsFrontEndNotes } from "./WhatIsFrontEnd";
import { ThreeKeyElements, ThreeKeyElementsNotes } from "./ThreeKeyElements";
import { HtmlDefinition, HtmlDefinitionNotes } from "./HtmlDefinition";
import { CssDefinition, CssDefinitionNotes } from "./CssDefinition";
import {
  JavaScriptDefinition,
  JavaScriptDefinitionNotes,
} from "./JavaScriptDefinition";
import { Demo } from "./Demo";
import { End } from "./End";
import {
  CssLibrariesFrameworks,
  CssLibrariesFrameworksNotes,
} from "./CssLibrariesFrameworks";
import {
  JavaScriptLibrariesFrameworks,
  JavaScriptLibrariesFrameworksNotes,
} from "./JavaScriptLibrariesFrameworks";

type SlideItem = {
  title?: string;
  Component: FC;
  Notes?: FC<{ active: boolean }>;
};

export const SlideItems: SlideItem[] = [
  {
    Component: PresentationTitle,
  },
  {
    Component: Intro,
  },
  {
    title: "What is the front-end",
    Component: WhatIsFrontEnd,
    Notes: WhatIsFrontEndNotes,
  },
  {
    title: "Three Key Elements",
    Component: ThreeKeyElements,
    Notes: ThreeKeyElementsNotes,
  },
  {
    title: "HyperText Markup Language (HTML)",
    Component: HtmlDefinition,
    Notes: HtmlDefinitionNotes,
  },
  {
    title: "Cascading Style Sheet (CSS)",
    Component: CssDefinition,
    Notes: CssDefinitionNotes,
  },
  {
    title: "CSS Libraries & Frameworks",
    Component: CssLibrariesFrameworks,
    Notes: CssLibrariesFrameworksNotes,
  },
  {
    title: "JavaScript (JS)",
    Component: JavaScriptDefinition,
    Notes: JavaScriptDefinitionNotes,
  },
  {
    title: "JavaScript Libraries & Frameworks",
    Component: JavaScriptLibrariesFrameworks,
    Notes: JavaScriptLibrariesFrameworksNotes,
  },
  {
    Component: Demo,
  },
  {
    Component: End,
  },
];
