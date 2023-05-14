import Image from "next/image";
import EmailIcon from "@/components/Icons/EmailIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import portraitImage from "@/public/images/portrait.webp";
import { getSocialMetas } from "@/utils/getSocialMetas";

const About = () => {
  return (
    <>
      {getSocialMetas(
        "https://ilijaradivojevic.com/about",
        "About Ilija Radivojevic",
        "Hello. My name is Ilija Radivojevic and I am a front end software engineer. I try to make life easier and world a better place by writing good software.",
        "",
        "Ilija Radivojevic, Front end developer, Javascript, React, Typescript, Nextjs, Software development, Software engineer, Front end engineer"
      )}
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <Image
                      src={portraitImage}
                      alt=""
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="h1">
                    Ilija Radivojević: Subotica&apos;s Conduit for Reality-Bound
                    Ideas.
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                      From the moment I could string together sentences, a
                      passionate curiosity for creation has been my constant
                      companion. My first encounter with programming occurred at
                      the tender age of six, a mere fortnight after my mother
                      introduced me to our gleaming new Pentium III. On this
                      technological marvel, I embarked on a self-taught typing
                      journey.
                    </p>
                    <p>
                      Interestingly, it was my distaste for monotony that nudged
                      me towards the fascinating world of coding. I was irked by
                      the repetitive tasks that my PC demanded of me and
                      thought, &quot;Why not delegate this to the machine?&quot;
                      Thus, I found myself immersed in the realms of Visual
                      Basic and later, AutoIt, enabling me to automate the
                      tedious chores on my PC.
                    </p>
                    <p>
                      My leisure hours were filled with the thrill of video
                      gaming. However, when the games started to lose their
                      charm, I turned my coding skills towards crafting bots and
                      cheats, purely for amusement. My toolbox included AutoIt
                      for creating auto-clicker bots using pixel detection,
                      Cheat Engine for games that housed variables client-side,
                      and eventually, I discovered the capabilities of WPE Pro.
                    </p>
                    <p>
                      WPE Pro, a prominent packet editor, was predominantly used
                      for manipulating multiplayer games. While it made hacking
                      client-side games a walk in the park, I soon found myself
                      yearning for a more formidable challenge. This was when
                      the expansive universe of the Web caught my attention.
                      With a newfound understanding of ethical responsibilities,
                      I decided that my future lay in more constructive
                      endeavours.
                    </p>
                    <p>
                      By the age of 14, I was fluent in XHTML and CSS basics. My
                      high school years further enriched my programming arsenal
                      with Javascript, PHP, and MySQL.
                    </p>
                    <p>
                      Today, I hold a cherished place within the Poslovi
                      Infostud team, an exceptional collective that&apos;s
                      dedicated to bridging the gap between job seekers and
                      their dream roles. It&apos;s an honor to employ my talents
                      in this crucial mission, fueling my enduring passion for
                      innovative solutions and creative problem-solving.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list flex">
                    <li className="flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                        href="https://github.com/IlijaRad"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
                        <span className="ml-4">Follow on GitHub</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                        href="https://www.linkedin.com/in/ilija-radivojevic-a49875229/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkedInIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
                        <span className="ml-4">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                        href="mailto:ilija.radivojevic237@gmail.com"
                      >
                        <EmailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
                        <span className="ml-4">
                          ilija.radivojevic237@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
