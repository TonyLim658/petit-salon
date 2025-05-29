import { Session } from "@/types/Session";

const SingleSession = ({ session }: { session: Session }) => {
  const {
    nom,
    description,
    video,
    presentations
  } = session;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two group relative overflow-hidden dark:hover:border-slate-100  rounded-m bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div
          className="relative block aspect-[37/22] w-full"
        >
          { video && (
            <iframe width="100%" height="100%" src={video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
          )
          }
          { !video && (
            <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-500 dark:text-white">
              Session à venir
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div
              className="mb-4 block text-xl font-bold text-black dark:text-white"
            >
              {nom}
            </div>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {description}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                {presentations.map((presentation, idx) => {
                  return (
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white" key={idx}>
                      {presentation}
                    </h4>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSession;
