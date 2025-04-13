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
                title="Nous Rejoindre"
                mb="10px"
                width="auto"
              />
              <div
                className="wow fadeInUp mb-12 lg:mb-4"
                data-wow-delay=".15s"
              >
                <div className="mb-4 text-base text-black dark:text-white">
                  {"Tu souhaites prendre part à La Poule Party et rejoindre d'autres poussins ? Super ! Voici les étapes à suivre :"}
                </div>
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  {"1 - Tu remplis le formulaire d'inscription, cela prend seulement 5 minutes, c'est pour apprendre à te connaître et te laisser choisir les pôles de bénévole !🐤"}
                </div>
                <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                  {"📝 Liste des Formulaires:"}
                </div>
                <div className="flex justify-evenly sm:space-x-4 space-y-0">
                    <Link
                      href="https://framaforms.org/formulaire-benevole-1708169729"
                      className="text-sm md:text-base inline-block px-4 md:px-6 py-1.5 rounded-sm bg-sky-400 font-semibold text-black duration-300 ease-in-out hover:bg-sky-400/90"
                      target="_blank"
                    >
                      Bénévole
                    </Link>
                    <Link
                      href="https://framaforms.org/formulaire-artistes-1708905014"
                      className="text-sm sm:text-base inline-block px-4 md:px-6 py-1.5 rounded-sm bg-violet-400 font-semibold text-black duration-300 ease-in-out hover:bg-violet-400/90"
                      target="_blank"
                    >
                      Musicien·ne
                    </Link>
                    <Link
                      href="https://framaforms.org/formulaire-exposantes-1708533780"
                      className="text-sm sm:text-base inline-block px-4 md:px-6 py-1.5 rounded-sm bg-fuchsia-400 font-semibold text-black duration-300 ease-in-out hover:bg-fuchsia-400/90"
                      target="_blank"
                    >
                      Exposant·e
                    </Link>
                </div>
              </div>
              <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                {"2 - Tu rejoins le discord pour avoir toutes les infos à venir, poser tes questions et proposer des idées ! 🤓"}
              </div>
              <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                {/* {"3 - Tu paies ta place via la cagnotte, pense à mettre le même nom que sur le formulaire 😉"} */}
                {"3 - La cagnotte revient bientôt 😉"}
              </div>
              <div className="mb-4 text-l text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
                {"L’ordre de participation à la cagnotte sera le dernier critère pour départager la sélection des pôles 🚀"}
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 mb-4">
                <Link
                  href="https://discord.gg/w265nhhzBX"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  target="_blank"
                >
                  <div className="flex gap-x-2">
                    🔥 Lien vers le Discord
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                      <radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8c9eff"></stop><stop offset=".368" stop-color="#889af8"></stop><stop offset=".889" stop-color="#7e8fe6"></stop><stop offset="1" stop-color="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
                    </svg>
                  </div>
                </Link>
                {/* <Link
                  href="https://www.papayoux.com/fr/billet/poule-party"
                  className="inline-block rounded-sm bg-amber-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/90"
                  target="_blank"
                >
                  <div className="flex gap-x-2">
                  🙏 Lien vers la cagnotte
                    <svg fill="none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" viewBox="0 0 928 928">
                      <path fill="#FF66CC" stroke-opacity="1" stroke="black" stroke-width="5" d="M801.163,279.3c-35.2-32.4-76-57.7-119.8-76.1c-5.7,8.6-12.2,16.7-19.6,24.1c-9.801,9.8-20.801,18.2-32.801,24.9 c12.7,4.2,24.9,9,36.601,14.5c11.899,5.6,16.5,20.2,9.899,31.6l0,0c-5.8,10.1-18.5,14.1-29,9.1c-79.8-37.7-168.899-30.6-208-24.7 c-11.5,1.7-22.5-5.6-25.199-16.9v-0.1c-3.101-12.8,5.5-25.5,18.5-27.5c7.1-1.1,15.699-2.2,25.3-3.1c-2.9-2.5-5.7-5.1-8.4-7.8 c-13.8-13.8-24.7-29.9-32.3-47.9c-0.8-1.9-1.6-3.9-2.3-5.8c-11.9,2-23.7,4.5-35.2,7.4c-67-39-147.4-39.1-195.2-34.4 c-20.8,2-33.1,24.2-24,43l40.5,83c-45,39.2-79,87.2-98.1,140.7l-49.4-0.2c-16.6-0.1-30.1,13.4-30.1,30V553.9 c0,11.199,6.2,21.399,16.1,26.6l64.1,33.4c26.8,73.899,82.3,137.3,155.5,181V893c0,19.3,15.7,35,35,35h89.8 c13.899,0,26.5-8.3,32.1-21l22.5-51.7c19.4,2.4,39.101,3.601,59.3,3.601c31.801,0,62.7-3,92.4-8.7V893c0,19.3,15.7,35,35,35h89.4 c12.899,0,24.8-7.1,30.899-18.5c47.601-89.4,99.3-179.1,137.5-272.7c19.3-47.399,26.3-97.7,22.101-146.8 C897.462,410.8,861.462,334.7,801.163,279.3z M263.963,465.4c-24.9,0-45-20.101-45-45c0-24.9,20.1-45,45-45s45,20.1,45,45 C308.962,445.3,288.863,465.4,263.963,465.4z"/> 
                      <path fill="#FFD500" stroke-opacity="1" stroke="black" stroke-width="5" d="M510.863,233c13.7,5.4,28.7,8.4,44.4,8.4c7.699,0,15.199-0.7,22.399-2.1c30.601-5.7,57.101-23,74.8-47.1 c14.7-20,23.4-44.7,23.4-71.5c0.1-66.7-54-120.7-120.6-120.7c-66.7,0-120.7,54-120.7,120.7c0,17.3,3.6,33.7,10.2,48.6 C457.462,198.3,481.363,221.3,510.863,233z"/>
                    </svg>
                  </div>
                </Link> */}
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

export default Join;
