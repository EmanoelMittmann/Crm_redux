import React from "react";
import { Element } from "./style";

const Elements = ({ value, name }) => {
  return (
    <Element>
      <span className="material-symbols-outlined">{name}</span>
      {value}
    </Element>
  );
};
export default Elements;
