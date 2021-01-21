export const IconNavMobile = ({ open }: { open: boolean }) => {
  return (
    <picture
      className={`text-white lg:hidden delay-150 duration-300 pr-2 ease-in-out flex items-center h-full`}
    >
      <svg
        className="h-10 w-10"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        {!open ? (
          <path
            className={"inline-flex"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        ) : (
          <path
            className={"inline-flex"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        )}
      </svg>
    </picture>
  );
};
