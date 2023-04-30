import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (prevState, action) => {
  if(action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@")
    };
  }
  if(action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.includes("@")
    };
  }
  return {
    value: "",
    isValid: false
  };
};

const passwordReducer = (prevState, action) => {
  if(action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7
    };
  }
  if(action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7
    };
  }
  return {
    value: "",
    isValid: false
  };
};

const Login = (props) => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: undefined
  });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: "", 
    isValid: undefined
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(inputEmail);
  //     setFormIsValid(
  //       inputEmail.includes("@") && inputPassword.trim().length > 7
  //     );
  //   }, 3000);
    
  //   return () => {
  //     console.log("Cleaning");
  //     clearTimeout(timer);
  //   };
  // }, [inputEmail, inputPassword]);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      //console.log(inputEmail);
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 3000);
    
    return () => {
      console.log("Cleaning");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setInputEmail(event.target.value);
    dispatchEmailState({type: "USER_INPUT", value: event.target.value});

   /*  setFormIsValid(
      //event.target.value.includes("@") && inputPassword.trim().length > 7
      //event.target.value.includes("@") && inputPassword.trim().length > 7
      event.target.value.includes("@") && passwordState.isValid
    ); */
  };

  const passwordChangeHandler = (event) => {
    //setInputPassword(event.target.value);
    dispatchPasswordState({type: "USER_INPUT", value: event.target.value});

    /* setFormIsValid(
      //event.target.value.trim().length > 7 && inputEmail.includes("@")
      event.target.value.trim().length > 7 && emailState.isValid
    ); */
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(inputEmail.includes("@"));
    
    //setEmailIsValid(emailState.isValid);
    dispatchEmailState({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(inputPassword.trim().length > 7);
    dispatchPasswordState({type: "INPUT_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //props.onLogin(inputEmail, inputPassword);
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            //emailIsValid === false ? styles.invalid : ""
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            //value={inputEmail}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            //passwordIsValid === false ? styles.invalid : ""
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            //value={inputPassword}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
