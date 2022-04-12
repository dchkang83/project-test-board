const Login = ({ test1, test2 }) => {
  return (
    <main>
      {test1}
      <br />
      <input type="text" name="user_name" />
      <br />
      <input type="password" name="user_password" />
      <div>로그인</div>{test2}
    </main>
  )
};

export default Login;