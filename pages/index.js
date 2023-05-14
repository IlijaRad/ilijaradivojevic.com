import { socialLinks } from "@/static/socialLinks";
import { homePageImages } from "@/static/homePageImages";

import SocialLink from "@/components/SocialLink";
import HomePageImage from "@/components/HomePageImage";
import Work from "@/components/Work/Work";
import { Card } from "@/components/Card";

import { formatDate } from "../lib/formatDate";
import { getAllArticles } from "../lib/getAllArticles";

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}

const Article = ({ article }) => {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

export default function Home({ articles }) {
  return (
    <>
      <div className="mt-9 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="h1">Software engineer</h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I&apos;m Ilija, a software engineer based in Subotica. I build
                  front-ends with simple modern UIs using latest web
                  technologies.
                </p>
                <div className="mt-6 flex gap-6">
                  {socialLinks.map(({ id, ariaLabel, url, Icon }) => (
                    <SocialLink key={id} ariaLabel={ariaLabel} url={url}>
                      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
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
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
              <div className="space-y-10 lg:pl-16 xl:pl-24">
                <Work />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
