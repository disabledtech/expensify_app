import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: "INCREMENT",
        incrementBy
    }
);

const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: "DECREMENT",
        decrementBy
    }

);

const reset = () => (
    {
        type: "RESET"
    }
);

const setCount = ({ count }) => (
    {
        type: "SET",
        count
    }   
);

// reducers 
// 1. Reducers are pure functions. Output detrmined solely by what is passed in, never outside data. They also never change outside data.
// 2. Never change state or action. Never.

const countReducer = (state = { count: 0 }, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 105 }));