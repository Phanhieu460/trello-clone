import React, { useState } from "react";
import styled from "styled-components";
import Add from "./Add";

const Content = styled.div`
  width: 100%;
  min-height: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  background: white;
  position: relative;
`;

const Card = ({ onDeleteCard, id, draggable, className, cards, onUpdate }) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  const handleClick = (data) => {
    if (onDeleteCard) {
      onDeleteCard(data);
    }
  };
  const handleUpdate = (data) => {
    if (onUpdate) {
      onUpdate(data);
    }
  };

  return (
    <div>
      {cards.map((card, index) => {
        return (
          <div key={card.id} style={{ display: "flex", width: "100%" }}>
            <Content
              id={id}
              onDragStart={dragStart}
              onDragOver={dragOver}
              draggable={draggable}
              className={className}
            >
              {card.text}

              <button
                className="btn btn-default"
                style={{
                  background: "white",
                  position: "absolute",
                  right: "3px",
                  bottom: "3px",
                }}
                onClick={() => handleClick(card)}
              >
                <i class="fas fa-trash"></i>
              </button>
              <button
                className="btn btn-default"
                style={{
                  background: "white",
                  position: "absolute",
                  right: "30px",
                  bottom: "3px",
                }}
                onClick={() => handleUpdate(card)}
              >
                <i class="fas fa-pen"></i>
              </button>
            </Content>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
