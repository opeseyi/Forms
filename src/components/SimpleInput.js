// import { useEffect, useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: input,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.trim().includes("@"));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const submitButtonHandler = (e) => {
        e.preventDefault();

        if (!enteredNameIsValid) {
            return;
        }

        resetNameInput();
        resetEmailInput();
    };

    const nameINputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailINputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submitButtonHandler}>
            <div className={nameINputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={input}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must be empty</p>
                )}
            </div>
            <div className={emailINputClasses}>
                <label htmlFor="name">Your Email</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">Email is incorrect</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
