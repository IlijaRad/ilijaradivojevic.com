import Image from "next/future/image";
import EmailIcon from "@/components/Icons/EmailIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import portraitImage from "@/public/images/portrait.webp";

const About = () => {
  return (
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
                  I&apos;m Ilija Radivojević. I live in Belgrade, where I turn
                  ideas into reality.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    I&apos;ve loved making things for as long as I can remember,
                    and wrote my first program when I was 6 years old, just two
                    weeks after my mom brought home the brand new Pentium III
                    that I taught myself to type on.
                  </p>
                  <p>
                    The thing that got me into coding was my laziness. I hated
                    doing repetetive tasks on my pc so I figured, why not
                    automate it? That&apos;s what got me into Visual Basic and
                    later AutoIt. I could always automate the boring tasks on my
                    pc. I also enjoyed playing video games and sometimes when a
                    game would got too boring I used to make bots and cheats for
                    fun. I used to use AutoIt for making auto-clicker bots with
                    pixel detection, used Cheat Engine for games that stored
                    variables on the client and later found out about WPE Pro.
                  </p>
                  <p>
                    WPE Pro is a packet editor that was most widely used to hack
                    multiplayer games. Since it was so easy to hack client side
                    games, hacking client side games lost the appeal for me and
                    then I started getting more interested in the Web. Of course
                    I realized that this hacking is unethical and that I will do
                    something else for a living. By the time I was 14 I already
                    knew XHTML and CSS basic and in high school I learned some
                    Javascript, PHP and MySQL.
                  </p>
                  <p>
                    Today, I work in Quantox Technology, where we&apos;re
                    turning peoples ideas into businesses. And I&apos;m really
                    proud to be a part of the team.
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
  );
};

export default About;
