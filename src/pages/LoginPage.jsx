import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idOnChangeHandler = (e) => {
    setId(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginButtonHandler = (e) => {
    if (!id.length || !password.length) {
      return alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else {
      return alert(`${id}님 환영합니다!`);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      아이디
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={idOnChangeHandler}
      />
      비밀번호
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={pwOnChangeHandler}
      />
      <div>
        <button
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입 하기
        </button>
        <button
          onClick={() => {
            navigate("/main");
            loginButtonHandler();
          }}
        >
          로그인하기
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
