import React from "react";
import styled from "styled-components";

const Content = styled.p`
  min-width: 30%;
  min-height: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  background: white;
`;

const Card = (props) => {
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
    if (props.onDeleteCard) {
      props.onDeleteCard(data);
    }
  };
  return (
    <div>
      {props.cards.map((card, index) => {
        return (
          <div key={card.id}>
            <Content
              id={props.id}
              onDragStart={dragStart}
              onDragOver={dragOver}
              draggable={props.draggable}
              className={props.className}
              onClick={() => handleClick(card)}
            >
              {card.text}
            </Content>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
