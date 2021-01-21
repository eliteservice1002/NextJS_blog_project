import React, { ReactNode } from "react";
import Link from "next/link";
import IconCheck from "./IconCheck";

interface Props {
  url?: string;
  reverse?: boolean;
  title: string;
  to?: string;
  externaleva?: boolean;
  children: ReactNode;
  large?: boolean;
}

const index = ({
  url,
  reverse = false,
  title,
  to,
  externaleva,
  children,
  large = false,
}: Props) => {
  return (
    <div>
      <div
        className={`lg:flex justify-center py-4 lg:px-10 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className=" w-full flex justify-center lg:block lg:w-auto lg:py-6 px-10 lg:px-0">
          <img
            className="h-180 object-contain lg:w-auto lg:h-auto"
            src={url}
            alt=""
          />
        </div>
        <div className="w-full lg:w-auto bg-white flex items-center">
          <div className="w-full px-10 mx-auto">
            {!large ? (
              <div className="justify-center lg:justify-start text-28px font-semibold lg:text-44px max-w-2xl text-center text-dark font-hthaptik flex">
                <IconCheck /> {title}
              </div>
            ) : (
              <div className=" justify-center lg:justify-start text-24px text-center lg:text-left font-semibold lg:text-44px  text-dark lg:pl-10 font-hthaptik flex">
                <IconCheck />{" "}
                <p>
                  Seguro contra cáncer de <br /> mama, ovario y cervicouterino*
                </p>
              </div>
            )}

            <div className="text-center lg:text-left font-hthaptik pl-2 font-thin text-dark text-18px lg:max-w-xl lg:mx-auto">
              {children}
            </div>

            <div className="mt-12 w-full flex justify-center lg:justify-start">
              {to && externaleva && (
                <a
                  href={to}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center border border-peach  py-2 px-5 ${
                    large && "lg:ml-10"
                  }`}
                  style={{ borderRadius: "4px" }}
                >
                  <span className="font-spectral font-bold text-14px text-peach mr-3">
                    Conoce mas ↗
                  </span>
                </a>
              )}
              {to && !externaleva && (
                <Link href={to}>
                  <button
                    className="flex items-center border border-peach  py-2 px-5"
                    style={{ borderRadius: "4px" }}
                  >
                    <span className="font-spectral font-bold text-14px text-peach mr-3">
                      Conoce mas ↗
                    </span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
