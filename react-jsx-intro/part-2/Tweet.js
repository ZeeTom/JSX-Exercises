'use strict';

function Tweet(props) {
  const colors = {
    color: props.favoriteColor,
    backgroundColor: props.otherColor,
  }
  
  return (
    <p style={colors}>
      Username: {props.username}, Name: {props.name}, Date: {props.date} Message: {props.message}
    </p>
  );
}