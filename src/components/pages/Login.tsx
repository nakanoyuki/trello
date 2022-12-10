import { FC, memo, useState } from "react";
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

const Login: FC = memo(() => {
  const [isAuth, setIsAuth] = useState(false);
  // グーグルログイン
  const history = useHistory();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage["isAuth"] = true;

        setIsAuth(true);
        history.push("/");
      })
      .catch((error) => {});
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          required
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          required
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          required
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={loginInWithGoogle}>Googleログイン</button>
    </div>
  );
});

export default Login;
