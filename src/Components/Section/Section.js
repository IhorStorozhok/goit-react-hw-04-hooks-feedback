import React from "react";
import PropTypes from "prop-types";

import s from "../Rewiews/Rewiews.module.css";

const Section = ({ title, article }) => {
  return (
    <div className={s.container}>
      <h2 className={s.rewTitle}>{title}</h2>
      {article}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
};
export default Section;
