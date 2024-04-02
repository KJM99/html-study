import { useState } from "react";
import ViewCount from "../components/ViewCount";
import ChangeCount from "../components/ChangeCount";
import LogCount from "../components/LogCount";

const Counter = () => {
  return (
    <div className="container">
      <ViewCount />
      <ChangeCount />
      <hr className="m-4" />
      <LogCount />
    </div>
  );
};

export default Counter;
