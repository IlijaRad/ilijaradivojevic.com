import { socialLinks } from "../static/socialLinks";
import { homePageImages } from "../static/homePageImages";
import { articles } from "../static/articles";

import SocialLink from "../components/SocialLink";
import HomePageImage from "../components/HomePageImage";
import Article from "../components/Article";
import NewsLetterForm from "../components/NewsLetterForm";
import Work from "../components/Work/Work";

export default function Home() {
  return (
    <>
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
                {articles.map(({ id, date, title, description, slug }) => (
                  <Article
                    key={id}
                    date={date}
                    title={title}
                    description={description}
                    slug={slug}
                  />
                ))}
              </div>
              <div className="space-y-10 lg:pl-16 xl:pl-24">
                <NewsLetterForm />
                <Work />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
