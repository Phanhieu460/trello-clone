import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Add from "./Add";
import Card from "./Card";

const Container = styled.div`
  width: 30%;
  min-height: 150px;
  background: lavender;
  border: 1px solid lavender;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 20px;
  padding-left: 15px;
  font-weight: bold;
`;

// const data = [
//   {
//     id: 0,
//     text: "He Chuyen Gia",
//   },
//   {
//     id: 1,
//     text: "Dam May",
//   },

//   {
//     id: 2,
//     text: "Ngon Ngu Kich Ban",
//   },
//   {
//     id: 3,
//     text: "Kiem Thu",
//   },
// ];

const List = (props) => {
  const [listData, setListData] = useState([]);

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  const onDeleteCard = (data) => {
    const newList = [...listData];
    const indexDel = newList.findIndex((x) => x.id === data.id);
    if (indexDel < 0) return;
    newList.splice(indexDel, 1);
    setListData(newList);
    localStorage.setItem("listData", JSON.stringify(newList));
  };
  const onAdd = (data) => {
    const newListData = [...listData, data];
    setListData(newListData);
    console.log("Listdata", ...listData);
    localStorage.setItem("listData", JSON.stringify(newListData));
  };
  return (
    <Container
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {[listData].map((data, index) => {
        return (
          <div key={index}>
            <Title>{props.title}</Title>
            <Card
              id="card-1"
              className="cardContent"
              draggable="true"
              cards={data}
              onDeleteCard={onDeleteCard}
            />
            <Add onAdd={onAdd} />
          </div>
        );
      })}
    </Container>
  );
};

export default List;
