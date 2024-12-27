import React from "react";

const styleHeader = {
    backgroundColor: "beige", 
    color: "rgb(0, 0, 120)",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "1.5rem"
}

function Header() {
    return (
        <h2 style={styleHeader}>บัญชีรายรับ-รายจ่าย</h2>
    );
}

export default Header