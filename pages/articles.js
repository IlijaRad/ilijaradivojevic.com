import { formatDate } from "../lib/formatDate";
import { articles } from "../static/articles";
import { Card } from "../components/Card";

const Article = ({ date, title, description, slug }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${slug}`}>{title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={date} className="md:hidden" decorate>
          {formatDate(date)}
        </Card.Eyebrow>
        <Card.Description>{description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={date} className="mt-1 hidden md:block">
        {formatDate(date)}
      </Card.Eyebrow>
    </article>
  );
};

const Articles = () => {
  return (
    <div className="mt-16 sm:mt-32 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="h1">
                Writing on software design, company building, and the aerospace
                industry.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                All of my long-form thoughts on programming, leadership, product
                design, and more, collected in chronological order.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
