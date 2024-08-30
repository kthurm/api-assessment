import { useState, useRef, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const Modal = ({ children, clickText = "Open" }) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <button
        className="relative mr-5 lg:mr-10 rounded-b-lg bg-primary text-white text-sm font-semibold px-3 py-2"
        onClick={() => setShow(true)}
      >
        {clickText}
      </button>
      {show && (
        <div
          ref={modalRef}
          className="absolute right-5 lg:right-10 top-0 rounded-b-lg bg-primary text-white shadow-lg p-5"
          onClick={() => setShow(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <button
              className="bg-transparent absolute top-1 right-1 text-2xl"
              onClick={() => setShow(false)}
            >
              <IoMdCloseCircleOutline />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
