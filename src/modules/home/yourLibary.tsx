import { Badge } from "@/components/ui/badge";
import Typography from "@/components/ui/typography";
import { BsCollection } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";

type YourLibraryProps = {
  isCollapsed: boolean;
};

const YourLibrary = ({ isCollapsed }: YourLibraryProps) => {
  return (
    <main className="py-2 mt-2 bg-base-200 px-3 bg-opacity-40 rounded-md overflow-auto">
      <section
        className={isCollapsed ? "flex items-center" : "flex justify-center"}
      >
        <BsCollection className="shrink-0 text-lg text-typography-300 max-sm:text-base" />
        <div>
          {isCollapsed && (
            <div className="flex items-center">
              <Typography
                variant="h4"
                color="muted"
                className="ml-6 mt-2 text-nowrap"
              >
                Your Library
              </Typography>
              <div className="flex items-center ml-3 space-x-3">
                <GoPlus className="text-lg text-accent-100 max-sm:text-base" />
                <IoMdArrowForward className="text-xl text-accent-100 max-sm:text-base" />
              </div>
            </div>
          )}
        </div>
      </section>
      <section>
        {!isCollapsed && (
          <div className="flex justify-center mt-5">
            <GoPlus className="text-lg shrink-0 text-accent-100 max-sm:text-base" />
          </div>
        )}
        {quickItems.map((item, index) => {
          return (
            <section key={index}>
              {isCollapsed && (
                <div className="mt-8 bg-secondary-100 px-6 py-4 bg-opacity-40 rounded-md overflow-auto">
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="small" color="muted">
                    {item.subtitle}
                  </Typography>
                  <Badge className="mt-6">{item.badge}</Badge>
                </div>
              )}
            </section>
          );
        })}
      </section>
    </main>
  );
};

const quickItems = [
  {
    title: "Create your first playlist",
    subtitle: "It's easy, we'll help you",
    badge: "Create playlist",
  },
  {
    title: "Let's find some podcasts to follow",
    subtitle: "We'll keep you updated on new episodes",
    badge: "Browse podcasts",
  },
];

export default YourLibrary;
