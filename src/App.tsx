import { FC, useEffect, useState } from "react";
import { CssDefinition } from "./components/SlideContents/CssDefinition";
import { Demo } from "./components/SlideContents/Demo";
import { End } from "./components/SlideContents/End";
import { HtmlDefinition } from "./components/SlideContents/HtmlDefinition";
import { Intro } from "./components/SlideContents/Intro";
import { JavaScriptDefinition } from "./components/SlideContents/JavaScriptDefinition";
import { PresentationTitle } from "./components/SlideContents/PresentationTitle";
import { WhatIsFrontEnd } from "./components/SlideContents/WhatIsFrontEnd";
import { SlideItem } from "./components/slides/SlideItem";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "./components/ui/carousel";

type SlideItem = {
  title?: string;
  Component: FC;
};

const SlideItems: SlideItem[] = [
  {
    Component: PresentationTitle,
  },
  {
    Component: Intro,
  },
  {
    title: "What is the front-end",
    Component: WhatIsFrontEnd,
  },
  {
    title: "Hypertext Markup Language (HTML)",
    Component: HtmlDefinition,
  },
  {
    title: "Cascading Style Sheet (CSS)",
    Component: CssDefinition,
  },
  {
    title: "JavaScript",
    Component: JavaScriptDefinition,
  },
  {
    Component: Demo,
  },
  {
    Component: End,
  },
];

export default function App() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    function handler(event: KeyboardEvent) {
      if (!api) return;
      if (event.key === "ArrowLeft") {
        api.scrollPrev();
      }

      if (event.key === "ArrowRight") {
        api.scrollNext();
      }
    }

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [api]);

  return (
    <Carousel setApi={setApi} className="h-screen">
      <CarouselContent>
        {SlideItems.map(({ Component, title }, i) => (
          <SlideItem title={title} key={i}>
            <Component />
          </SlideItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
