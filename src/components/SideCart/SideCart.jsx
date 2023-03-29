import React, { useEffect, useState } from "react";
 import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTime = localStorage.getItem("watchTime");

    setTime(getWatchTime);
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [watchTime]);

  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };

   const handleComplete = () => {
     toast("Wow so easy!");
  };
  
  return (
    <div className="position-sticky top-0">
      <h1 className="text-center ">Side Cart</h1>
      <div className="mb-3">
        <p>Total Watch Time</p>
        <input type="" value={time} disabled />
      </div>
      <h5>Add Break Time</h5>
      <button
        onClick={() => handleBreakTime(15)}
        className="w-25 mb-3 btn-circle m-1 btn btn-warning"
      >
        15
      </button>
      <button className="w-25 mb-3 btn-circle m-1 btn btn-info">20</button>
      <button className="w-25 mb-3 btn-circle m-1 btn btn-danger">25</button>
      <input type="" value={breakTime} disabled /> <br />
      <button
        onClick={handleComplete}
        className="w-75 mt-4 btn-circle m-1 btn btn-primary"
      >
        Complete
      </button>
    </div>
  );
};

export default SideCart;
