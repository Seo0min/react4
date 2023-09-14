import React from "react";

const Validation = ({ id, password }) => {
  const isValidId = (id) => {
    // 아이디 유효성 검사 로직
    const idRegex = /^[a-zA-Z0-9]+$/;
    return idRegex.test(id);
  };

  const isValidPassword = (password) => {
    // 비밀번호 유효성 검사 로직
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/;
    return passwordRegex.test(password);
  };

  if (!isValidId(id)) {
    alert("아이디는 영어와 숫자만 포함해야 합니다.");
    return;
  }

  if (!isValidPassword(password)) {
    alert("비밀번호는 영어, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.");
    return;
  }

  return null;
  // 통과 시 null 값 반환
};

export default Validation;
