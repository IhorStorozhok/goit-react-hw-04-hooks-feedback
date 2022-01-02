import { React, useState } from "react";

import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import NotificationMessage from "../NotificationMessage/NotificationMessage";

function Rewiews() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const handleGoodRewiew = () => {
    setGoodFeedback(goodFeedback + 1);
  };

  const handleNeutralRewiew = () => {
    setNeutralFeedback(neutralFeedback + 1);
  };

  const handleBadRewiew = () => {
    setBadFeedback(badFeedback + 1);
  };

  const totalWiews = goodFeedback + neutralFeedback + badFeedback;
  //рендер разметки

  return (
    <>
      <Section
        title={"Please leave feedback"}
        article={
          <FeedbackOptions
            onLeaveFeedback={{
              good: handleGoodRewiew,
              neutral: handleNeutralRewiew,
              bad: handleBadRewiew,
            }}
          ></FeedbackOptions>
        }
      ></Section>
      <Section
        title={"Statistics"}
        article={
          totalWiews === 0 ? (
            <NotificationMessage
              message={"There is no feedback"}
            ></NotificationMessage>
          ) : (
            <Statistics
              good={goodFeedback}
              bad={badFeedback}
              neutral={neutralFeedback}
              total={totalWiews}
              positivePercentage={
                totalWiews === 0
                  ? 100
                  : Math.round((goodFeedback / totalWiews) * 100)
              }
            ></Statistics>
          )
        }
      ></Section>
    </>
  );
}

// class Rewiews extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   //методы которые передаються в слушателей событий

//   handleGoodRewiew = () => {
//     this.setState((prev) => {
//       return { good: prev.good + 1 };
//     });
//   };

//   handleNeutralRewiew = () => {
//     this.setState((prev) => {
//       return { neutral: prev.neutral + 1 };
//     });
//   };

//   handleBadRewiew = () => {
//     this.setState((prev) => {
//       return { bad: prev.bad + 1 };
//     });
//   };

//   //рендер разметки

//   render() {
//     const totalWiews = this.state.bad + this.state.good + this.state.neutral;
//     return (
//       <>
//         <Section
//           title={"Please leave feedback"}
//           article={
//             <FeedbackOptions
//               onLeaveFeedback={{
//                 good: this.handleGoodRewiew,
//                 neutral: this.handleNeutralRewiew,
//                 bad: this.handleBadRewiew,
//               }}
//             ></FeedbackOptions>
//           }
//         ></Section>
//         <Section
//           title={"Statistics"}
//           article={
//             totalWiews === 0 ? (
//               <NotificationMessage
//                 message={"There is no feedback"}
//               ></NotificationMessage>
//             ) : (
//               <Statistics
//                 good={this.state.good}
//                 bad={this.state.bad}
//                 neutral={this.state.neutral}
//                 total={totalWiews}
//                 positivePercentage={
//                   totalWiews === 0
//                     ? 100
//                     : Math.round((this.state.good / totalWiews) * 100)
//                 }
//               ></Statistics>
//             )
//           }
//         ></Section>
//       </>
//     );
//   }
// }

export default Rewiews;
