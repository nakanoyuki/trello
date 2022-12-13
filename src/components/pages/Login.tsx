import React, { FC, memo, useState } from "react";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
// import firebase from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import LoginButton from "../atoms/button/LoginButton";
import useAuth from "../../hooks/useAuth";

const Login: FC = memo(() => {
  const [isAuth, setIsAuth] = useState(false);
  // グーグルログイン
  const history = useHistory();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage["isAuth"] = true;

        setIsAuth(true);
        history.push("/home");
      })
      .catch((error) => {});
  };

  // メールログイン
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLoading = () => login(userId);
  return (
    <div>
      <h1>ログイン</h1>

      <input
        type="text"
        placeholder="1を入力すると入れます"
        id={userId}
        value={userId}
        required
        onChange={onChangeUserId}
      />
      <LoginButton
        disabled={userId === ""}
        loading={loading}
        onClick={onClickLoading}
      >
        ログイン
      </LoginButton>

      <button onClick={loginInWithGoogle}>Googleログイン</button>
    </div>
  );
});

export default Login;
