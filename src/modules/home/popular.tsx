import * as React from "react";

import Typography from "@/components/ui/typography";
import { FreshFinds } from "@/constant/music";

import { FaPlay } from "react-icons/fa6";

const Popular = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const pArtist = FreshFinds;
  return (
    <main className="h-[75vh] max-xl:h-full p-4">
      <section className="flex justify-between">
        <Typography variant="h2">Popular albums</Typography>
        <Typography variant="p" color="muted" className="mt-2">
          Show all
        </Typography>
      </section>
      <section className="grid gap-4 grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-3 max-lg:grid-cols-2 mt-3">
        {pArtist
          .slice(0, 5)
          .reverse()
          .map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col bg-secondary-100/10 rounded-md p-4 hover:bg-secondary-100/50 duration-200 ease-in-out transition-colors"
              >
                <div className="h-[250px] overflow-hidden relative">
                  <img
                    src={item.cover}
                    alt={item.name}
                    className="object-cover rounded-md h-[350px] w-full"
                  />
                  {hoveredIndex === index && (
                    <FaPlay className="absolute shadow-xl z-10 bottom-5 right-5 bg-primary-100 p-3 h-12 w-12 rounded-full" />
                  )}
                </div>

                <div className="mt-2 text-start">
                  <Typography variant="h3" className="mt-2">
                    {item.name}
                  </Typography>
                  <Typography variant="p" color="muted" className="mt-2">
                    {item.artist}
                  </Typography>
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Popular;
