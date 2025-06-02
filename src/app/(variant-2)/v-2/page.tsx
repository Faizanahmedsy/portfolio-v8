"use client";
import { VariantSwitch } from "@/components";
import SpotlightCard from "@/Components/SpotlightCard/SpotlightCard";
import { ProjectsData } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { Menu } from "lucide-react";
import { it } from "node:test";

type Props = {};

export default function Page({}: Props) {
  // const words = [
  //   "A-Frontend-Developer",
  //   "A-BTech-Student",
  //   "A-Lover-of-making-things-beautiful",
  // ];

  return (
    <>
      <main
        className="md:px-[24%] px-6 flex-wrap flex justify-center  flex-col  overflow-hidden"
        suppressHydrationWarning
      >
        <header className="flex md:gap-4 justify-between my-10">
          <VariantSwitch />
          <nav className="hidden md:flex md:gap-4">
            <div>Home</div>
            <div>About</div>
            <div>Resume</div>
          </nav>
          <div className="flex md:hidden justify-center items-center">
            <Menu />
          </div>
        </header>
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi there, I&apos;m Faizan
        </h1>
        {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <FlipWords words={words} /> <br />
        </h1> */}
        <p className="md:leading-7 [&:not(:first-child)]:mt-6 md:text-2xl tracking-normal">
          I&apos;m a driven Software Engineer with a passion for building{" "}
          <strong className="text-violet-300">scalable</strong>,{" "}
          <strong className="text-violet-300">user friendly</strong> and{" "}
          <strong className="text-violet-300">beautiful</strong> web
          applications.
        </p>
        {/* <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl tracking-normal">
          I&apos;m proficient in modern frontend web technologies like Next JS,
          Svelte kit, React, Three JS, Tailwind and more
        </p> */}

        <p className="md:leading-7 [&:not(:first-child)]:mt-6 md:text-2xl tracking-normal">
          Currenly a{" "}
          <strong className="text-yellow-200">
            Frontend Engineer @Devstree{" "}
          </strong>{" "}
          promanatly working With Next Js, Three JS and Tailwind, I have
          completed 10+ live projects in the past 1 year.
        </p>

        <p className="md:leading-7 [&:not(:first-child)]:mt-6 md:text-2xl tracking-normal">
          Currenly working on{" "}
          <span className="text-blue-300 font-medium">Smart Donkey</span> - An
          Online platform to learn skills that schools didn&apos;t taught and{" "}
          <span className="text-blue-300 font-medium">Kitty Kit</span> - A
          Frontend Toolkit for all the frontend developers needs
        </p>

        <div className="grid  md:grid-cols-4 gap-6 mt-6 grid-cols-2">
          <div className="border p-2 md:px-10 text-center rounded-md">
            Linkedin
          </div>
          <div className="border p-2 md:px-10 text-center rounded-md">
            Github
          </div>
          <div className="border p-2 md:px-10 text-center rounded-md">Mail</div>
          <div className="border p-2 md:px-10 text-center rounded-md">
            Twitter
          </div>
        </div>

        <h2 className="mt-10 scroll-m-20   pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My Work
        </h2>

        <div className="grid md:grid-cols-2 py-4 gap-4">
          {ProjectsData.map((product, i) => (
            <SpotlightCard key={i} className="border p-5 rounded-md">
              <div className="flex justify-between">
                <h2 className="font-bold ">{product.title}</h2>
                <p
                  className={cn(
                    "text-xs text-zinc-400 border px-2 py-1 rounded-2xl max-h-6",
                    product.status === "Completed" &&
                      "text-green-100 border-green-700",
                    product.status === "In Progress" &&
                      "text-yellow-100 border-yellow-700",
                    product.status === "On Hold" &&
                      "text-red-100 border-red-700"
                  )}
                >
                  {product.status}
                </p>
              </div>
              <p className="mb-4 mt-2 text-zinc-400">{product.des}</p>
              <div className="flex gap-4 flex-wrap">
                {product.tech.map((tech, i) => (
                  <div
                    key={product.title}
                    className="bg-zinc-500 px-3 py-1 rounded-2xl"
                  >
                    <p className="text-xs">{tech}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
        {/*<p className="leading-7 [&:not(:first-child)]:mt-6">
          The king thought long and hard, and finally came up with{" "}
          <a
            href="#"
            className="font-medium text-primary underline underline-offset-4"
          >
            a brilliant plan
          </a>
          : he would tax the jokes in the kingdom.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king&apos;s subjects were not amused. They grumbled and
          complained, but the king was firm:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him down: a court jester named Jokester.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Jokester&apos;s Revolt
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn&apos;t help but laugh.
          And once they started laughing, they couldn&apos;t stop.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          The People&apos;s Rebellion
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  King&apos;s Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  People&apos;s happiness
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Empty
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Overflowing
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Modest
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Satisfied
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Full
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Ecstatic
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The moral of the story is: never underestimate the power of a good
          laugh and always be careful of bad ideas.
        </p>*/}
      </main>
    </>
  );
}
