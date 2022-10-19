import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import { Input, Button } from "../elements";
import { MESSAGES } from "../utils/constants";
import * as auth from "../lib/api/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
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
    if (!validation.isSameValue(state.password, state.passwordConfirm)) {
      alert("비밀번호가 다릅니다");
      return false;
    }

    return true;
  };

  const isValid =
    state.password.length < 8 || state.password !== state.passwordConfirm;

  const onClickButton = async (e) => {
    e.preventDefault();
    if (isValidInputs()) {
      const { id, password } = state;
      const response = await auth.signUp({email: id, password: password});
      console.log(response);
      if(MESSAGES.CREATE_USER === response.statusText) {
        navigate("/");
      }
    }
  };
  
  return (
    <form style={{ padding: "16px" }}>
      <p>회원가입</p>
      <Input
        name="id"
        value={state.id}
        onChange={onChangeInput}
        placeholderText="아이디를"
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
      >
        비밀번호
      </Input>
      <div />
      <Input
        name="passwordConfirm"
        type="password"
        placeholderText="비밀번호를 다시"
        value={state.passwordConfirm}
        onChange={onChangeInput}
      >
        비밀번호 확인
      </Input>
      <div />
      <Button
        type="submit"
        disabled={isValid}
        onClickButton={onClickButton}
      >
        회원가입하기
      </Button>
    </form>
  )
}

export default SignUp