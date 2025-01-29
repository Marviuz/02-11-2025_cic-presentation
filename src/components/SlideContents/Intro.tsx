import { profileImage } from "@/assets";
import { FC, PropsWithChildren } from "react";
import { TechstacksIcon } from "../icons/Techstacks";
import { cn } from "@/lib/utils";

export const Intro: FC = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex gap-4">
        <img src={profileImage} className="size-56 rounded-full border" />
        <div className="flex flex-col justify-center gap-4">
          <p className="font-black text-5xl">
            <GreenText>Mar</GreenText>cus Le<GreenText>vi</GreenText>ticus Dela
            Cr<GreenText>uz</GreenText>
          </p>
          <p className="text-3xl font-semibold text-muted-foreground">
            Head of Front-end Engineering Team @{" "}
            <GreenText className="font-poppins">
              Techstacks <TechstacksIcon className="inline-block size-10" />
            </GreenText>
          </p>
          <p className="text-xl font-semibold text-techstacks">
            https://marviuz.me
          </p>
        </div>
      </div>
    </div>
  );
};

type GreenTextProps = PropsWithChildren<{
  className?: string;
}>;
const GreenText: FC<GreenTextProps> = ({ children, className }) => {
  return <span className={cn("text-techstacks", className)}>{children}</span>;
};
