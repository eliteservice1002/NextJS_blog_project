import Link from "next/link";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Custom404() {
  return (
    <div className="h-screen">
      <Header noTransaparent />
      <div className="flex justify-center items-center" style={{ height: 'calc(100% - 27rem)'}}>
        <div>
          <h1 className="text-primary text-6xl text-center">404 - Page Not Found</h1>
          <div className="flex justify-center ">
            <Link href="/">
              <div className="text-white bg-red-400 px-6 py-2 rounded-lite cursor-pointer">
                Go To Home
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
