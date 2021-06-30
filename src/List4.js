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

  const bert = "I am Bert and I am Grumpy";
  const ernie = "I am Ernie and I am Happy";

  return (
    <Fragment>
      <input value={value} onChange={handleInputChange} />
      <List bert={bert} ernie={ernie} />
    </Fragment>
  );
};

export default App;
