import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faUser,
  faLock,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  registerAccountAction,
  loginAccountAction,
} from "../../behaviors/actions/user";
import {
  loginAccountReducer,
  registerAccountReducer,
} from "../../behaviors/reducers/user";
import { checkEmail, alertEmptyField } from "../../common/libs";
import { loginUser, registerUser } from "../../redux/apiRequest";
import { registerStart } from "../../redux/authSlice";

const LeftContainer = styled.div`
  width: 70%;
  height: 650px;
  background-image: url("https://images.unsplash.com/photo-1623367890230-f8d76baa81fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(245, 245, 245);
  border: 1px solid;
  padding: 10px;
  min-width: 650px;
  box-shadow: 10px 10px 10px;
`;
const RightContainer = styled.div`
  width: 100%;
  background-color: rgb(245, 245, 245);
  height: 672px;
  width: 50%;
`;
const H3Style = styled.h3`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  padding: 20px;
  font-size: 25px;
  margin: 0px;
  cursor: pointer;
`;

const InputStyle = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 20px;
  height: 60px;
  font-size: 20px;
  border-color: rgb(136, 129, 129);
  padding-left: 53px;
  outline: none;
  font-weight: lighter;
  margin-top: 30px;
`;

const FontAwesomeIconLeftStyle = styled.div`
  position: absolute;
  top: 46px;
  left: 27px;
  font-size: 19px;
`;
const FontAwesomeIconRightStyle = styled.div`
  position: absolute;
  top: 48px;
  right: 27px;
  font-size: 19px;
  cursor: pointer;
`;
const ButtonStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  border-radius: 20px;
  height: 60px;
  font-size: 20px;
  border-color: rgb(136, 129, 129);
  outline: none;
  margin-top: 40px;
  color: white;
  font-family: Quicksand, sans-serif;
  cursor: pointer;
  background-image: linear-gradient(
    261.29deg,
    rgb(218, 26, 26) 35.77%,
    rgba(24, 8, 8, 0.78) 98.05%
  );
`;
const DecorLineStyle = styled.div`
  display: flex;
  width: 90%;
  height: 8px;
  cursor: pointer;
`;

const LeftlineStyle = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.isLogin ? "rgb(133, 29, 29) " : "rgb(176, 168, 168)"};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const RightlineStyle = styled.div`
  width: 100%;
  background-color: ${(props) =>
    !props.isLogin ? "rgb(133, 29, 29) " : "rgb(176, 168, 168)"};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logo = require("../../assets/images/logo.png");

  const [isLogin, setIsLogin] = useState(true);
  const [isSetRemember, setIsSetRemember] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  
  const [account, setAccount] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, password, username } = account;

  // const loginAccountReducer = useSelector((state) => state.loginAccountReducer);
  // const { success, loadingLoginAccount, error } = loginAccountReducer;

  const handleClickMethodLogin = () => {
    setIsLogin((current) => !current);
  };
  const handleChangesetRemember = (e) => {
    setIsSetRemember((current) => !current);
  };
  const handleClickVisiblePassword = () => {
    setIsVisiblePassword((current) => !current);
  };

  const handleOnChangeInfoAccount = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickSubmit = (e ) => {
    e.preventDefault()
    if (isLogin) {
      if (!username  || !password) {
        alertEmptyField();
        return;
      }
      const User = {
        email:username,
        password:password
      }
      loginUser(User,dispatch,navigate)
      // dispatch(loginAccountAction(username, password));
    } else {
      if (!username || !email || !password) {
        alertEmptyField();
        return;
      }
      if (!checkEmail(email)) {
        return;
      }
      const newUser = {
        email:email,
        username:username,
        password:password
      }
      registerUser(newUser,dispatch,navigate)

      // dispatch(registerAccountAction(email, username, password));
    }
  };

  // useEffect(() =>{
  //   if(success){
  //     window.location.replace('/home')
  //   }
  // }, [success])

  return (
    <div
      className="container"
      style={{ background: "linear-gradient(to right, #dd1818, #333333)" }}
    >
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "40px",
        }}
      >
        <LeftContainer className="left"></LeftContainer>
        <RightContainer className="right">
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "5px 50px 25px 50px",
              minWidth: "650px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "10px 10px 10px",
            }}
          >
            <h2
              className="header-login"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "35px",
              }}
            >
              <img
                src={Logo}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "40%",
                  cursor: "pointer",
                }}
              ></img>
            </h2>

            <div
              className="method-login-titles"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <div>
                <H3Style onClick={handleClickMethodLogin}>Đăng Nhập</H3Style>
              </div>
              <div>
                <H3Style onClick={handleClickMethodLogin}>Đăng Ký</H3Style>
              </div>
            </div>
            <DecorLineStyle>
              <LeftlineStyle
                isLogin={isLogin}
                onClick={handleClickMethodLogin}
              ></LeftlineStyle>
              <RightlineStyle
                isLogin={isLogin}
                onClick={handleClickMethodLogin}
              ></RightlineStyle>
            </DecorLineStyle>
            <form
              className="input-field"
              style={{ marginTop: "10px", width: "100%" }}
            >
              <div style={{ position: "relative" }}>
                <FontAwesomeIconLeftStyle>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </FontAwesomeIconLeftStyle>
                <InputStyle
                  placeholder="Tài khoản của bạn"
                  value={username}
                  name="username"
                  onChange={handleOnChangeInfoAccount}
                ></InputStyle>
              </div>

              {!isLogin && (
                <div style={{ position: "relative" }}>
                  <FontAwesomeIconLeftStyle>
                    <FontAwesomeIcon
                      icon={!isLogin ? faAt : faUser}
                    ></FontAwesomeIcon>
                  </FontAwesomeIconLeftStyle>
                  <InputStyle
                    placeholder={"Email đăng ký"}
                    value={email}
                    name="email"
                    onChange={handleOnChangeInfoAccount}
                  ></InputStyle>
                </div>
              )}
              <div style={{ position: "relative" }}>
                <FontAwesomeIconLeftStyle>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </FontAwesomeIconLeftStyle>
                <InputStyle
                  placeholder="Mật khẩu"
                  type={!isVisiblePassword ? "password" :"text"}
                  value={password}
                  name="password"
                  onChange={handleOnChangeInfoAccount}
                ></InputStyle>
                {isVisiblePassword ? (
                  <FontAwesomeIconRightStyle>
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={handleClickVisiblePassword}
                    ></FontAwesomeIcon>
                  </FontAwesomeIconRightStyle>
                ) : (
                  <FontAwesomeIconRightStyle>
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={handleClickVisiblePassword}
                    ></FontAwesomeIcon>
                  </FontAwesomeIconRightStyle>
                )}
              </div>

              <ButtonStyle onClick={(e) => handleClickSubmit(e)}>
                {isLogin ? "Đăng Nhập" : "Đăng ký"}
              </ButtonStyle>
              <div
                className="post-footer-container"
                style={{
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "space-around",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                {isLogin && (
                  <div style={{ display: "flex", gap: "70px" }}>
                    <div
                      className="remembering"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        alignItems: "center",
                        lineHeight: "13px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isSetRemember}
                        style={{
                          width: "28px",
                          height: "28px",
                          cursor: "pointer",
                          border: "2px solid black",
                        }}
                        onChange={handleChangesetRemember}
                      ></input>

                      <span>Ghi nhớ mật khẩu</span>
                    </div>
                    <a
                      className="lost-password"
                      href="/"
                      style={{
                        lineHeight: "1.7",
                        textDecoration: "none",
                        color: "#891010",
                        fontWeight: "500",
                      }}
                    >
                      Quên mật khẩu ?
                    </a>
                  </div>
                )}
              </div>
            </form>
          </div>
        </RightContainer>
      </div>
    </div>
  );
}
