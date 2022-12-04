import { useState } from 'react';
import c from './Login.module.css';
import { IoCloseOutline } from 'react-icons/io5';

const Login = ({ loginOpen }) => {
  const [loginSelect, setLoginSelect] = useState(true);
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
          <form className={c.loginList}>
            <div className={c.loginInputStyle}>
              <input required type="text" id="login" className={c.loginInput} />
              <label className={c.loginlabel} htmlFor="login">
                Login <span>*</span>
              </label>
            </div>
            <div className={c.loginInputStyle}>
              <input
                required
                type="password"
                id="password"
                className={c.loginInput}
              />
              <label className={c.loginlabel} htmlFor="password">
                Parol <span>*</span>
              </label>
            </div>
            <button className={c.submitBtn}>Login orqali kirish</button>
          </form>
        )}
        {!loginSelect && (
          <form className={c.signinItem}>
            <div className={c.loginInputStyle}>
              <input required type="text" id="login" className={c.loginInput} />
              <label className={c.loginlabel} htmlFor="login">
                Username <span>*</span>
              </label>
            </div>
            <div className={c.loginInputStyle}>
              <input
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
                required
                type="password"
                id="password"
                className={c.loginInput}
              />
              <label className={c.loginlabel} htmlFor="password">
                Parol <span>*</span>
              </label>
            </div>
            <button className={c.submitBtn}>Login orqali kirish</button>
          </form>
        )}
      </div>
      <div onClick={() => loginOpen(false)} className={c.view}></div>
    </>
  );
};

export default Login;
