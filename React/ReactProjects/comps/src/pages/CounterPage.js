// Commented lines are using useState rather than useReducer

// import { useState } from "react";
import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

// Commented lines below are used without Immer:
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count + 1
      // };
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count - 1
      // };
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: action.payload
      // };
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0
      // };
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
    // Community contention over the two below lines, either can be used:

    // throw new Error('Unexpected Action type ' + action.type);
    // return state;
  }

  // The below code was refactored with the above switch:

  // if (action.type === INCREMENT_COUNT) {
  // return {
  //   ...state,
  //   count: state.count + 1
  // };
  // }

  // if (action.type === DECREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count - 1
  //   };
  // }

  // if (action.type === SET_VALUE_TO_ADD) {
  // return {
  //   ...state,
  //   valueToAdd: action.payload
  // };
  // }

  // return state;
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // Below line is used without Immer:
  // const [state, dispatch] = useReducer(reducer), {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT
    });
  };

  const handleChange = (evt) => {
    const value = parseInt(evt.target.value) || 0;
    // setValueToAdd(value);

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);

    dispatch({
      type: ADD_VALUE_TO_COUNT
    });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
