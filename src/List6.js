import React, { useState, Fragment, memo, useMemo } from "react";

const List = memo(({ persons }) => (
  <div>
    {persons.map(person => (
      <li>
        I am {person.name} and I am {person.mood}{" "}
      </li>
    ))}
  </div>
));

const App = () => {
  const [value, setValue] = useState("");
  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const persons = useMemo(
    () => [{ name: "Bert", mood: "Grumpy" }, { name: "Ernie", mood: "Happy" }],
    []
  );

  return (
    <Fragment>
      <input value={value} onChange={handleInputChange} />
      <List persons={persons} />
    </Fragment>
  );
};

export default App;
