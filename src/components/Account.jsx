import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserById,
} from "../slices/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);
  // const [decValue, setDecValue] = useState(0);

  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Account Component</h2>
      <h4>
        Amount:{" "}
        {account.pending
          ? "Loading..."
          : account.error
          ? account.error.message
          : account.amount}
      </h4>
      <h4>Points: {points} </h4>
      <br />
      <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
      <button onClick={() => dispatch(decrement())}>decrement -</button>{" "}
      <input type="number" onChange={(e) => setValue(e.target.value)}></input>{" "}
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment by {value}
      </button>{" "}
      {/* 
        <input
        type="number"
        onChange={(e) => setDecValue(e.target.value)}
       ></input>{" "}
       <button onClick={() => dispatch()}>decrement by {decValue}</button>{" "}
       <button onClick={() => dispatch()}>Init User</button> 
      */}
      <button onClick={() => dispatch(getUserById(1))}>init User</button>
    </div>
  );
};

export default Account;
