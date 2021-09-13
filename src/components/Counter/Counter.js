import React, {useEffect} from 'react';
import './Counter.css';
import {useDispatch, useSelector} from "react-redux";
import {add, decrease, fetchCounter, increase, saveCounter, subtract} from "../../store/actions";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
  
    useEffect(() => {
      dispatch(fetchCounter());
    }, [dispatch]);
  
    const increaseCounter = () => {
      dispatch(increase());
      // dispatch(saveCounter());
    }
    const addCounter = () => dispatch(add(5));
    const decreaseCounter = () => dispatch(decrease());
    const minusCounter = () => dispatch(subtract(5));
  
    // const save = () => {
    //   dispatch(saveCounter(123));
    // }
  
    return (
      <div className="Counter">
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
        <button onClick={addCounter}>Increase by 5</button>
        <button onClick={minusCounter}>Decrease by 5</button>
      </div>
    );
  };
  
  export default Counter;
