import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Add from "./Add";
import Card from "./Card";
import InputTask from "./InputTask";

const Container = styled.div`
  width: 25%;
  min-height: 150px;
  background: lavender;
  border: 1px solid lavender;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
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
  useEffect(() => {
    if (localStorage && localStorage.getItem("listData")) {
      let listDatas = JSON.parse(localStorage.getItem("listData"));
      setListData(listDatas);
    }
  }, []);

  const onDeleteCard = (data) => {
    const newList = [...listData];
    const indexDel = newList.findIndex((x) => x.id === data.id);
    if (indexDel < 0) return;
    newList.splice(indexDel, 1);
    setListData(newList);
    localStorage.setItem("listData", JSON.stringify(newList));
  };
  const onAdd = (data) => {
    const newListData = [...listData];
    newListData.push(data);
    setListData(newListData);
    localStorage.setItem("listData", JSON.stringify(newListData));
  };
  const onUpdate = (data) => {
    console.log(data);
    let indexUpdate = listData.findIndex((x) => x.id === data.id);
    if (indexUpdate !== -1) {
      let newData = listData;
      listData[indexUpdate] = data;
      //console.log("Thong tin acc can update:", accountUpdate);
      setListData(newData);
      localStorage.setItem("listData", JSON.stringify(newData));
    }
  };
  return (
    <>
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
                onUpdate={onUpdate}
              />
              <Add onAdd={onAdd} list={listData} />
            </div>
          );
        })}
      </Container>
      {/* <InputTask list={listData} /> */}
    </>
  );
};

export default List;
