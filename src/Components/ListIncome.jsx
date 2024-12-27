import React, { useState } from "react";
import Item from "./Item";

const styleHeader = {
    backgroundColor: "rgb(0, 121, 61)",
    color: "beige",
    padding: "10px 20px",
    borderRadius: "10px 10px 0 0",
    fontSize: "1.4rem",
    margin: "0"
}

const styleTotal = {
    borderBottom: "2px solid beige",
    color: "beige",
    fontSize: "1em"
}

const styleContainer = {
    border: "1px solid rgb(0, 121, 61)",
    borderRadius: "13px",
    overflow: "hidden"
}


function ListIncome(props) {
    const todoList = props.todoIN
    const cashList = todoList.filter((e) => e.payment == "เงินสด")
    const creditCardList = todoList.filter((e) => e.payment == "บัตรเครดิต")

    const allAmount = todoList.map(({ amount }) => (Number(amount)));
    const totalIN = allAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const curPayment = props.showSelectPayment
    const FXonClickDeleteIN = props.onClickDeleteIN
    const FXonClickEditIN = props.onClickEditIN


    let renderItem
    if (curPayment == "allCash") {
        renderItem = (
            todoList.map(e => (
                <Item
                    key={e.id}
                    id={e.id}
                    todo={e.todo}
                    amount={e.amount}
                    category={e.category}
                    payment={e.payment}
                    onClickDeleteIN={FXonClickDeleteIN}
                    onClickEditIN={FXonClickEditIN}
                    account={"INCOME"}
                />))
        )
    } else if (curPayment == "cash") {
        renderItem = (
            cashList.map(e => (
                <Item
                    key={e.id}
                    id={e.id}
                    todo={e.todo}
                    amount={e.amount}
                    category={e.category}
                    payment={e.payment}
                    onClickDeleteIN={FXonClickDeleteIN}
                    onClickEditIN={FXonClickEditIN}
                    account={"INCOME"}
                />))
        )
    } else {
        renderItem = (
            creditCardList.map(e => (
                <Item
                    key={e.id}
                    id={e.id}
                    todo={e.todo}
                    amount={e.amount}
                    category={e.category}
                    payment={e.payment}
                    onClickDeleteIN={FXonClickDeleteIN}
                    onClickEditIN={FXonClickEditIN}
                    account={"INCOME"}
                />))
        )
    }

    let statusPayment
    if(curPayment == "allCash" && todoList.length === 0){
        statusPayment = <h2 style={{color: "red"}}>ไม่มีข้อมูล รายรับ</h2>
    }else if(curPayment == "cash" && cashList.length === 0){
        statusPayment = <h2 style={{color: "red"}}>ไม่มีข้อมูล เงินสด</h2>
    }else if(curPayment == "creditCard" && creditCardList.length === 0){
        statusPayment = <h2 style={{color: "red"}}>ไม่มีข้อมูล บัตรเครดิต</h2>
    }

    
    return (
        <>
            <div style={styleContainer}>
                <h2 style={styleHeader}>ข้อมูล รายรับ : <span style={styleTotal}>รวม ฿ {totalIN.toLocaleString('en-US')}</span></h2>

                {renderItem}
                {statusPayment}
            </div>
        </>
    );
}

export default ListIncome