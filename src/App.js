
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import React, { useContext, Fragment } from "react";
import AuthContext from "./store/auth-context";

function App() {  
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
    {/* <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}
    > */}
      <MainHeader /* isAuthenticated={isLoggedIn} *//* onLogout={logoutHandler} */ />
      <main>
        {!ctx.isLoggedIn && <Login /* onLogin={loginHandler} */ />}
        {ctx.isLoggedIn && <Home /* onLogout={logoutHandler} */ />}
      </main>
    {/* </AuthContext.Provider> */}
    </Fragment>
  );
};

export default App;