import React from "react";
import { Element } from "./style";

const Elements = ({ value, name, onClick }) => {
  return (
    <Element onClick={onClick}>
      <span className="material-symbols-outlined">{name}</span>
      {value}
    </Element>
  );
};
export default Elements;
