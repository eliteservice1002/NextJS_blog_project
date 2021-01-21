const index = ({ url, className }: { url: any; className?: string }) => {
  return (
    <div className={`${className}`}>
      <img src={url} className=" h-4 lg:h-6" alt="" />
    </div>
  );
};
export default index;
