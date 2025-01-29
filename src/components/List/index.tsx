import { cn } from "@/lib/utils";
import { ComponentPropsWithRef, FC } from "react";

export const List: FC<ComponentPropsWithRef<"ul">> = ({
  className,
  ...props
}) => {
  return (
    <ul
      className={cn("space-y-8 list-disc list-inside", className)}
      {...props}
    />
  );
};

export const ListItem: FC<ComponentPropsWithRef<"li">> = ({
  className,
  ...props
}) => {
  return <li className={cn("", className)} {...props} />;
};
