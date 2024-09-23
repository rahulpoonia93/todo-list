import React from "react";

function createItem(item) {
  return <li>{item}</li>;
}

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleClick(event) {
    const prev = items;
    prev.push(inputText);
    setItems(prev);
    setInputText("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(createItem)}</ul>
      </div>
    </div>
  );
}

export default App;
