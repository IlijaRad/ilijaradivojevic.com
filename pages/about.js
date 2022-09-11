import EmailIcon from "../components/Icons/EmailIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import LinkedInIcon from "../components/Icons/LinkedInIcon";

const About = () => {
  return (
    <div className="mt-16 sm:mt-32 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <img
                    alt=""
                    src="/images/portrait.webp"
                    decoding="async"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover text-transparent dark:bg-zinc-800"
                    loading="lazy"
                    width="800"
                    height="800"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="h1">
                  I&apos;m Ilija Radivojević. I live in New Belgrade, where I
                  code the future.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    I&apos;ve loved making things for as long as I can remember,
                    and wrote my first program when I was 6 years old, just two
                    weeks after my mom brought home the brand new Macintosh LC
                    550 that I taught myself to type on.
                  </p>
                  <p>
                    The only thing I loved more than computers as a kid was
                    space. When I was 8, I climbed the 40-foot oak tree at the
                    back of our yard while wearing my older sister&apos;s
                    motorcycle helmet, counted down from three, and jumped —
                    hoping the tree was tall enough that with just a bit of
                    momentum I&apos;d be able to get to orbit.
                  </p>
                  <p>
                    I spent the next few summers indoors working on a rocket
                    coding, while I recovered from the multiple surgeries it
                    took to fix my badly broken legs. It took nine iterations,
                    but when I was 15 I sent my dad&apos;s Blackberry into orbit
                    and was able to transmit a photo back down to our family
                    computer from space.
                  </p>
                  <p>
                    Today, I&apos;m the founder of Planetaria, where we&apos;re
                    working on civilian space suits and manned shuttle kits you
                    can assemble at home so that the next generation of kids
                    really <em>can</em> make it to orbit — from the comfort of
                    their own backyards.
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
