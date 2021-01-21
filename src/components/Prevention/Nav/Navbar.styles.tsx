import styled from "styled-components";

interface NavBarProps {
  readonly show: boolean;
  readonly open: boolean;
}

export const NavBar = styled.div.attrs<NavBarProps>(({ show, open }) => ({
  className: `w-full h-16 lg:h-20 fixed z-10 bg-transparent flex flex-wrap justify-between transition ${
    !show && "border-b border-whiteLight"
  } ${show && "bg-brownMiddle duration-500 ease-in"} ${
    open && !show && "bg-brownMiddle"
  }`,
}))<NavBarProps>``;

export const Logo = ({ url }: { url: string }) => {
  return (
    <div className="flex items-center lg:mx-24 h-full cursor-pointer">
      <img style={{ width: 150 }} src={url} />
    </div>
  );
};

export const ButtonsRight = styled.div.attrs(() => ({
  className: "hidden lg:flex items-center h-full lg:mx-24",
}))``;

export const MenuWrapMobile = styled.div.attrs(() => ({
  className:
    "lg:hidden list-none flex flex-col justify-between bg-brownDark h-screen w-full border-t border-whiteLight px-10 pt-12 pb-24",
}))``;

export const HeaderSupport = styled.div.attrs(() => ({
  className: "text-18 text-brownLight font-haptik pb-6",
}))`
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;
  font-feature-settings: "ss04" on;
`;
