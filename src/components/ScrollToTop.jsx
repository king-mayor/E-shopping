import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  }, []);
  const handleScrollButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      {toggle && (
        <FaArrowCircleUp
          className="text-3xl text-red-600 fixed right-2 bottom-6 z-50 cursor-pointer"
          onClick={handleScrollButton}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
