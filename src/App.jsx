import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import DropdownPayment from './Components/DropdownPayment'
import ListIncome from './Components/ListIncome'
import ListExpense from './Components/ListExpense'
import FormIncome from './Components/FormIncome'
import FormExpense from './Components/FormExpense'

let count = 2;

function uniqueId() {
  count = count + 1;
  return count;
}

const INITIAL_TODO_INCOME = [
  {
    id: 1,
    todo: "เงินเดือน",
    amount: 35000,
    category: "บริการ",
    payment: "เงินสด"
  },
  {
    id: 2,
    todo: "ขายขนมครก",
    amount: 1500,
    category: "อาหาร",
    payment: "บัตรเครดิต"
  }
]

const INITIAL_TODO_EXPENCE = [
  {
    id: 1,
    todo: "ค่าน้ำมัน",
    amount: 4000,
    category: "เดินทาง",
    payment: "เงินสด"
  },
  {
    id: 2,
    todo: "ซื้อทีวี",
    amount: 12500,
    category: "ของใช้",
    payment: "บัตรเครดิต"
  }
]

function App() {
  const [showFormIncome, setShowFormIncome] = useState(false)
  const [showFormExpense, setShowFormExpense] = useState(false)

  const [todoIN, setTodoIN] = useState(INITIAL_TODO_INCOME)
  const [todoEX, setTodoEX] = useState(INITIAL_TODO_EXPENCE)

  const [showSelectPayment, setShowSelectPayment] = useState("allCash")

  const addNewIncome = (newTodo) => {
    const newTodoIN = {
      id: uniqueId(),
      ...newTodo
    }
    setTodoIN([newTodoIN, ...todoIN])
    setShowFormIncome(false)
  }

  const addNewExpence = (newTodo)=> {
    const newTodoEX = {
      id: uniqueId(),
      ...newTodo
    }

    setTodoEX([newTodoEX,...todoEX])
    setShowFormExpense(false)
  }


  const onClickDeleteIN = (id) => {
    const newfromDelete = todoIN.filter((e) => e.id !== id)
    setTodoIN(newfromDelete)
  }

  const onClickDeleteEX = (id) => {
    const newfromDelete = todoEX.filter((e) => e.id !== id)
    setTodoEX(newfromDelete)
  }

  const onClickEditIN = (id, todo) => {
    const newfromEdit = [...todoIN]
    const index = todoIN.findIndex((e) => e.id === id)

    newfromEdit[index] = { ...todo }
    setTodoIN(newfromEdit)
  }

  const onClickEditEX = (id, todo) => {
    const newfromEdit = [...todoEX]
    const index = todoEX.findIndex((e) => e.id === id)

    newfromEdit[index] = { ...todo }
    setTodoEX(newfromEdit)
  }
  return (
    <>
      <Header />
      {(showFormIncome == false && showFormExpense == false) &&
        <div className="btn-group">
          <button className="btn-income" onClick={() => setShowFormIncome(true)}><p>บันทึก</p><p>รายรับ</p></button>
          <button className="btn-expense" onClick={() => setShowFormExpense(true)}><p>บันทึก</p><p>รายจ่าย</p></button>
        </div>}

      {showFormIncome && <FormIncome setShowFormIncome={setShowFormIncome} addNewIncome={addNewIncome} />}
      {showFormExpense && <FormExpense setShowFormExpense={setShowFormExpense} addNewExpence={addNewExpence}/>}
      <hr />

      <DropdownPayment value={showSelectPayment} onChange={(e) => setShowSelectPayment(e.target.value)} />

      <div className="list-Container">
        <ListIncome
          todoIN={todoIN}
          showSelectPayment={showSelectPayment}
          onClickDeleteIN={onClickDeleteIN}
          onClickEditIN={onClickEditIN}
        />

        <ListExpense
          todoEX={todoEX}
          showSelectPayment={showSelectPayment}
          onClickDeleteEX={onClickDeleteEX}
          onClickEditEX={onClickEditEX}
        />
      </div>
    </>
  )
}

export default App
