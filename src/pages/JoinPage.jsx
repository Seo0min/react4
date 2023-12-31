import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "../util/validation";

function JoinPage() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idOnChangeHandler = (e) => {
    setId(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
    // 버튼 클릭 시 input에 들어있는 값(state)을 이용하여 db에 저장(post 요청)
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // 버튼 클릭 시 리프레시 방지
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
  
    const validationMessage = Validation(id, password);
  
    if (validationMessage) {
      alert(validationMessage);
      // 유효성 검사 실패 시 함수 종료
      return;
    }
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_MOCK_URL}register`,
        { id, password }
      );
      // 서버로 회원가입 요청을 보내고 응답을 기다리기
      console.log("회원가입 성공", response.data);
      alert("회원가입 완료");
      navigate("/");
    } catch (error) {
      console.log("회원가입 실패", error);
      alert(error.response.data.message);
    }
  };
  
  // 컴파일 단계의 에러들을 잡아줌 then catch의 포괄적

  return (
    <>
      <div>
        <h1>회원가입</h1>
        {/* 인풋영역 */}
        <form onSubmit={onSubmitHandler}>
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
            <button>회원가입 하기</button>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default JoinPage;
