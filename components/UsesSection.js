const UsesSection = ({ heading, items }) => {
  return (
    <section
      aria-labelledby=":r0:"
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id=":r0:"
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {heading}
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {items.map(({ id, heading, body }) => (
              <li key={id} className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {heading}
                </h3>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
