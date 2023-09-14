import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../util/token";
import { setToken } from "../util/token";
import Validation from "../util/validation";

function LoginPage() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/main");
    }
  }, []);

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idOnChangeHandler = (e) => {
    setId(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const checkUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_MOCK_URL}user`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data.message, response);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  const onLoginSubmitHandler = async (e) => {
    e.preventDefault();

    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const validationMessage = Validation(id, password);

    if (validationMessage) {
      alert(validationMessage);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_MOCK_URL}login`,
        { id, password }
      );
      console.log(response.statusText, response);

      if (response.status === 201) {
        setToken(response.data.token);
        checkUser();
        navigate("/");
      }
      setId("");
      setPassword("");

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
