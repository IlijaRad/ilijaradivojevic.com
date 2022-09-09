const HomePageImage = ({ src, alt = "", rotateNegative = false }) => {
  return (
    <div
      className={
        "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl " +
        (rotateNegative ? "-rotate-2" : "rotate-2")
      }
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};

export default HomePageImage;
