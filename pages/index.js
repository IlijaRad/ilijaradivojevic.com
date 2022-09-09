import { socialLinks } from "../static/socialLinks";
import { homePageImages } from "../static/homePageImages";
import { articles } from "../static/articles";

import SocialLink from "../components/SocialLink";
import HomePageImage from "../components/HomePageImage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Article from "../components/Article";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative">
        <Header />
        <div
          style={{
            height: "var(--content-offset)",
          }}
        ></div>
        <main>
          <div className="mt-9 sm:px-8">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      Software developer
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      I&apos;m Ilija, a front-end developer based in Belgrade. I
                      build front-ends with simple modern UIs using latest web
                      technologies.
                    </p>
                    <div className="mt-6 flex gap-6">
                      {socialLinks.map(({ id, ariaLabel, url, Svg }) => (
                        <SocialLink key={id} ariaLabel={ariaLabel} url={url}>
                          <Svg />
                        </SocialLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
              {homePageImages.map(({ id, src, alt, rotateNegative }) => (
                <HomePageImage
                  key={id}
                  src={src}
                  alt={alt}
                  rotateNegative={rotateNegative}
                />
              ))}
            </div>
          </div>
          <div className="mt-24 sm:px-8 md:mt-28">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-16">
                    {articles.map(({ id, date, title, description }) => (
                      <Article
                        key={id}
                        date={date}
                        title={title}
                        description={description}
                      />
                    ))}
                  </div>
                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <form action="#">
                      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none"
                        >
                          <path
                            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          ></path>
                          <path
                            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                          ></path>
                        </svg>
                        <span className="ml-3">Stay up to date</span>
                      </h2>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Get notified when I publish something new, and
                        unsubscribe at any time.
                      </p>
                      <div className="mt-6 flex">
                        <input
                          type="email"
                          placeholder="Email address"
                          aria-label="Email address"
                          required=""
                          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                        />
                        <button
                          className="ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                          type="submit"
                        >
                          Join
                        </button>
                      </div>
                    </form>
                    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none"
                        >
                          <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                          ></path>
                          <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            className="stroke-zinc-400 dark:stroke-zinc-500"
                          ></path>
                        </svg>
                        <span className="ml-3">Work</span>
                      </h2>
                      <ol className="mt-6 space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                          <li key={i} className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <img
                                alt=""
                                src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg"
                                width="32"
                                height="32"
                                decoding="async"
                                data-nimg="future"
                                className="h-7 w-7 text-transparent"
                                loading="lazy"
                              />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Planetaria
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                CEO
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label="2019 until Present"
                              >
                                <time dateTime="2019">2019</time>{" "}
                                <span aria-hidden="true">—</span>{" "}
                                <time dateTime="2022">Present</time>
                              </dd>
                            </dl>
                          </li>
                        ))}
                      </ol>
                      <a
                        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                        href="!#"
                      >
                        Download CV
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                        >
                          <path
                            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
