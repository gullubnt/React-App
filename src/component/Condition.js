const Condition = () => {
  // let isLogin = true;
  let isLogin = false;
  if (isLogin) {
    return (
      <div>
        <h1>POV U R LOGGED IN</h1>
        <button>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>POV U R LOGGED OUT</h1>
        <button>Log In</button>
      </div>
    );
  }
};

export default Condition;
