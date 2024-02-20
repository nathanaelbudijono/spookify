import * as React from "react";

import Typography from "@/components/ui/typography";
import { IoMdHome, IoIosSearch } from "react-icons/io";

type QuickBarProps = {
  isCollapsed: boolean;
};

const QuickBar = ({ isCollapsed }: QuickBarProps) => {
  return (
    <main className="py-2 bg-base-200 px-3 bg-opacity-40 rounded-md">
      <ul className="flex space-y-6 flex-col">
        {quickItems.map((menuItem) => {
          const { tag, Icon } = menuItem;
          return (
            <section
              key={tag}
              className={
                isCollapsed
                  ? "flex items-center space-x-5"
                  : "flex justify-center"
              }
            >
              <Icon className="text-lg shrink-0 text-typography-200 grow-0 max-sm:text-base" />
              {isCollapsed && <Typography variant="h3">{tag}</Typography>}
            </section>
          );
        })}
      </ul>
    </main>
  );
};

const quickItems = [
  {
    Icon: IoMdHome,
    tag: "Home",
  },
  { Icon: IoIosSearch, tag: "Search" },
];

export default QuickBar;
