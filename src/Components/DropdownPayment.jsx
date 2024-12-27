import React from "react";
import "../CSS/DropdownPayment.css"


function DropdownPayment(props) {
    const {value, onChange} = props
    return (
        <>
            <div className="dropdownPayment">
                <h2 className="labelPayment">เลือกแสดงช่องทางชำระเงิน :</h2>
                <select className="select-Payment" value={value} onChange={onChange}>
                    <option value="allCash">ทั้งหมด</option>
                    <option value="cash">เงินสด</option>
                    <option value="creditCard">บัตรเครดิต</option>
                </select>
            </div>
        </>
    );
}

export default DropdownPayment