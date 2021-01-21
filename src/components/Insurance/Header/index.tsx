import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [bodyOffset, setBodyOffset] = useState(
    typeof window !== "undefined" && document.body.getBoundingClientRect(),
  );

  const listener = () => {
    setBodyOffset(
      typeof window !== "undefined" && document.body.getBoundingClientRect(),
    );
    return bodyOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const changeHeader = typeof window !== "undefined" && window.scrollY > 0;
  return (
    <nav
      className={`${
        open ? "bg-white" : "bg-transparent"
      } shadow-sm w-full fixed z-30 transition delay-150 duration-300 ease-in-out ${
        changeHeader ? "bg-white" : "bg-transparent"
      }`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}
    >
      <div
        className="bg-grass text-white flex items-center justify-center cursor-pointer py-2 font-oswald hover:underline tracking-widest"
        onClick={() => router.push("/seguro/register")}
      >
        ADQUIERE TU SEGURO POR $499 MXN AL AÑO
      </div>
      <div className="mx-auto sm:px-6 desktop:px-100px px-10px">
        <div className="flex justify-between h-12 lg:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <picture
                className={`${
                  open || changeHeader ? "text-peach" : "text-white"
                } block w-24 sm:w-32 delay-150 duration-300 ease-in-out`}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 103 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m28.369 16.512c-1.6935 5.036-6.1223 8.3957-11.078 8.9827-3.4763 0.413-7.2144-0.5395-10.445-3.2345-4.0978-3.8762-5.3885-9.3151-3.7309-14.243h-0.00144c0.0518-0.16116 0.07194-0.33526 0.0518-0.51367-0.0777-0.66044-0.6777-1.1324-1.3381-1.0547-0.47338 0.05611-0.84748 0.37986-0.99424 0.8l-0.002877-0.00144c-1.3396 3.9827-1.0489 8.2503 0.82014 12.014 1.8691 3.7641 5.0921 6.5756 9.0763 7.9152 2.2762 0.7654 4.6057 0.9798 6.846 0.7136 5.8518-0.6949 11.084-4.6633 13.084-10.61l-2.2878-0.7684z" />
                  <path d="m9.167 22.788c2.0964 1.3064 4.4763 1.9496 6.8907 1.8892 0.846-0.0216 1.6964-0.1281 2.5381-0.3252l-0.5453-2.3497c-2.6216 0.6087-5.3237 0.1598-7.6072-1.2633-2.2849-1.423-3.8777-3.6503-4.4863-6.2719-1.259-5.4115 2.1223-10.836 7.5338-12.094v-0.00288c0.5324-0.13525 0.9208-0.62446 0.9065-1.1971-0.0173-0.66475-0.5698-1.1899-1.2346-1.1741-0.0748 0.0014388-0.1467 0.011511-0.2172 0.025899v-0.0014388c-0.0072 0.0014388-0.013 0.0028777-0.0187 0.0043165-0.0087 0.0014389-0.0159 0.0043166-0.0245 0.0057554-6.682 1.577-10.849 8.2849-9.295 14.978 0.75396 3.2504 2.7281 6.0115 5.5597 7.7756z" />
                  <path d="m8.5704 17.997 1.9036-1.4821c-2.8202-3.6244-1.3669-9.2402 3.5971-10.732 2.7957-0.6518 5.4662 0.32806 7.0906 2.4158l0.0015-0.00144c0.2273 0.28345 0.5784 0.46187 0.9698 0.4518 0.6647-0.01727 1.1913-0.56979 1.1741-1.2345-0.0072-0.26188-0.0979-0.50072-0.2447-0.69497l0.0015-0.00144c-1.5065-1.9352-3.6763-3.1698-6.1108-3.4734s-4.8403 0.35827-6.777 1.8648c-3.9957 3.1108-4.7165 8.8921-1.6057 12.888z" />
                  <path d="m19.913 15.624c0.4446-0.0115 0.8244-0.2619 1.0244-0.6259l0.0015 0.0014c0.0043-0.0086 0.0086-0.0187 0.0129-0.0273 0.0043-0.0072 0.0072-0.0158 0.0115-0.023 1.0489-2.0547 0.8504-4.5281-0.682-6.5123-3.0101-3.4302-8.0388-2.5424-9.9108 1.0417l2.1381 1.1165c1.1152-2.1338 4.1094-2.6633 5.9008-0.62013 0.9194 1.1913 1.0331 2.6791 0.3913 3.9079l0.0015 0.0014c-0.0849 0.1698-0.131 0.3626-0.1252 0.5669 0.0173 0.6633 0.5698 1.1885 1.236 1.1727z" />
                  <path d="m14.382 14.823c0.0331 0.0158 0.0662 0.0316 0.0993 0.0446 0.823 0.3784 1.7439 0.3352 2.5022-0.0561 0.5036-0.2605 0.9367-0.672 1.2187-1.213 0.7295-1.3957 0.1885-3.1252-1.2086-3.8546l-1.118 2.1382c0.2172 0.1137 0.3021 0.3827 0.1885 0.6-0.1137 0.2172-0.3828 0.3021-0.6 0.1885l-0.0015 0.0029c-0.3324-0.167-0.7381-0.1799-1.0935 0.0043-0.5914 0.305-0.823 1.0316-0.518 1.623 0.1151 0.223 0.2907 0.3957 0.4964 0.5065v0.0014c0.0115 0.0043 0.023 0.0086 0.0345 0.0144z" />
                  <path d="m63.698 23.796c10.735 0 18.259-8.7367 18.259-19.59h-3.918c0 7.2878-4.036 13.4-10.422 15.163v-15.164h-3.9194v19.591z" />
                  <path d="m98.905 4.2044v1.9597c-1.6461-1.2144-3.6432-1.9597-5.8777-1.9597-5.4072 0-9.7554 4.3885-9.7554 9.7956 0 5.4072 4.3496 9.7957 9.7554 9.7957 2.2331 0 4.2316-0.7439 5.8777-1.9985v1.9985h3.9184v-19.591h-3.9184zm-5.8777 15.673c-3.213 0-5.8374-2.6244-5.8374-5.8777 0-3.2532 2.6244-5.8777 5.8374-5.8777 3.2518 0 5.9165 2.6245 5.9165 5.8777 0 3.2533-2.6244 5.8777-5.9165 5.8777z" />
                  <path d="m44.908 12.08c0.823-2.272 2.9784-3.9568 5.5252-3.9568 2.5856 0 4.741 1.6849 5.564 3.9568h-11.089zm-4.2316 1.9194c0 5.4072 4.3496 9.7957 9.7554 9.7957 3.7223 0 6.9352-2.0374 8.5813-5.0158l-3.7612-1.4101c-1.0575 1.5281-2.8216 2.5079-4.8187 2.5079-2.7813 0-5.1712-1.9986-5.7209-4.6619h15.476c0.0388-0.3913 0.0777-0.823 0.0777-1.2143 0-5.4072-4.4662-9.7957-9.8345-9.7957-5.4058-0.00144-9.7554 4.387-9.7554 9.7942z" />
                </svg>
              </picture>
            </Link>

            <div className="flex ml-5 items-center">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  style={{ fill: `${changeHeader ? "#EE8D8B" : "#fff"}` }}
                  d="M11.7795 11.0992L11.2586 11.8806C11.1546 12.0366 11.0171 12.1696 10.8358 12.2175C10.2422 12.3744 8.66624 12.4452 6.26685 10.0458C3.86747 7.64644 3.93828 6.07044 4.09514 5.47682C4.14303 5.29559 4.27611 5.15807 4.43207 5.0541L5.21346 4.53317C5.79522 4.14533 5.95243 3.35931 5.56459 2.77755L4.08881 0.563882C3.75028 0.0560948 3.09767 -0.137907 2.53673 0.102496L1.871 0.387808C1.36527 0.604549 0.952739 0.99353 0.706675 1.48566C0.501097 1.89681 0.341759 2.32979 0.32017 2.78896C0.252136 4.23602 0.569438 7.80113 4.5405 11.7722C8.51156 15.7432 12.0766 16.0605 13.5237 15.9925C13.9829 15.9709 14.4158 15.8116 14.827 15.606C15.3191 15.3599 15.7081 14.9474 15.9249 14.4417L16.2102 13.7759C16.4506 13.215 16.2566 12.5624 15.7488 12.2239L13.5351 10.7481C12.9534 10.3602 12.1673 10.5174 11.7795 11.0992Z"
                  fill="white"
                />
              </svg>
              <a
                href="tel:5553508883"
                className={`flex justify-center items-center ml-2 ${
                  changeHeader ? "text-peach" : "text-white"
                }`}
              >
                +52 (55) 5350-8883
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 lg:flex">
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#insurance") as HTMLElement);
                if (element) {
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-white leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2  ${
                changeHeader ? "text-peach" : "text-white"
              }`}
            >
              Seguro
            </div>
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#benefits") as HTMLElement);
                if (element) {
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-white leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2  ${
                changeHeader ? "text-peach" : "text-white"
              }`}
            >
              Beneficios
            </div>
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#faq") as HTMLElement);
                if (element) {
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-white leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2  ${
                changeHeader ? "text-peach" : "text-white"
              }`}
            >
              Preguntas
            </div>
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#hero") as HTMLElement);
                if (element) {
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-white leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2  ${
                changeHeader ? "text-peach" : "text-white"
              }`}
            >
              Contacto
            </div>
            <Link href="/seguro/register">
              <div
                className={`cursor-pointer font-oswald font-medium text-white hover:no-underline ml-8 inline-flex items-center px-1 pt-1 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent ${
                  changeHeader ? "text-peach" : "text-white"
                }`}
              >
                <div
                  className={`cursor-pointer border-solid border-white border uppercase font-oswald tracking-widest py-4 px-6 ${
                    changeHeader
                      ? "hover:bg-peach hover:text-white border-peach"
                      : "hover:bg-whiteL"
                  }`}
                >
                  ADQUIERE ONLINE
                </div>
              </div>
            </Link>
          </div>

          <div className="-mr-2 flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={!open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={"lg:hidden " + (open ? " block" : " hidden")}>
        <div className="p-8 bg-peach text-white">
          <div
            onClick={() => {
              const element =
                typeof window !== "undefined" &&
                (document.querySelector("#insurance-mobile") as HTMLElement);
              if (element) {
                setOpen(!open);
                window.scroll({
                  top: element.offsetTop,
                  left: 0,
                  behavior: "smooth",
                });
              } else {
                router.push("/");
              }
            }}
            className={
              "font-work mt-1 block pl-3 pr-4 py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out border-red-800 text-white mb-3"
            }
          >
            Seguro
          </div>
          <div
            onClick={() => {
              const element =
                typeof window !== "undefined" &&
                (document.querySelector("#benefits") as HTMLElement);
              if (element) {
                setOpen(!open);
                window.scroll({
                  top: element.offsetTop,
                  left: 0,
                  behavior: "smooth",
                });
              } else {
                router.push("/");
              }
            }}
            className={
              "font-work mt-1 block pl-3 pr-4 py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out border-red-800 text-white mb-3"
            }
          >
            Beneficios
          </div>
          <div
            onClick={() => {
              const element =
                typeof window !== "undefined" &&
                (document.querySelector("#faq") as HTMLElement);
              if (element) {
                setOpen(!open);
                window.scroll({
                  top: element.offsetTop,
                  left: 0,
                  behavior: "smooth",
                });
              } else {
                router.push("/");
              }
            }}
            className={
              "font-work mt-1 block pl-3 pr-4 py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out border-red-800 text-white mb-3"
            }
          >
            Preguntas
          </div>

          <Link href="/seguro/register">
            {/* className="font-oswald font-medium text-white hover:no-underline ml-2 mt-3 inline-flex items-center px-1 pt-1 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent" */}
            <div className="border-white border px-8 py-3 tracking-widest">
              ADQUIERE ONLINE
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const FormHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav
      className="bg-beige shadow-sm w-full fixed z-30 transition delay-150 duration-300 ease-in-out"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}
    >
      <div className="mx-auto desktop:px-100px">
        <div className="flex justify-between h-12 lg:h-20 px-10px">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/seguro">
              <picture
                className={`cursor-pointer bg-beige text-gray-700 block w-24 sm:w-32 delay-150 duration-300 ease-in-out`}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 103 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m28.369 16.512c-1.6935 5.036-6.1223 8.3957-11.078 8.9827-3.4763 0.413-7.2144-0.5395-10.445-3.2345-4.0978-3.8762-5.3885-9.3151-3.7309-14.243h-0.00144c0.0518-0.16116 0.07194-0.33526 0.0518-0.51367-0.0777-0.66044-0.6777-1.1324-1.3381-1.0547-0.47338 0.05611-0.84748 0.37986-0.99424 0.8l-0.002877-0.00144c-1.3396 3.9827-1.0489 8.2503 0.82014 12.014 1.8691 3.7641 5.0921 6.5756 9.0763 7.9152 2.2762 0.7654 4.6057 0.9798 6.846 0.7136 5.8518-0.6949 11.084-4.6633 13.084-10.61l-2.2878-0.7684z" />
                  <path d="m9.167 22.788c2.0964 1.3064 4.4763 1.9496 6.8907 1.8892 0.846-0.0216 1.6964-0.1281 2.5381-0.3252l-0.5453-2.3497c-2.6216 0.6087-5.3237 0.1598-7.6072-1.2633-2.2849-1.423-3.8777-3.6503-4.4863-6.2719-1.259-5.4115 2.1223-10.836 7.5338-12.094v-0.00288c0.5324-0.13525 0.9208-0.62446 0.9065-1.1971-0.0173-0.66475-0.5698-1.1899-1.2346-1.1741-0.0748 0.0014388-0.1467 0.011511-0.2172 0.025899v-0.0014388c-0.0072 0.0014388-0.013 0.0028777-0.0187 0.0043165-0.0087 0.0014389-0.0159 0.0043166-0.0245 0.0057554-6.682 1.577-10.849 8.2849-9.295 14.978 0.75396 3.2504 2.7281 6.0115 5.5597 7.7756z" />
                  <path d="m8.5704 17.997 1.9036-1.4821c-2.8202-3.6244-1.3669-9.2402 3.5971-10.732 2.7957-0.6518 5.4662 0.32806 7.0906 2.4158l0.0015-0.00144c0.2273 0.28345 0.5784 0.46187 0.9698 0.4518 0.6647-0.01727 1.1913-0.56979 1.1741-1.2345-0.0072-0.26188-0.0979-0.50072-0.2447-0.69497l0.0015-0.00144c-1.5065-1.9352-3.6763-3.1698-6.1108-3.4734s-4.8403 0.35827-6.777 1.8648c-3.9957 3.1108-4.7165 8.8921-1.6057 12.888z" />
                  <path d="m19.913 15.624c0.4446-0.0115 0.8244-0.2619 1.0244-0.6259l0.0015 0.0014c0.0043-0.0086 0.0086-0.0187 0.0129-0.0273 0.0043-0.0072 0.0072-0.0158 0.0115-0.023 1.0489-2.0547 0.8504-4.5281-0.682-6.5123-3.0101-3.4302-8.0388-2.5424-9.9108 1.0417l2.1381 1.1165c1.1152-2.1338 4.1094-2.6633 5.9008-0.62013 0.9194 1.1913 1.0331 2.6791 0.3913 3.9079l0.0015 0.0014c-0.0849 0.1698-0.131 0.3626-0.1252 0.5669 0.0173 0.6633 0.5698 1.1885 1.236 1.1727z" />
                  <path d="m14.382 14.823c0.0331 0.0158 0.0662 0.0316 0.0993 0.0446 0.823 0.3784 1.7439 0.3352 2.5022-0.0561 0.5036-0.2605 0.9367-0.672 1.2187-1.213 0.7295-1.3957 0.1885-3.1252-1.2086-3.8546l-1.118 2.1382c0.2172 0.1137 0.3021 0.3827 0.1885 0.6-0.1137 0.2172-0.3828 0.3021-0.6 0.1885l-0.0015 0.0029c-0.3324-0.167-0.7381-0.1799-1.0935 0.0043-0.5914 0.305-0.823 1.0316-0.518 1.623 0.1151 0.223 0.2907 0.3957 0.4964 0.5065v0.0014c0.0115 0.0043 0.023 0.0086 0.0345 0.0144z" />
                  <path d="m63.698 23.796c10.735 0 18.259-8.7367 18.259-19.59h-3.918c0 7.2878-4.036 13.4-10.422 15.163v-15.164h-3.9194v19.591z" />
                  <path d="m98.905 4.2044v1.9597c-1.6461-1.2144-3.6432-1.9597-5.8777-1.9597-5.4072 0-9.7554 4.3885-9.7554 9.7956 0 5.4072 4.3496 9.7957 9.7554 9.7957 2.2331 0 4.2316-0.7439 5.8777-1.9985v1.9985h3.9184v-19.591h-3.9184zm-5.8777 15.673c-3.213 0-5.8374-2.6244-5.8374-5.8777 0-3.2532 2.6244-5.8777 5.8374-5.8777 3.2518 0 5.9165 2.6245 5.9165 5.8777 0 3.2533-2.6244 5.8777-5.9165 5.8777z" />
                  <path d="m44.908 12.08c0.823-2.272 2.9784-3.9568 5.5252-3.9568 2.5856 0 4.741 1.6849 5.564 3.9568h-11.089zm-4.2316 1.9194c0 5.4072 4.3496 9.7957 9.7554 9.7957 3.7223 0 6.9352-2.0374 8.5813-5.0158l-3.7612-1.4101c-1.0575 1.5281-2.8216 2.5079-4.8187 2.5079-2.7813 0-5.1712-1.9986-5.7209-4.6619h15.476c0.0388-0.3913 0.0777-0.823 0.0777-1.2143 0-5.4072-4.4662-9.7957-9.8345-9.7957-5.4058-0.00144-9.7554 4.387-9.7554 9.7942z" />
                </svg>
              </picture>
            </Link>

            <div className="flex ml-5 items-center">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7795 11.0992L11.2586 11.8806C11.1546 12.0366 11.0171 12.1696 10.8358 12.2175C10.2422 12.3744 8.66624 12.4452 6.26685 10.0458C3.86747 7.64644 3.93828 6.07044 4.09514 5.47682C4.14303 5.29559 4.27611 5.15807 4.43207 5.0541L5.21346 4.53317C5.79522 4.14533 5.95243 3.35931 5.56459 2.77755L4.08881 0.563882C3.75028 0.0560948 3.09767 -0.137907 2.53673 0.102496L1.871 0.387808C1.36527 0.604549 0.952739 0.99353 0.706675 1.48566C0.501097 1.89681 0.341759 2.32979 0.32017 2.78896C0.252136 4.23602 0.569438 7.80113 4.5405 11.7722C8.51156 15.7432 12.0766 16.0605 13.5237 15.9925C13.9829 15.9709 14.4158 15.8116 14.827 15.606C15.3191 15.3599 15.7081 14.9474 15.9249 14.4417L16.2102 13.7759C16.4506 13.215 16.2566 12.5624 15.7488 12.2239L13.5351 10.7481C12.9534 10.3602 12.1673 10.5174 11.7795 11.0992Z"
                  fill="#6C6C6C"
                />
              </svg>
              <a
                href="tel:5553508883"
                className="flex justify-center items-center ml-2 text-gray-700"
              >
                +52 (55) 5350-8883
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 lg:flex">
            <div
              onClick={() => {
                router.push("/seguro");
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-gray-700 leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2`}
            >
              Seguro
            </div>
            <div
              onClick={() => {
                router.push("/seguro");
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-gray-700 leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2`}
            >
              Beneficios
            </div>
            <div
              onClick={() => {
                router.push("/seguro");
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-gray-700  leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2`}
            >
              Preguntas
            </div>
            <div
              onClick={() => {
                router.push("/seguro");
              }}
              className={`flex items-center ml-4 hover:underline cursor-pointer text-gray-700 leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2`}
            >
              Contacto
            </div>
            <Link href="/seguro/register">
              <div
                className={`cursor-pointer font-oswald font-medium text-gray-700 hover:no-underline ml-8 inline-flex items-center px-1 pt-1 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent`}
              >
                <div className="border-gray-700 border px-8 py-4 tracking-widest">
                  ADQUIERE ONLINE
                </div>
              </div>
            </Link>
          </div>

          <div className="-mr-2 flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={!open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={"lg:hidden " + (open ? " block" : " hidden")}>
          <div className="p-8 bg-peach text-white z-50">
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#insurance-mobile") as HTMLElement);
                if (element) {
                  setOpen(!open);
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                } else {
                  router.push("/seguro");
                }
              }}
              className={
                "font-work mt-1 block pl-3 pr-4 py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out border-red-800 text-white mb-3"
              }
            >
              Seguro
            </div>
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#benefits") as HTMLElement);
                if (element) {
                  setOpen(!open);
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                } else {
                  router.push("/seguro");
                }
              }}
              className={
                "font-work mt-1 block pl-3 pr-4 py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out border-red-800 text-white mb-3"
              }
            >
              Beneficios
            </div>
            <div
              onClick={() => {
                const element =
                  typeof window !== "undefined" &&
                  (document.querySelector("#faq") as HTMLElement);
                if (element) {
                  setOpen(!open);
                  window.scroll({
                    top: element.offsetTop,
                    left: 0,
                    behavior: "smooth",
                  });
                } else {
                  router.push("/seguro");
                }
              }}
              className={
                "font-work mt-1 block pl-3 pr-4 py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out border-red-800 text-white mb-3"
              }
            >
              Preguntas
            </div>

            <Link href="/seguro/register">
              <div className="font-oswald font-medium text-white hover:no-underline ml-2 mt-3 inline-flex items-center px-1 pt-1 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent">
                <div className="border-white border px-8 py-3 tracking-widest">
                  ADQUIERE ONLINE
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
