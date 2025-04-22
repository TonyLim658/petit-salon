const Project = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="project">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-2/5">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[700px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/hero/project1.webp"
                alt="festival-stage"
                className="drop-shadow-three rounded-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/5">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Culture, Plaisir & Respect✨
                </h3>
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  Le but est de laisser un espace d&apos;expression sur un sujet qui nous passionne.
                </div>
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  Prendre le plaisir de partager ce qui nous anime tout en pouvant prendre le temps d&apos;avoir un support de présentation.
                </div>
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  Nous mettons un·e musicien·ne à l&apos;honneur à chaque session!🎷
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
