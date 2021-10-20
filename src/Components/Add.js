import React, { useState, useRef } from "react";

const Add = ({ onAdd, list }) => {
  const [addCard, setAddCard] = useState("");
  const inputRef = useRef(null);

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
    <form style={{ display: "flex", marginTop: "10px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Add Card"
        name="addCard"
        value={addCard}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        +
      </button>

      {/* {list ? (
        <>
          <input
            placeholder="Update "
            value={addCard}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="form-control"
            placeholder="Add Card"
            name="addCard"
            value={addCard}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            +
          </button>
        </>
      )} */}
    </form>
  );
};

export default Add;
