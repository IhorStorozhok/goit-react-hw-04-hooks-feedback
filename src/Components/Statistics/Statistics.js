import React from "react";
import s from "../Rewiews/Rewiews.module.css";
import PropTypes from "prop-types";


const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <>
    <h2 className={s.rewSubtitle}>Statistics</h2>
    <ul className={s.rewStatisticList}>
      <li>
        <span className="rewStatisticItem">
          Good:<span>{good}</span>
        </span>
      </li>
      <li>
        <span className="rewStatisticItem">
          Neutral:<span>{neutral}</span>
        </span>
      </li>
      <li>
        <span className="rewStatisticItem">
          Bad:<span>{bad}</span>
        </span>
      </li>
      <li>
        <span className="rewStatisticItem">
          Total:<span>{total}</span>
        </span>
      </li>
      <li>
        <span className="rewStatisticItem">
          Positive feedback:
          <span>{positivePercentage}%</span>
        </span>
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
