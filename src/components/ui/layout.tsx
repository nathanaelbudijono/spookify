import cn from "@/lib/utils";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

export default function Layout({ className, children, ...rest }: LayoutProps) {
  return (
    <div className={cn("max-w-8xl mx-auto flex flex-col", className)} {...rest}>
      {children}
    </div>
  );
}
