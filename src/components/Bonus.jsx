import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

const Bonus = () => {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Bonus Component</h2>
      <h4>Total Points: {points}</h4>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </div>
  );
};

export default Bonus;
