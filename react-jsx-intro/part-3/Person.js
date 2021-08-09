"use strict";

function Person(props) {
  return (
    <div>
      <p>Learn some information about this person</p>
      <h2>{props.name}</h2>
      <h3>{props.age > 18 ? "Please go vote" : ""}</h3>
      {props.age > 18 ? <h3>Test h3</h3> : ""}
      <ul>
        {props.hobbies.map((h) => (
          <li>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
