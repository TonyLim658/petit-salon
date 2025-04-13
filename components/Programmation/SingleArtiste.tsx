import { Artiste } from "@/types/artiste";
import { Sign } from "crypto";
import Image from "next/image";
import Link from "next/link";

const SingleArtiste = ({ artiste }: { artiste: Artiste }) => {
  const { 
    groupe,
    nom,
    logo,
    description,
    style,
    image,
    production,
    productionType,
    passage,
    reseau,
    reseauType} = artiste;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two group relative overflow-hidden dark:hover:border-slate-100  rounded-m bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {groupe}
            </div>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {style}
          </p>
          <div className="relative overflow-hidden rounded-2xl mb-4">
            {productionType === "LocalFile" && (
            <audio id="youtube" controls loop src={production}></audio>)
            }
            {productionType === "Spotify" && (<iframe src={production} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)}
          </div>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {nom}
                </h4>
                <p className="text-xs text-body-color">{reseau}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Passage
              </h4>
              <p className="text-xs text-body-color">{passage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArtiste;
