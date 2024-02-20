import React, { useState } from "react";

function ShowHide() {
  // hook de react - useState
  const [show, setShow] = useState(true);

  const handleClick = () => {
    // valor contrario de show porq es un booleano
    setShow(!show);
  };

  //   return <div>{show ? <h2>Hide me!</h2> : ""}</div>;
  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide " : "Show "} Text </button>
      {show && <h2>Hide me!</h2>}
    </div>
  );
}

export default ShowHide;
