import React from "react";
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <Spinner aria-label="Loading..." />
      <span className="ml-2 text-xl">Loading...</span>
    </div>
  );
};

export default Loading;
