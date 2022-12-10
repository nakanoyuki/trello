import { FC, memo, useState } from "react";
import { auth, provider } from "../../firebase";

import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Logout: FC = memo(() => {
  const [isAuth, setIsAuth] = useState(true);
  // グーグルログイン
  const history = useHistory();
  const logoutWithGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      history.push("/login");
    });
  };
  return (
    <div>
      <button onClick={logoutWithGoogle}>ログアウト</button>
    </div>
  );
});

export default Logout;
