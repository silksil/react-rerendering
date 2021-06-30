import React, { useState, Fragment, memo } from "react";

const List = memo(({ bert, ernie }) => (
  <div>
    <li>{bert}</li>
    <li>{ernie}</li>
  </div>
));

const App = () => {
  const [value, setValue] = useState("");
  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const persons = [
    { name: "Bert", mood: "Grumpy" },
    { name: "Ernie", mood: "Happy" }
  ];

  const bert = "I am Bert and I am Grumpy";
  const ernie = "I am Ernie and I am Happy";

  return (
    <Fragment>
      <input value={value} onChange={handleInputChange} />
      <List bert={bert} ernie={ernie} />
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <input value={value} onChange={handleInputChange} />
  //     <List bert={persons[0].name} ernie={persons[1].name} />
  //   </Fragment>
  );
};

export default App;
