import { animated as a, useSpring } from "react-spring";

import PropTypes from "prop-types";
import React from "react";
import useInterval from "./useInterval";

const Flip = ({ terms, className, deg }) => {
  const [cardNum, setCardNum] = React.useState(0);
  const [texts, setTexts] = React.useState({
    card1: terms[0],
    card2: terms[0],
  });
  const { transform, opacity } = useSpring({
    opacity: cardNum % 2 ? 1 : 0,
    transform: `perspective(600px) rotateX(${cardNum % 2 ? deg || 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 50 },
  });
  const handleClick = () => {
    const goingToCard1 = !!(cardNum % 2);
    const upcomingCard = findCardNum(terms, cardNum);
    if (goingToCard1) {
      setTexts((old) => ({
        ...old,
        card1: terms[upcomingCard],
      }));
    } else {
      setTexts((old) => ({
        ...old,
        card2: terms[upcomingCard],
      }));
    }
    setCardNum(upcomingCard);
  };
  useInterval(handleClick, 3000);
  return (
    <div
      className={className + " relative"}
      // onClick={handleClick}
    >
      <a.div
        style={{ opacity: opacity.interpolate((o) => 1 - o * 2), transform }}
        className="absolute inset-0 underline"
      >
        {texts.card1}
      </a.div>
      <a.div
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        {texts.card2}
      </a.div>
    </div>
  );
};

export default Flip;

Flip.propTypes = {
  deg: PropTypes.number,
  terms: PropTypes.array.isRequired,
  interval: PropTypes.number,
  className: PropTypes.string,
};

const findCardNum = (terms, cardNum) => {
  if (terms.length - 1 === cardNum) return 0;
  return cardNum + 1;
};
