import React from "react";
import s from "../Rewiews/Rewiews.module.css";
import PropTypes from "prop-types";

import images from "../Rewiews/img/images";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.rewButtonsList}>
        <li className={s.rewButtonBox}>
          <button
            name="button"
            className={s.rewButton}
            onClick={onLeaveFeedback.good}
          >
            <img src={images.good} alt="OK smile" width={48}></img>
          </button>
        </li>
        <li>
          <button
            name="button"
            className={s.rewButton}
            onClick={onLeaveFeedback.neutral}
          >
            <img src={images.neutral} alt="DOES not matter smile"></img>
          </button>
        </li>
        <li>
          <button
            name="button"
            className={s.rewButton}
            onClick={onLeaveFeedback.bad}
          >
            <img src={images.bad} alt="HATE u smile"></img>
          </button>
        </li>
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.object.isRequired,
};

export default FeedbackOptions;
