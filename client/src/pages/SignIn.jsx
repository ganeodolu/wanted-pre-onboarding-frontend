import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import { Input, Button } from "../elements";
import * as auth from "../lib/api/auth";
import { MESSAGES } from "../utils/constants";

const SignIn = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    password: "",
  });
  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const isValidInputs = () => {
    if (!validation.textLength(state.id, 1)) {
      alert("아이디가 없습니다");
      return false;
    }
    if (!validation.textLength(state.password, 8)) {
      alert("비밀번호는 최소 8자이상입니다");
      return false;
    }
    if (!validation.email(state.id)) {
      alert("비밀번호 형식이 맞지 않습니다");
      return false;
    }

    return true;
  };
  const onClickButton = async (e) => {
    e.preventDefault();
    if (isValidInputs()) {
      const { id, password } = state;
      const response = await auth.signIn({email: id, password: password});
      if(MESSAGES.OK === response.statusText) {
        navigate("/todo");
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isValidInputs()) {
      const { id, password } = state;
      const response = await auth.signIn({email: id, password: password});
      console.log(response);
      if(MESSAGES.OK === response.statusText) {
        navigate("/todo");
      }
    }
  };

  useEffect(() => {
    const userToken = localStorage.getItem('user');
    if(userToken){
      navigate("/todo");
    }
  }, [])

  return (
    <div style = {{ padding: "16px" }}>
      <p>로그인</p>
      <Input
        name="id"
        placeholderText="아이디를"
        value={state.id}
        onChange={onChangeInput}
      >
        아이디
      </Input>
      <div />
      <Input
        name="password"
        type="password"
        placeholderText="비밀번호를"
        value={state.password}
        onChange={onChangeInput}
        onSubmit={onSubmit}
      >
        비밀번호
      </Input>
      <div />
      <Button
        type="submit"
        // width="80vw"
        onClickButton={onClickButton}
      >
        로그인하기
      </Button>
    </div>
  )
}

export default SignIn