import * as React from "react";

import Typography from "@/components/ui/typography";
import { FreshFinds } from "@/constant/music";

import { FaPlay } from "react-icons/fa6";
import { ScrollArea, ScrollBar } from "@/components/ui/scrollArea";

const PopularArtist = ({ panelSize }: { panelSize: number }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const pArtist = FreshFinds;
  const [card, setCard] = React.useState<number>(5);

  React.useEffect(() => {
    if (panelSize >= 75 && panelSize < 84) {
      setCard(4);
    } else if (panelSize >= 65 && panelSize < 75) {
      setCard(3);
    } else if (panelSize >= 55 && panelSize < 65) {
      setCard(2);
    } else if (panelSize <= 65) {
      setCard(1);
    } else {
      setCard(5);
    }
  }, [panelSize]);
  return (
    <main className="h-[75vh] max-xl:h-full p-4">
      <section className="flex justify-between">
        <Typography variant="h2">Popular artist</Typography>
        <Typography variant="p" color="muted" className="mt-2">
          Show all
        </Typography>
      </section>
      <ScrollArea className="w-full border-none whitespace-nowrap rounded-md border">
        <section className="mt-3 flex gap-4">
          {pArtist.slice(0, card).map((item, index) => {
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
};

export default PopularArtist;
