// This is a React Router v6 app
import { Routes, Route } from "react-router-dom";
import OwnUserProfile from './OwnUserProfile';
import UserProfile from './UserProfile';

const Users = ({ test1, test2 }) => {
  return (
    <main>
      {test1}
      <br />
      <input type="text" name="user_name" />
      <br />
      <input type="password" name="user_password" />
      <div>로그인22</div>{test2}

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>

    </main>
  )
};

export default Users;