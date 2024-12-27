import React, { useState } from "react";
import "../CSS/FormExpense.css"

function FormExpense(props) {
    const [newTodoEX, setNewTodoEX] = useState("")
    const [newAmountEX, setNewAmountEX] = useState("")
    const [newCategoryEX, setNewCategoryEX] = useState("")
    const [newPaymentEX, setNewPaymentEX] = useState("")

    const onClickDone = ()=> {
        const newTodo = {
            todo: newTodoEX,
            amount: Number(newAmountEX),
            category: newCategoryEX,
            payment: newPaymentEX
        }
        props.addNewExpence(newTodo)

        setNewTodoEX("")
        setNewAmountEX("")
        setNewCategoryEX("")
        setNewPaymentEX("")
    }

    return (
        <>
            <h3 className="headerEx">กรอกข้อมูล : รายจ่าย</h3>
            <form className="form-control">
                <div>
                    <label>รายการ : </label>
                    <input type="text" value={newTodoEX} onChange={(e)=>setNewTodoEX(e.target.value)}/>

                    <label>หมวดหมู่ :</label>
                    <select 
                    className="select-category" 
                    value={newCategoryEX} 
                    onChange={(e)=>setNewCategoryEX(e.target.value)}>
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
                    <input type="number" value={newAmountEX} onChange={(e)=>setNewAmountEX(e.target.value)}/>

                    <label>ช่องทางขำระเงิน :</label>
                    <select 
                    className="select-payment" 
                    value={newPaymentEX} 
                    onChange={(e)=>setNewPaymentEX(e.target.value)}>
                        <option value=""></option>
                        <option value="เงินสด">เงินสด</option>
                        <option value="บัตรเครดิต">บัตรเครดิต</option>
                    </select>
                </div>
            </form>
            <button onClick={onClickDone} className="btn-done">บันทึกข้อมูล</button>
            <button onClick={() => props.setShowFormExpense(false)} className="btn-x">X</button>
        </>
    );
}

export default FormExpense