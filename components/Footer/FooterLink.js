import Link from "next/link";

const FooterLink = ({ url, text }) => {
  return (
    <Link
      href={url}
      className="transition hover:text-primary-500 dark:hover:text-primary-400"
    >
      {text}
    </Link>
  );
};

export default FooterLink;
