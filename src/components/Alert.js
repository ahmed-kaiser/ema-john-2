import { useEffect, useState } from "react";

const Alert = ({ type, message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show ? (
        <div>
          <p>{message}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
