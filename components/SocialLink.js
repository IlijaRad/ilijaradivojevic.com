const SocialLink = ({ ariaLabel, url, children }) => {
  return (
    <a
      className="group -m-1 p-1"
      aria-label={ariaLabel}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialLink;
