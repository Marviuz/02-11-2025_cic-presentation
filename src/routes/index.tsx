import { createFileRoute } from "@tanstack/react-router";
import { SlideItems } from "@/components/SlideContents";
import { SlideItem } from "@/components/slides/SlideItem";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import { useBroadcastChannel } from "@/hooks/use-broadcast-channel";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  const [api, setApi] = useState<CarouselApi>();
  const { setSlide } = useBroadcastChannel();

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

  useEffect(() => {
    api?.on("slidesInView", (evt) => {
      const slideIndex = evt.slidesInView().at(0);
      if (typeof slideIndex === "undefined") return;

      setSlide(slideIndex);
    });
  }, [api, setSlide]);

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
