import { useReducer, useState } from "react";

const initialState = {
    value: "",
    isTouched: false,
};

const dispatchFunc = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { value: state.value, isTouched: true };
    }
    if (action.type === "RESET") {
        return { value: "", isTouched: false };
    }

    return initialState;
};
const useForm = (someFn) => {
    const [inputState, dispatch] = useReducer(dispatchFunc, initialState);

    const enteredNameIsValid = someFn(inputState.value);
    const enteredNameValidandTouched =
        !enteredNameIsValid && inputState.isTouched;

    const enterNameInputChangeHandler = (e) => {
        dispatch({ type: "INPUT", value: e.target.value });
    };

    const nameBlurHandler = () => {
        dispatch({ type: "BLUR" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        enteredValue: inputState.value,
        // isTouched,
        enteredNameIsValid,
        enteredNameValidandTouched,
        enterNameInputChangeHandler,
        nameBlurHandler,
        reset,
    };
};

export default useForm;
