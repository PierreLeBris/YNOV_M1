import React, { useState } from "react";
import Heart from "react-animated-heart";

const Like = () => {
  const [isClick, setClick] = useState(false);
  return (
    <div className="Like">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}

export default Like;

