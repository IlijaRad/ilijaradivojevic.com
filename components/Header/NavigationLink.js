import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const NavigationLink = ({ url, text }) => {
  const { asPath } = useRouter();
  const isActiveLink = asPath === url;
  return (
    <li>
      <Link href={url}>
        <a
          className={clsx(
            "relative block px-3 py-2 transition",
            isActiveLink
              ? "text-primary-500 dark:text-primary-400"
              : "hover:text-primary-500 dark:hover:text-primary-400"
          )}
        >
          {text}
          {isActiveLink ? (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
          ) : null}
        </a>
      </Link>
    </li>
  );
};

export default NavigationLink;
