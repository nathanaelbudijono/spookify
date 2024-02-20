import * as React from "react";

import { Button } from "@/components/ui/button";
import { CiShuffle } from "react-icons/ci";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPlay,
  FaCirclePause,
  FaVolumeHigh,
} from "react-icons/fa6";
import { SlLoop } from "react-icons/sl";
import { Progress } from "@/components/ui/progress";
import { AiOutlineSmallDash } from "react-icons/ai";
import { BsFilePlay, BsPhone } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Slider } from "@/components/ui/slider";
import Typography from "@/components/ui/typography";

const Play = () => {
  const [pause, setPause] = React.useState(false);
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      <main>
        <section className="flex justify-center">
          <Button>
            <CiShuffle className="text-lg shrink-0 text-accent-100 grow-0 max-sm:text-base" />
          </Button>
          <Button>
            <FaBackwardStep className="text-xl shrink-0 text-typography-200 grow-0 max-sm:text-lg" />
          </Button>
          <Button onClick={() => setPause(!pause)}>
            {pause ? (
              <FaCirclePause className="text-2xl shrink-0 text-typography-200 grow-0 max-sm:text-xl" />
            ) : (
              <FaPlay className="text-2xl shrink-0 text-typography-200 grow-0 max-sm:text-xl" />
            )}
          </Button>
          <Button>
            <FaForwardStep className="text-xl shrink-0 text-typography-200 grow-0 max-sm:text-lg" />
          </Button>
          <Button>
            <SlLoop className="text-lg shrink-0 text-accent-100 grow-0 max-sm:text-base" />
          </Button>
        </section>
        <div className="max-w-xl max-sm:max-w-lg mt-1 mx-auto flex gap-3 items-center">
          <AiOutlineSmallDash className="text-accent-100 shrink-0 text-sm" />
          <Progress value={progress} />
          <AiOutlineSmallDash className="text-accent-100 shrink-0 text-sm" />
        </div>
      </main>
      <main className="flex gap-3 absolute top-5 w-[20%] right-0 max-sm:invisible">
        <BsFilePlay className="text-lg shrink-0 text-accent-100 grow-0 max-sm:text-base" />
        <HiOutlineQueueList className="text-lg shrink-0 text-accent-100 grow-0 max-sm:text-base" />
        <BsPhone className="text-lg shrink-0 text-accent-100 grow-0 max-sm:text-base" />
        <FaVolumeHigh className="text-lg shrink-0 text-accent-100 grow-0 max-sm:text-base" />
        <Slider defaultValue={[33]} max={100} step={1} />
      </main>
    </main>
  );
};

export default Play;
