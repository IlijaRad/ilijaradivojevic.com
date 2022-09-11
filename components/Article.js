import Link from "next/link";
import ChevronRightIcon from "../public/icons/chevron-right.svg";

const Article = ({ title, date, description, slug }) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={`/articles/${slug}`}>
          <a>
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </a>
        </Link>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500"
        dateTime="2022-09-05"
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {date}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500"
      >
        Read article
        <ChevronRightIcon />
      </div>
    </article>
  );
};

export default Article;
