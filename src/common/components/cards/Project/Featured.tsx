import Image from "next/legacy/image";
import Link from "next/link";
import React, { useRef } from "react";
//
import { RiExternalLinkLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
//
import { cx } from "@config/constants";
import { ProjectTypes } from "@config/types";

const Featured = ({
  secondary,
  live,
  thumbnail,
  github,
  youtube,
  title,
  description,
  tech,
}: ProjectTypes) => {
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  const __renderImage = () => {
    return (
      <div className="col-span-7 relative hidden sm:block">
        <Link href={`${live}`}>
          <div className="h-[350px] w-full relative rounded-xl overflow-hidden">
            <Image
              src={`https://github.com/devhasibulislam/developer-portfolio/blob/master/public/images/projects/${thumbnail}?raw=true`}
              blurDataURL={`https://github.com/devhasibulislam/developer-portfolio/blob/master/public/images/projects/${thumbnail}?raw=true`}
              className="transition-all duration-300 group-hover:scale-125"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="loading..."
            />

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-900/50 transition-all duration-300 cursor-pointer hover:opacity-0" />
          </div>
        </Link>
      </div>
    );
  };

  const __renderContent = () => {
    return (
      <div
        className={cx(
          "col-span-12 sm:col-span-5 text-right sm:absolute sm:left-[50%]",
          secondary && "!relative z-[100] !left-0 !text-start sm:w-[120%]"
        )}
      >
        <div>
          <p className="text-sky-400"> Featured </p>
          <h1 className="text-3xl font-medium text-slate-300"> {title} </h1>

          <div className="my-6 p-6 bg-slate-800 text-slate-300 shadow-xl rounded-xl">
            <p> {description && description} </p>
          </div>

          <div
            className={cx(
              "flex text-slate-400 ml-[8rem] gap-2 justify-end flex-wrap",
              secondary && "!justify-start ml-0 mr-[8rem]"
            )}
          >
            {tech.map((e: string, i: number) => (
              <span
                key={i}
                className="bg-slate-800 text-gray-400 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-500 shadow"
              >
                {e}
              </span>
            ))}
          </div>

          <div
            className={cx(
              "flex justify-end mt-5 gap-3 text-slate-300",
              secondary && "!justify-start"
            )}
          >
            {live && (
              <Link
                href={`${live}`}
                target="_blank"
                className="hover:text-sky-400 transition-all duration-300 hover:scale-110"
              >
                <RiExternalLinkLine className="h-6 w-6" />
              </Link>
            )}

            {github && (
              <Link
                href={`${github}`}
                target="_blank"
                className="hover:text-sky-400 transition-all duration-300 hover:scale-110"
              >
                <BsGithub className="w-5 h-5" />
              </Link>
            )}

            {youtube && (
              <Link
                href={`${youtube}`}
                target="_blank"
                className="hover:text-sky-400 transition-all duration-300 hover:scale-110"
              >
                <IoLogoYoutube className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative grid grid-cols-12 items-center gap-3 group">
      {secondary ? (
        <>
          {__renderContent()}
          {__renderImage()}
        </>
      ) : (
        <>
          {__renderImage()}
          {__renderContent()}
        </>
      )}
    </div>
  );
};

export default Featured;
