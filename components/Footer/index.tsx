"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent via-[#959CB183]"></div>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/typo-light.webp"
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-full dark:hidden"
                  />
                  <Image
                    src="/images/logo/typo.webp"
                    alt="logo"
                    width={140}
                    height={30}
                    className="hidden w-full dark:block"
                  />
                </Link>
                <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                  La Poule Party est un évènement communautaire où tout le monde est bénévole, les festivaliers, les musiciens et les exposants.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://discord.gg/w265nhhzBX"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_58_1626)">
                      <path d="M15.2605 3.15841C15.2555 3.14872 15.2472 3.14112 15.2371 3.13698C14.0706 2.60162 12.8395 2.21975 11.5747 2.00094C11.5632 1.9988 11.5513 2.00034 11.5408 2.00534C11.5302 2.01034 11.5215 2.01855 11.5159 2.02879C11.3481 2.33318 11.1959 2.64583 11.0597 2.96555C9.69606 2.75857 8.30898 2.75857 6.94533 2.96555C6.80819 2.64501 6.65346 2.33228 6.48185 2.02879C6.47597 2.01877 6.4672 2.01076 6.4567 2.00579C6.44619 2.00082 6.43443 1.99913 6.42295 2.00094C5.15726 2.21908 3.92533 2.60097 2.75818 3.13698C2.74819 3.14122 2.73976 3.14845 2.73406 3.15768C0.400061 6.64401 -0.239138 10.042 0.0743392 13.4003C0.0752214 13.4085 0.0777492 13.4165 0.0817724 13.4237C0.0857956 13.431 0.0912319 13.4373 0.0977581 13.4424C1.45655 14.4477 2.9762 15.215 4.5919 15.7116C4.60328 15.715 4.61543 15.7148 4.62672 15.7111C4.63801 15.7074 4.6479 15.7004 4.65505 15.6909C5.00212 15.2188 5.30967 14.7189 5.57457 14.1962C5.57821 14.1891 5.58029 14.1812 5.58067 14.1732C5.58105 14.1651 5.57972 14.1571 5.57678 14.1496C5.57383 14.1421 5.56933 14.1353 5.56357 14.1297C5.55782 14.1241 5.55093 14.1198 5.54338 14.117C5.05838 13.9315 4.58884 13.7078 4.13916 13.4481C4.13099 13.4433 4.12413 13.4366 4.11919 13.4285C4.11424 13.4204 4.11136 13.4112 4.1108 13.4018C4.11024 13.3923 4.11202 13.3829 4.11598 13.3743C4.11994 13.3656 4.12595 13.3581 4.1335 13.3524C4.22785 13.2817 4.32226 13.2082 4.41235 13.1339C4.42036 13.1273 4.43004 13.1231 4.44032 13.1217C4.45059 13.1203 4.46105 13.1219 4.47052 13.1261C7.4164 14.4706 10.6054 14.4706 13.5167 13.1261C13.5261 13.1216 13.5367 13.1199 13.5471 13.1211C13.5576 13.1224 13.5674 13.1266 13.5756 13.1332C13.6657 13.2075 13.7601 13.2817 13.8551 13.3524C13.8627 13.3581 13.8688 13.3655 13.8728 13.3741C13.8768 13.3827 13.8787 13.3921 13.8782 13.4016C13.8777 13.411 13.8749 13.4202 13.87 13.4284C13.8651 13.4365 13.8583 13.4433 13.8502 13.4481C13.4015 13.71 12.9316 13.9336 12.4453 14.1164C12.4378 14.1193 12.4309 14.1237 12.4252 14.1294C12.4195 14.1351 12.415 14.142 12.4121 14.1495C12.4092 14.1571 12.408 14.1651 12.4084 14.1732C12.4089 14.1813 12.411 14.1891 12.4147 14.1963C12.684 14.7162 12.9911 15.2156 13.3334 15.6905C13.3404 15.7003 13.3502 15.7076 13.3615 15.7114C13.3729 15.7153 13.3851 15.7155 13.3966 15.712C15.0158 15.2165 16.5387 14.4481 17.8994 13.4401C17.906 13.4353 17.9115 13.4291 17.9155 13.4219C17.9196 13.4148 17.922 13.4069 17.9228 13.3987C18.2973 9.51857 17.2932 6.14808 15.2605 3.15841ZM6.0154 11.3553C5.12854 11.3553 4.39781 10.5413 4.39781 9.54183C4.39781 8.54232 5.11538 7.72771 6.0154 7.72771C6.92369 7.72771 7.64738 8.54875 7.63299 9.54122C7.63177 10.5135 6.91542 11.3553 6.0154 11.3553ZM11.9972 11.3553C11.1103 11.3553 10.3796 10.5413 10.3796 9.54183C10.3796 8.54232 11.0941 7.72771 11.9972 7.72771C12.9055 7.72771 13.6292 8.54875 13.6148 9.54122C13.6135 10.5135 12.9033 11.3553 11.9972 11.3553Z" fill="currentColor">
                      </path></g><defs><clipPath id="clip0_58_1626"><rect width="18" height="18" fill="white"></rect></clipPath></defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/poulepartycollectif/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#959CB1"/>
                      <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#959CB1"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#959CB1"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:PoulePartyCrew@gmail.com"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="4 4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 24.225V7.776h22v16.447H5v.002zm3.011-1.815h15.978l-5.111-5.115L16 20.179l-2.877-2.883-5.112 5.114zm-1.216-1.275l5.077-5.09-5.077-5.065v10.155zm13.332-5.09l5.079 5.09V10.979l-5.079 5.066zm-4.126 1.588l8.022-8.027-16.045-.001 8.023 8.028z" fill="#959CB1"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Liens utiles
                </h2>
                <ul>
                  {/* <li> TODO add page
                    <a
                      href="/programmation"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Programmation
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/access"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Accès au lieu
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://www.papayoux.com/fr/billet/poule-party"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cagnotte
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Formulaires
                </h2>
                <ul>
                  <li>
                    <a
                      href="https://framaforms.org/formulaire-benevole-1708169729"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bénévole
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://framaforms.org/formulaire-artistes-1708905014"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Artistes Scéniques
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://framaforms.org/formulaire-exposantes-1708533780"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Exposant·e·s
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Aide
                </h2>
                <ul>
                  <li>
                    <a
                      href="/#join"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Nous Rejoindre
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/about"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      À propos
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="mailto:PoulePartyCrew@gmail.com"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      PoulePartyCrew@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Codé par une poule pour des poules 🐔
            </p>
            <p className="text-center text-sm text-body-color dark:text-white">
              Template by UIdeck and{" "}
              <a href="https://nextjstemplates.com" rel="nofollow noopener">
                Next.js Templates
              </a>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
