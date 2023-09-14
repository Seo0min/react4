import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { removeToken } from "../util/token";

function MainPage() {
  const navigate = useNavigate();

  const [mainContent, setMainContent] = useState([]);

  const mainData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_MOCK_URL}`
    );
    setMainContent(data);
  };

  useEffect(() => {
    // db로부터 값을 가져온다.
    mainData();
  }, []);

  const onLogoutHandler = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div>
      <h1>로그인 성공!</h1>
      <div>
        <button onClick={onLogoutHandler}>로그아웃</button>
      </div>
    </div>
  );
}

export default MainPage;
