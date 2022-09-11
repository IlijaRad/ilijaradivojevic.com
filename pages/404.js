const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - var(--header-height) - 257px)",
      }}
    >
      <div>
        <h1 className="mr-5 inline-block border-r border-r-black/30 pr-6 text-[24px] font-medium leading-[48px] dark:border-r-white/30">
          404
        </h1>
        <div className="inline-block text-5xl">
          <h2 className="text-sm">This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
