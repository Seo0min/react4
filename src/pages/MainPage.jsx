import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  return (
    <div>
      <h1>고객 정보</h1>
      {/* {mainContent?.map((item) => (
        <div key={item.id}>
          아이디: {item.id}
          <div>비밀번호: {item.password}</div>
        </div>
      ))} */}

      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default MainPage;
