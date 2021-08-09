// import "./Card.css";

// const Card = (props) => {
//   const classes = "card" + props.className;

//   return <div className={classes}>{props.children}</div>;
// };

// export default Card;

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
