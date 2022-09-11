import Link from "next/link";

const FooterLink = ({ url, text }) => {
  return (
    <Link href={url}>
      <a className="hover:text-primary-500 dark:hover:text-primary-400 transition">
        {text}
      </a>
    </Link>
  );
};

export default FooterLink;
