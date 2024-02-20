"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <nav className="w-full top-0 sticky z-40 ">
      <main className="bg-base-200 py-3 rounded-md">
        <main className="flex justify-between px-7 gap-2">
          <section className="flex space-x-5 text-typography-100 cursor-not-allowed">
            <GoChevronLeft className="text-lg max-sm:text-base w-8 p-1 h-8 rounded-full bg-base-100" />
            <GoChevronRight className="text-lg max-sm:text-base w-8 p-1 h-8 rounded-full bg-base-100" />
          </section>
          <section className="flex items-center gap-4">
            <Badge>Explore Premium</Badge>
            <Badge>Install App</Badge>
            <IoIosNotifications className="w-8 p-1 h-8 rounded-full bg-base-100 text-accent-100 hover:scale-105 ease-in-out duration-200" />
            <Avatar>
              <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFxgYFxUVFRUVFRUXGBgWFxUVFRUYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUvLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QANBAAAgEBBQYFBQABBAMAAAAAAAECEQMhMUHwBFFhcYHBEpGhsdEFIjLh8UIUgqLCEyMz/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECBAMGBQf/xAAsEQACAgEDAwIFBAMAAAAAAAAAAQIRAyExQQQS8AVRIjJhcYGRscHREzNC/9oADAMBAAIRAxEAPwD4+z4jrnuv6vAiLLldFcb/AIPkM/RI/sKMbqlWscFuQ7NYbl/ETN1q+IuTpSUQ3cWVaTq29XL+DpgiKa10AHpqSjR3UW5X82Jq/ldr1Fx3gNKkKT9BxwZMUWv2BG7sSfoV/j5GSZrlTihg9Sngt1TSclV0VKft0a1gRXDnr2BTu56+BDS1M0WkZf8AkVUs3V8Mi6iLTTsJK4lfA5vWuRKxEWinIcMUROVEVZXu7NAO1sXG0pz75PoKDub3+fEThxGoOlbqL3vyEWmWs3u0iJhX1FN1ARdm/YdniKLors7umYJgVsi/FixJircICXsaJ3DRPAqICSNGxJiQhg/c1TAkAJpHmGjdSKFRRbOEDWTota3mM8lu0y5yqZ0vEipu3SNpTz3/AMXciboKt6Jk7wQSehpW7mTJ3BJiQA96NIK4JO561kDYgBvhCjEtq7r2EmU8ub7AFFLGNOJDdalRd/R+RLd1c61AOTj2h0tIPmdTZx7eq0yux1yJs9qdMC3FuKZlhnjDLOL+n7HY2NYs5ZWsqYma2mSq7iexnZ9VBb2dG1zpBvoaWUrlyPL2jaXJUe9YI9HY51inwHKDjEjB1Ec2Z9u1fyaJlylcQhpnM3ItCpeEGKN7EM2ngZxKmREEOW5byKjvJZUQDkpfodRVv5CATNVhUUQe4cQB+xaQC8LYAOvoee92rwrSr6IdpgRLJav0izO9CqUFUpkNjIKjvQRWZKy1rMtO4RQhMEwkwFRQUCBUMQGrYKJUsF1KsrVxkmknTKSqr01eurDaJ1o7sMlT0QiqoTxuu+3mS8B1vdNxLwAEebtkk59F+zmdtTAq0lfKXP4RyVNkY6Hm82f421y2dMtplvKtLf7b8cPkxgjOcqh2oHmmou3uXKdx6H0yf203P3PMk8Ds+mT+6XFVFmXwnT0/JWdfXQ9MrInIpmM9KuQRVmRUuGAmOG47R69hWZJTAL1sbKRCLGIaZcMSCoiGi5FQM6l2YBya1AigCKtnnSvYqjEdDKy1gQWyBiKSGOCBdyS2tiaZcRMAbATNI/jUIg8EN5AUlQReY32IZaxAbY5R/IUld1+SrRY8ybSXuAlseBby/JcX6GEb2b7bH75c/e856m9bHkcmmRp8MqTE3cS2EnkOiXISZ1/TJf8As6P2OJnZ9LhWdd1fgnJ8rOvRt/54Je57QN5BW4kwHrUymaN/aZFSxoBSeg44DmEASbYBwNItEsuUq7ul2AAgKRMS1gIpIEXAhMsBFxmkBShUBaHT4uDyhoKXa6jWBZmobJgix0yCwUbYkApY9ABDluSUsSUVQARSBlO5EtXCHWgA32EP4GSzWWZlJl2kseZGQijy/qsL09/Y8w9H6hbVl4ckcXgRux6RVnlusSlnk4+5JDZo43dSVEtGVpmbPU+kRuk+NDzWd/0m1V8c26ojN8jNXp9LqI39T1RIHgBiPUFbgQmwiIovf5CTB4CQBZaLWBMS5ANKkCRpL2Is9dBiKeiHEuyINLMAW5cpAQAUJyZwrIGNZeYhkGkN5MM2PIHhQGVHYkBsGBMkQisyUUkAGkwk/QUnr2JTAd6CY12ConIBGk+5BG0W6VWzhn9RvuVS4wb2OGTqcWNfEzk22VZS5mKlkOcqtvezOJtS0o8tOdzcvdmsocjJh42Q2NIic09hp3GmzS8Mk+JnLcKct28dWhKXZJS9j6SWCHDM8iH1GSSrRnZYbfFq9U9jFLFJHpsXX4Mml19zrYkSrRO9Oo2czYmnqihioNiGjSLGiZ9ihHSy44CRWXJBFCRUuBo1izKKLihk8lV4ASMBnJvE8ATu5hIBMENjyE8gFQnkCQMcUMGiUimITxAGUS5CnOlWedbbXktavLjByMubqI4lbOm22lLWtM5rfam7sLr+l7Oa1tvenlj2JtHXy+WaI4kj5OfrpSbSehpaN1dcXh3MDa3le+iXVXshxotczoYJW0Rx3GeRpX7eZll112LOLElcEUVS4H+hWCiRJhSiv1XDuFqshJ3a1vKWxzluVKOC1fj6GsVd0r7foxri8/nTCLqr+nuxDTrYrZptPFqlW+SvOzZvqEq0d9387HFCNzW+i7vsupdk14m8u1Pj2JlFPdGjBmyY2u2VeefqexDb4N0rTmdMJJ3p1PmW8Xv18HRsVu4u7gtepyn06q0fQ6f1eTklkWnufQs0pejGEqqqzN4LMxs9BHUqWHMIuopSHZgi29SkykSsWVACa1K8Qg8IAO37nEhpg0NIAaKZDKqSAnuJ4mhDKWAD4IqJsBTd40RJnNt87jzLN38r/K5HVts79YnFB4pZ/s2441E8z1eXuy/YIKr4L+lSV1eDfuVL7U97VO77ESjVLyLTM0o0q5NreNMSLV/alm731v8AahptV8kuC4XUJnCq4u/lwFZ07XTSMWgUfju+x2WGxylldvHb2HhuJeRXR0j0WTs72tDgpeTPI6bSzp6N9f0c9pEtOzPPG4qjKRUI/PRAleXZX140+X6lNnCMbepnMqapdu+b/WvkehH6e3FSW+tPY4tosmneSpxbo75OmyYo90luYxd/n64jTu5016eoRiEsizLqh1z3K7XkFm6Jvdd1dxE/hfJcldFLPHm/1QBJ6+bnu/TZ1s4rd3w9Du8R4/0y2++mT7YHr0MGWNSPX9DlWTBGuNP0CppBkJGnhuORtSFFmqZnFGvhAofiEKgAFnGWsCUiqAH1BEspCYEhN9AQmOzACGZW0jSWZybbPLfcXBWzP1M+2LZxbRO5t51OfZlWS3Z9L2XtcqyosEqGVjv33fJuS+E8pOV5ft4yrW08UmzSzy1ncYU1rqaqVNb7vaoNaUOMm5dzO2xsqutMkr7/AF5J+Z2Rslf09DKytYws4vOnq3ryCG3b0ZZ9zeh97pVghBdz1ep6MFRGW0bOpGlhaqSqiqoy20z7zjDJjp6pnj7RYurbOKcbub9v6/I+kbT3M49s2JNVikmtxpx5+GfF6r0ttOUHZ4sLJu/HVF38j0dh2DOWt537LYxjFXLC81nJZvIU87eiK6X0qGNLJkd/Qi0jckvI8+3sqs7JbVHecO17clVRVcq/AsalexfWZMPa25I4bTZ2r0sWYWsqO7JcHjWpv/rJt4qnJHNtDzzd5tjfJ5fO8bTePzxmaNPFToqdWKyV7e5E2mC5V8/1Q6GTZWd2wypLxYLsr2fQI+WtJUSjup54v1Z9HsE6xjXLH3+DL1Ef+j7/AKPl1eL8/nk6WjSUjFM0RkPQ2VDEsizZohDaFUAQDJs5UNElVEU9hIGCCQxUTJDiDQIAS0M5nBtTvruVfjsdk5Hn7bK7n216HXEtT5/XSqByRs7q7+/6qzKuRu7T2pr18zKwjXz9Fj2Nt+55lxVpRLaSouFX2I3c/wBGjV7euHbyIs4316Lnh+xWW46pHVbYRWV7rlw1xMpu6rxq10uo9cBK0v63eWHKpnay1z/Qki5TVWjrsNppncJbQ6c37Y+5x5c+xrBqtNy/b9biXBHWPUzaq/GdP+paoPaNvfh8Oeb4bji8Tctde5E53+of4lexT63IotKWmx6cfqVI0phccdptknjnXyWkcy/Gur9IP55X+9BrFFHHJ12bIkm9KKhaOjYt3V/AnuNLdUrw96Vfv6HQyq6bb2MrLB729e4p3vghxSVG80/ha4GkIfjHN3vrh2CyVFvTz6fuTBUVN71riJfdJLe/T+FSdZPcsOxjF58/W4aFJpNLj+i3Gr5v3eJ7n0udfEuK/Z5TujXW73qd/wBFle1vSZyzawZv9Obh1EU+f6PURohUKRgPWIcWaSJSvHURUhoZNAGTqcywGhFIBslYlSJzHMABktlmNqwW4SdROLa9oyOHabT41/yN7aLbu3nBbPBa1Q24oo8x1uaWo6lxu9F53v0M9xea838eR1Z87GzS1wvxb9Mfdkxw5d6pe4Sf3Ph3/pCf2vXISR2nJJ+ebii3S7Var2HPJdWVZP7d+NehEcK5u/v8AQlpXuW8uGn3M4Zjr9vFug4teQDetEVx6L5IaNfDd6vt3Ig8NXabGc2uGFo/Tvf7UDctavfkK03Z199IG8XuuQ+Cb+JlK+ryRK11NbDNZLHnl7BYySvefbALKcE6t7kWn5U6dFj6gpurazr0VDI1hg291F1xfkn5jrQ5qTcrREpeuvYcI3LmT2Xq9ehpGlVV3K9+9OwMS1dhb5Lz7nTsNpS0i9XnMr6yebS7vXE1sb297ePMT1VHSDccikve1+D6UuJxbDa+KPJ0XLI7InzZKnR7bFkWSCkuS4PEaZKwGSi5FoCAHRPcYIqJKGgG2LMbEymAIGYWxtQwt8QjuGX5TztslR0WSp1f5elUefWt/E6trlWT4e5zLCm9/wB7G/HojyPWPvnoKzTdOLKi72ws1Sr3XCnF4aq/4W9TPFdqvzzcc5XU33v4BK561kZy7F2WD1h/UAJ2xzV1ONPLXoTJ5LgvkU5Xjs439PVhwVvKkVNYJE0y39/0HiubM/Hn0ChOS89h2k8dXYIiLHaInMpLQ4OT7jSt7etfAmsPNjs1X216lSldXfpdhFJcgnjxJftp+o/DdrX9Fn6fI0ErrUfhvpy15lWrwphX9dirOLx3L1dSLR303dg5Br4bJSu9dazE4u/zeubRSvotUufwPxY8fZfv2AVKi5XRS3KvV3vt5D2eVF5vsu5g3XrpFzd7SwwXRUElwVLJT7lxt59ke19HtKxa3P3PSPE+iypKm+7v8eZ7eaMGZVM9Z6Zkc+mV7rQoZGZVcTmjdIYDUgGQYPsEQARQSyGhgDGtxLM5rfMACO5Gb5DxLbB63kAB9FHj8m/nuVZYf7kRP8urAAJfyr8GWvc6LFfjr/IQDZENzGOvM0efPsMAZWMzlh0+TOOXP4ACuDlLcHiAABCLs+z7Glrl0/7DAl7miHysn/JayM3i+bABojJt+Wddlh1+DkfYACIsu0To2T8vL3RzLt8iAI7seT5Ifn+BrHqvYvZ/yjz7AAyFuvv/ACdOw/8A06o+jWKADF1PzI9P6N/ql9wWOuI44CA4I+pLg0QAAxI//9k=" />
              <AvatarFallback>BW</AvatarFallback>
            </Avatar>
          </section>
        </main>
        <main className="mt-5 flex gap-3 px-7">
          {quickHeader.map((item) => (
            <Button
              key={item.tag}
              variant="outline"
              className="text-typography-100 bg-accent-100 bg-opacity-20 rounded-xl border-none"
            >
              {item.tag}
            </Button>
          ))}
        </main>
      </main>
    </nav>
  );
};

export default Header;

const quickHeader = [{ tag: "All" }, { tag: "Music" }, { tag: "Podcasts" }];
