const Uses = () => {
  return (
    <div className="mt-16 sm:mt-32 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Software I use, gadgets I love, and other things I recommend.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I get asked a lot about the things I use to build software, stay
                productive, or buy to fool myself into thinking I&apos;m being
                productive when I&apos;m really just procrastinating.
                Here&apos;s a big list of all of my favorite stuff.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <div className="space-y-20">
                {[1, 2, 3, 4].map((i) => (
                  <section
                    key={i}
                    aria-labelledby=":r0:"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2
                        id=":r0:"
                        className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                      >
                        Workstation
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              16” MacBook Pro, M1 Max, 64GB RAM (2021)
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              I was using an Intel-based 16” MacBook Pro prior
                              to this and the difference is night and day.
                              I&apos;ve never heard the fans turn on a single
                              time, even under the incredibly heavy loads I put
                              it through with our various launch simulations.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Apple Pro Display XDR (Standard Glass)
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              The only display on the market if you want
                              something HiDPI and bigger than 27”. When
                              you&apos;re working at planetary scale, every
                              pixel you can get counts.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              IBM Model M SSK Industrial Keyboard
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              They don&apos;t make keyboards the way they used
                              to. I buy these any time I see them go up for sale
                              and keep them in storage in case I need parts or
                              need to retire my main.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Apple Magic Trackpad
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Something about all the gestures makes me feel
                              like a wizard with special powers. I really like
                              feeling like a wizard with special powers.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Herman Miller Aeron Chair
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              If I&apos;m going to slouch in the worst ergonomic
                              position imaginable all day, I might as well do it
                              in an expensive chair.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;
