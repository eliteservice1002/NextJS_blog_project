import React from "react";

const index = ({ url, className }: { url: string; className?: string }) => {
  return (
    <div className={`px-6 lg:pl-20 ${className}`}>
      <img src={url} className="h-6" alt="" />
    </div>
  );
};

export default index;
