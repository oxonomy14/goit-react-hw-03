import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./App.css";

import Description from "./Description/Description";
import Option from "./Option/Option";
import Notification from "./Notification/Notification";
import Feedback from "./Feedback/Feedback";

const App = () => {
  const [views, setViews] = useState(() => {
    const savedViews = window.localStorage.getItem("feedback");
    if (savedViews !== null) {
      return JSON.parse(savedViews);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setViews((views) => ({
      ...views,
      [feedbackType]: views[feedbackType] + 1,
    }));
  };

  const totalFeedback = views.good + views.neutral + views.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((views.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(views));
  }, [views]);

  const resetFeedback = () => {
    setViews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          {...views}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
