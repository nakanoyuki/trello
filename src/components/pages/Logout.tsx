import { FC, memo, useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Logout: FC = memo(() => {
  const [isAuth, setIsAuth] = useState(true);
  // グーグルログイン
  const history = useHistory();
  const logoutWithGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      history.push("/");
    });
  };
  return (
    <SLogout>
      <button onClick={logoutWithGoogle}>ログアウト</button>
    </SLogout>
  );
});

const SLogout = styled.div`
  padding: 20vh;
`;

export default Logout;
