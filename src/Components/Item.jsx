import React, { useState } from "react";
import "../CSS/Item.css";
import "../CSS/FormIncome.css";


function Item(props) {
    const [isEdit, setShowEdit] = useState(false)
    const { id, todo, amount, category, payment } = props // Destructuring
    // const id = props.id
    // const todo = props.todo
    // const amount = props.amount
    // const category = props.category
    // const payment = props.payment

    const [changeTodo, setChangeTodo] = useState(todo)
    const [changeCategory, setChangeCategory] = useState(category)
    const [changeAmount, setChangeAmount] = useState(amount)
    const [changePayment, setChangePayment] = useState(payment)

    const emojiPayment = (payment == "เงินสด") ? <span className="emoji">💵</span> : <span className="emoji">💳</span>;

    let styleCategory;
    switch (category) {
        case "อาหาร":
            styleCategory = "tagCategory food";
            break;
        case "ของใช้":
            styleCategory = "appliance";
            break;
        case "บริการ":
            styleCategory = "service";
            break;
        case "เดินทาง":
            styleCategory = "fare";
            break;
        case "รักษาพยาบาล":
            styleCategory = "medicalFee";
            break;
        default:
            styleCategory = "tagCategory";
    }

    const onDoneEdit = () => {
        const editValue = {
            id: id,
            todo: changeTodo,
            amount: Number(changeAmount),
            category: changeCategory,
            payment: changePayment
        }

        if (props.account == "INCOME") {
            props.onClickEditIN(id, editValue)
            console.log("Edit: Income")
        } else {
            props.onClickEditEX(id, editValue)
            console.log("Edit: Expense")
        }
        setShowEdit(false)
    }

    const onDelete = (id) => {
        if (props.account == "INCOME") {
            props.onClickDeleteIN(id)
            console.log("Delete: Income")
        } else {
            props.onClickDeleteEX(id)
            console.log("Delete: Expence")
        }
    }

    return (
        <>
            <div className="item">
                <div key={id} className="infoP">
                    <p className="todo">{todo}</p>
                    <p className="amount">฿ {amount.toLocaleString('en-US')}</p>
                    <p className={styleCategory}>{category}</p>
                    <p className="tagPayment">{payment}{emojiPayment}</p>
                </div>
                <div className="groupBtn">
                    <button onClick={() => setShowEdit(true)} className="btn-Edit">แก้ไข</button>
                    <button className="btn-delete" onClick={() => onDelete(id)}>ลบ</button>
                </div>
            </div>

            {isEdit &&
                <div className="editContainer">
                    <form className="form-control">
                        <div>
                            <label>รายการ : </label>
                            <input type="text" value={changeTodo} onChange={(e) => setChangeTodo(e.target.value)} />

                            <label>หมวดหมู่ :</label>
                            <select value={changeCategory} onChange={(e) => setChangeCategory(e.target.value)} className="select-category">
                                <option value=""></option>
                                <option value="อาหาร">อาหาร</option>
                                <option value="ของใช้">ของใช้</option>
                                <option value="บริการ">บริการ</option>
                                <option value="เดินทาง">เดินทาง</option>
                                <option value="รักษาพยาบาล">รักษาพยาบาล</option>
                            </select>
                        </div >

                        <div>
                            <label>จำนวนเงิน : </label>
                            <input type="number" value={changeAmount} onChange={(e) => setChangeAmount(e.target.value)} />

                            <label>ช่องทางชำระเงิน :</label>
                            <select value={changePayment} onChange={(e) => setChangePayment(e.target.value)} className="select-payment">
                                <option value=""></option>
                                <option value="เงินสด">เงินสด</option>
                                <option value="บัตรเครดิต">บัตรเครดิต</option>
                            </select>
                        </div>
                    </form>

                    <button onClick={onDoneEdit} className="btn-done">บันทึกแก้ไข</button>
                    <button onClick={() => setShowEdit(false)} className="btn-x">X</button>
                </div>
            }

        </>
    );
}

export default Item