import React from "react";
import Link from "next/link";
import {
  ButtonDesktopBlod,
  ButtonDesktopThin,
  ButtonMobileThin,
  ButtonDesktopThinPrimary,
} from "./Button.styles";

export const BannerButtonDesktopBlod = ({ text, href }) => {
  return (
    <Link href={href}>
      <ButtonDesktopBlod>{text}</ButtonDesktopBlod>
    </Link>
  );
};

export const BannerButtonDesktopThin = ({ text, href }) => {
  return (
    <Link href={href}>
      <ButtonDesktopThin>{text}</ButtonDesktopThin>
    </Link>
  );
};

export const BannerButtonMobileThin = ({ text, href }) => {
  return (
    <Link href={href}>
      <ButtonMobileThin>{text}</ButtonMobileThin>
    </Link>
  );
};

export const BannerButtonDesktopThinPrimary = ({ text, href }) => {
  return (
    <Link href={href}>
      <ButtonDesktopThinPrimary>{text}</ButtonDesktopThinPrimary>
    </Link>
  );
};
