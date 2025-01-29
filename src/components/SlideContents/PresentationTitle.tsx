import { FC } from "react";
import { TechstacksIcon } from "../icons/Techstacks";

export const PresentationTitle: FC = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="grid gap-12">
        <p className="text-6xl font-black">
          The Foundation of Web Interfaces: Front-End Explained
        </p>
        <div className="text-3xl font-bold text-techstacks flex items-center gap-4 justify-end">
          <TechstacksIcon className="size-10" />
          <p>Techstacks</p>
        </div>
      </div>
    </div>
  );
};
