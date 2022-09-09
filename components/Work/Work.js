import { jobs } from "../../static/jobs";
import JobListing from "./JobListing";

import ArrowDownIcon from "../../public/icons/arrow-down.svg";
import BriefcaseIcon from "../../public/icons/briefcase.svg";

const Work = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {jobs.map(
          ({ id, imgSrc, imgAlt, company, role, startDate, endDate }) => (
            <JobListing
              key={id}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              company={company}
              role={role}
              startDate={startDate}
              endDate={endDate}
            />
          )
        )}
      </ol>
      <a
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
        href="!#"
      >
        Download CV
        <ArrowDownIcon />
      </a>
    </div>
  );
};

export default Work;
