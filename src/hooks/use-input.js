import { useReducer, useState } from "react";

const initialInputState = {
    value: "",
    isTouched: false,
};
// State=> prev state
// action=> task to perform in code
const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { value: state.value, isTouched: true };
    }
    if (action.type === "RESET") {
        return { value: "", isTouched: false };
    }

    return initialInputState;
};
const useInput = (validateValue) => {
    // inputState=>state manage by reducer
    // dispatch=>which allow you to dispatch "action"
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    // const [enteredValue, setEnteredValue] = useState("");
    // const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (e) => {
        dispatch({ type: "INPUT", value: e.target.value });
    };

    function inputBlurHandler(e) {
        dispatch({ type: "BLUR" });
    }

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
