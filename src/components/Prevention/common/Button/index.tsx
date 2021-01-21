import React from "react";
import Link from "next/link";
import { BannerButtonSm, BannerButtonLg } from "./Button.styles";

export default function index({
  primary,
  href,
  text,
}: {
  primary: boolean;
  href: string;
  text: string;
}) {
  return (
    <div>
      <div className="hidden lg:flex">
        <BannerButtonLg primary={primary}>
          <Link href={href}>{text}</Link>
        </BannerButtonLg>
      </div>
      <div className="lg:hidden">
        <BannerButtonSm primary={primary}>
          <a href={href} target="_blank">
            {text}
          </a>
        </BannerButtonSm>
      </div>
    </div>
  );
}
