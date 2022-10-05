import useForm from "../hooks/use-basicFormInput";

const BasicForm = (props) => {
    const {
        enteredValue: enteredName,
        // isTouched: enteredNameIsTouched,
        enteredNameIsValid,
        enteredNameValidandTouched,
        enterNameInputChangeHandler,
        nameBlurHandler,
        reset: nameReset,
    } = useForm((value) => value.trim() !== "");

    const {
        enteredValue: enteredLastName,
        // isTouched: enteredLastNameIsTouched,
        enteredNameIsValid: enteredLastNameIsValid,
        enteredNameValidandTouched: enteredLastNameValidAndTouched,
        enterNameInputChangeHandler: enterLastNameInputChangeHandler,
        nameBlurHandler: lastNameBlurHandler,
        reset: lastNameReset,
    } = useForm((value) => value.trim() !== "");

    const {
        enteredValue: enteredEmail,
        // isTouched: enteredEmailIsTouched,
        enteredNameIsValid: enteredEmailIsValid,
        enteredNameValidandTouched: enteredEmailValidandTouched,
        enterNameInputChangeHandler: enteredEmailInputChangeHandler,
        nameBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useForm((value) => value.trim().includes("@"));

    let allInputAreValid = false;
    if (enteredEmailIsValid && enteredLastNameIsValid && enteredNameIsValid) {
        allInputAreValid = true;
    }

    const submitFormChangeHandler = (e) => {
        e.preventDefault();

        // if (!enteredNameIsValid || !enteredLastNameIsValid) return;
        if (allInputAreValid) return;

        nameReset();
        lastNameReset();
        emailReset();
    };

    const nameInputClass = enteredNameValidandTouched
        ? "form-control invalid"
        : "form-control";

    const firstNameINputClass = enteredLastNameValidAndTouched
        ? "form-control invalid"
        : "form-control";

    const emailInputClass = enteredEmailValidandTouched
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submitFormChangeHandler}>
            <div className="control-group">
                <div className={nameInputClass}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        value={enteredName}
                        id="name"
                        onChange={enterNameInputChangeHandler}
                        onBlur={nameBlurHandler}
                    />
                    {enteredNameValidandTouched && (
                        <p className="error-text">Name is not valid</p>
                    )}
                </div>
                <div className={firstNameINputClass}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={enteredLastName}
                        onChange={enterLastNameInputChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {enteredLastNameValidAndTouched && (
                        <p className="error-text">Name invalid</p>
                    )}
                </div>
            </div>
            <div className={emailInputClass}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    value={enteredEmail}
                    onChange={enteredEmailInputChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {enteredEmailValidandTouched && (
                    <p className="error-text">Invalid email</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!allInputAreValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
