import { useState } from 'react';
import c from './Login.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import auth from '../../firebase/config';
const Login = ({ loginOpen }) => {
  const [loginSelect, setLoginSelect] = useState(true);
  const [checkUserCreate, setCheckUserCreate] = useState(false);
  const [checkUserLogin, setCheckUserLogin] = useState(false);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(mail, password).then((res) => {
      if (res.additionalUserInfo.isNewUser) {
        setCheckUserCreate(true);
      }
    });
  };
  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(mail, password)
      .then((res) => {
        if (!res.additionalUserInfo.isNewUser) {
          setCheckUserLogin(true);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className={c.login}>
        <div className={c.loginItem}>
          <div
            onClick={() => setLoginSelect(true)}
            className={
              loginSelect ? `${c.loginhero} ${c.active}` : `${c.loginhero}`
            }
          >
            <p>Kirish</p>
          </div>
          <div
            onClick={() => setLoginSelect(false)}
            className={
              loginSelect ? `${c.loginhero}` : `${c.loginhero}  ${c.active}`
            }
          >
            <p>Ro'yhatdan o'tish</p>
          </div>
          <div className={c.closeBtn}>
            <button onClick={() => loginOpen(false)}>
              <IoCloseOutline />
            </button>
          </div>
        </div>
        {loginSelect && (
          <form onSubmit={loginUser} className={c.loginList}>
            <div className={c.loginInputStyle}>
              <input
                required
                type="text"
                id="login"
                onChange={(e) => setMail(e.target.value)}
                className={c.loginInput}
              />
              <label className={c.loginlabel} htmlFor="login">
                Login <span>*</span>
              </label>
            </div>
            <div className={c.loginInputStyle}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                id="password"
                className={c.loginInput}
              />
              <label className={c.loginlabel} htmlFor="password">
                Parol <span>*</span>
              </label>
            </div>
            <button className={c.submitBtn}>
              {checkUserLogin ? '✅' : 'Login orqali kirish'}
            </button>
          </form>
        )}
        {!loginSelect && (
          <form onSubmit={signupUser} className={c.signinItem}>
            <div className={c.loginInputStyle}>
              <input required type="text" id="login" className={c.loginInput} />
              <label className={c.loginlabel} htmlFor="login">
                Username <span>*</span>
              </label>
            </div>
            <div className={c.loginInputStyle}>
              <input
                onChange={(e) => setMail(e.target.value)}
                required
                type="text"
                id="password"
                className={c.loginInput}
              />
              <label className={c.loginlabel} htmlFor="password">
                Email <span>*</span>
              </label>
            </div>
            <div className={c.loginInputStyle}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                id="password"
                className={c.loginInput}
              />
              <label className={c.loginlabel} htmlFor="password">
                Parol <span>*</span>
              </label>
            </div>
            <button className={c.submitBtn}>
              {checkUserCreate ? '✅' : 'Login orqali kirish'}
            </button>
          </form>
        )}
      </div>
      <div onClick={() => loginOpen(false)} className={c.view}></div>
    </>
  );
};

export default Login;
