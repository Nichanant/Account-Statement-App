import React, { useState } from "react";
import "../CSS/FormIncome.css"

function FormIncome(props) {
    const [newTodoIN, setNewTodoIN] = useState("")
    const [newCategoryIN, setNewCategoryIN] = useState("")
    const [newAmountIN, setNewAmountIN] = useState("")
    const [newPaymentIN, setNewPaymentIN] = useState("")

    const onClickDone = ()=> {
        const newTodo = {
            todo: newTodoIN,
            amount: Number(newAmountIN),
            category: newCategoryIN,
            payment: newPaymentIN
        }
        props.addNewIncome(newTodo)

        setNewTodoIN("")
        setNewAmountIN("")
        setNewCategoryIN("")
        setNewPaymentIN("")
    }
    
    return (
        <>
            <h3 className="headerIn">กรอกข้อมูล : รายรับ</h3>
            <form className="form-control">
                <div>
                    <label>รายการ : </label>
                    <input type="text"
                    onChange={(e)=>setNewTodoIN(e.target.value)}
                    value={newTodoIN}/>

                    <label>หมวดหมู่ :</label>
                    <select 
                    className="select-category"
                    onChange={(e)=>setNewCategoryIN(e.target.value)}
                    value={newCategoryIN}>
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
                    <input type="number" 
                    onChange={(e)=>setNewAmountIN(e.target.value)}
                    value={newAmountIN}/>

                    <label>ช่องทางขำระเงิน :</label>
                    <select 
                    className="select-payment" 
                    onChange={(e)=>setNewPaymentIN(e.target.value)}
                    value={newPaymentIN}>
                        <option value=""></option>
                        <option value="เงินสด">เงินสด</option>
                        <option value="บัตรเครดิต">บัตรเครดิต</option>
                    </select>
                </div>
            </form>
            <button className="btn-done" onClick={onClickDone}>บันทึกข้อมูล</button>
            <button onClick={()=>props.setShowFormIncome(false)} className="btn-x">X</button>
        </>
    );
}

export default FormIncome