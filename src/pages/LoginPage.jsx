import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const onLoginSubmitHandler = async (e) => {
    e.preventDefault();

    if (!id.length || !password.length) {
      return alert("아이디와 비밀번호를 모두 입력해주세요!");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_MOCK_URL}login`,
        { id, password }
      );
      // 서버로 회원가입 요청을 보내고 응답을 기다리기
      console.log("로그인 성공", response.data);
      alert(`${id}님 환영합니다!`);
      navigate("/main");
    } catch (error) {
      console.log("로그인 실패", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onLoginSubmitHandler}>
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
          <button>로그인하기</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
