import { FC, ReactNode } from "react";
import { CarouselItem } from "../ui/carousel";

type SlideItemProps = {
  title?: string;
  children: ReactNode;
};

export const SlideItem: FC<SlideItemProps> = ({ title, children }) => {
  return (
    <CarouselItem className="h-screen">
      <div className="p-6 h-full">
        <div className="flex flex-col gap-8 h-full">
          {title ? <p className="font-black text-7xl">{title}</p> : null}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </CarouselItem>
  );
};
