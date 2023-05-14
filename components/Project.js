import Image from "next/image";
import LinkIcon from "@/public/icons/link.svg";
import { Card } from "./Card";

const Project = ({ imgSrc, linkURL, projName, linkText, projDescription }) => {
  return (
    <Card as="li" key={projName}>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={imgSrc}
          alt=""
          className="h-8 w-8 select-none"
          unoptimized
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={linkURL}>{projName}</Card.Link>
      </h2>
      <Card.Description>{projDescription}</Card.Description>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200">
        <LinkIcon />
        <span className="ml-2">{linkText}</span>
      </p>
    </Card>
  );
};

export default Project;
