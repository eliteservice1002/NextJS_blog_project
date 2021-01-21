import React from "react";
import Link from "next/link";
import banner from "../../../assets/images/membership/back_banner-3.jpg";

export default function index() {
  return (
    <div
      className="bg-local bg-center bg-cover h-64 flex items-center px-8 lg:px-32"
      style={{ backgroundImage: `url(${banner})`, height: "350px" }}
    >
      <div>
        <p className="text-dark font-hthaptik font-thin text-4xl mb-4">
          Obtener tu Membresía <br /> Eva{" "}
          <span className="font-semibold">es fácil</span>
        </p>
        <Link href="/membresia/register">
          <button
            className="bg-peach py-2 px-6 text-white"
            style={{ borderRadius: "4px" }}
          >
            Adquiere online
          </button>
        </Link>
      </div>
    </div>
  );
}
