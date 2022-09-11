import LinkIcon from "../public/icons/link.svg";

const Project = ({ imgSrc, linkURL, projName, linkText, projDescription }) => {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          src={imgSrc}
          alt="Logo"
          loading="lazy"
          className="h-8 w-8 text-transparent"
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a href={linkURL} target="_blank" rel="noreferrer">
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{projName}</span>
        </a>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {projDescription}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200">
        <LinkIcon />
        <span className="ml-2">{linkText}</span>
      </p>
    </li>
  );
};

export default Project;
