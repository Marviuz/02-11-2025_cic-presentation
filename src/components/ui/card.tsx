import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren<{ active?: boolean }>> = ({
  children,
  active,
}) => {
  return (
    <div
      className={cn("border h-full rounded-3xl", active && "ring ring-primary")}
    >
      <div className="p-6">
        <div className="grid justify-items-center gap-8">{children}</div>
      </div>
    </div>
  );
};
