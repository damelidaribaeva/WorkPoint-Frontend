import React from "react";
import { useParams } from "react-router-dom";

const Coworkings = () => {
  const { types } = useParams();
  console.log(types);
  return <div>Coworkings</div>;
};

export default Coworkings;
