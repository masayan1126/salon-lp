import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";
import { push } from "connected-react-router";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
    },
    [setConfirmPassword]
  );

  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <input
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />
      <input
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <input
        fullWidth={true}
        label={"パスワード（半角英数字で6文字以上）"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <input
        fullWidth={true}
        label={"パスワードの再確認"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <button
          onClick={() =>
            dispatch(signUp(username, email, password, confirmPassword))
          }
        >
          アカウントを登録する
        </button>
        <div className="module-spacer--small" />
        <p className="u-text-small" onClick={() => dispatch(push("/signin"))}>
          アカウントをお持ちの方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignUp;
