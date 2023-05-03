import React, { useContext } from "react";

import styles from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const context = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );

  /* return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Log Out</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}      
    </AuthContext.Consumer>
  ); */
};

export default Navigation;