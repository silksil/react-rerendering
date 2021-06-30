import React, { useState, Fragment } from "react";

const List = ({ persons }) => (
  <div>
    {persons.map(person => (
      <li>
        I am {person.name} and I am {person.mood}{" "}
      </li>
    ))}
  </div>
);

const App = ({ persons }) => {
  const [value, setValue] = useState("");
  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <input value={value} onChange={handleInputChange} />
      <List persons={persons} />
    </Fragment>
  );
};

export default App;
