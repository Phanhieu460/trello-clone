import React, { useState } from "react";

const Add = ({ onAdd }) => {
  const [addCard, setAddCard] = useState("");
  const handleChange = (e) => {
    setAddCard(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    onAdd({
      id: Math.floor(Math.random() * 1000),
      text: addCard,
    });
    setAddCard("");
  };

  return (
    <form style={{ display: "flex", marginTop: "10px" }} onSubmit={handleClick}>
      <input
        type="text"
        className="form-control"
        placeholder="Add Task"
        name="addCard"
        value={addCard}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        +
      </button>
    </form>
  );
};

export default Add;
