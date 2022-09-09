import Link from "next/link";

const FooterLink = ({ url, text }) => {
  return (
    <Link href={url}>
      <a className="transition hover:text-teal-500 dark:hover:text-teal-400">
        {text}
      </a>
    </Link>
  );
};

export default FooterLink;
