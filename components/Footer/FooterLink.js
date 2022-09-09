import Link from "next/link";

const FooterLink = ({ url, text }) => {
  return (
    <Link
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
      href={url}
    >
      <a>{text}</a>
    </Link>
  );
};

export default FooterLink;
