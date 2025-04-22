import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Join = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28" id="join">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-3/5">
              <SectionTitle
                title="Le Format"
                mb="10px"
                width="auto"
              />
              <div
                className="wow fadeInUp mb-12 lg:mb-4"
                data-wow-delay=".15s"
              >
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  {"12 Minutes de Présentations et 8 Minutes de Questions / Réponses"}
                </div>
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  {"Un écran, un ordinateur et le sourires des présentateur·ice·s!"}
                </div>
                {deroule.map((slot, idx) => {
                  return (
                    <div className="mb-4 text-m text-black dark:text-white sm:text-l lg:text-m xl:text-l" key={idx}>
                      {slot}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full px-4 lg:w-2/5">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <img
                  src="/images/hero/join.webp"
                  alt="join-image"
                  className="drop-shadow-three rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const deroule = [
  "14h - Buvette",
  "14h50 - Speech d'ouverture",
  "15h - Présentation 1",
  "15h30 - Présentation 2",
  "16h - Présentation 3",
  "16h20 - ENTRACTE",
  "17h30 - Présentation 4",
  "18h - Présentation 5",
  "18h30 - Présentation 6",
];

export default Join;
