import React from "react";
import PropTypes from "prop-types";
import s from "../Rewiews/Rewiews.module.css";

const NotificationMessage = ({ message }) => {
  return <p className={s.rewStatisticList}> {message}</p>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string,
};

export default NotificationMessage;
