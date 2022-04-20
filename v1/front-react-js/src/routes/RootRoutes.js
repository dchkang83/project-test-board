// import React, { lazy, Suspense } from 'react';
// This is a React Router v6 app
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// import MainLayout from './components/template';
import { MainLayout, SimpleLayout } from '~/views/layouts';

import SignIn from '~/views/components/sign/SignIn';
// import Board from '../views/board/Board';
// import Board from 'components/views/board/Board';
import DashboardRoute from '~/routes/dashboard/DashboardRoute';
import BoardRoute from '~/routes/board/BoardRoute';

import Users from '~/views/components/test/Users';

const RootRoutes = () => (
  <Routes>
    <Route element={<SimpleLayout />}>
      <Route path="/" element={<Navigate replace to="/sign-in/" />} />
      <Route path="/sign-in/" element={<SignIn />} />
    </Route>

    <Route path="/dashboard/*" element={<DashboardRoute />} />
    <Route path="/test/*" element={<BoardRoute />} />


    {/* <Route path="/boardList/:boardId" element={<BoardList />} /> */}
    {/* <Route path="/boardList" element={<BoardList />}>
      <Route path=":redirectParam" component={BoardList} />
    </Route> */}
    

    <Route element={<MainLayout />}>
      <Route path="/users/*" element={<Users />} />
    </Route>

    <Route element={<div style={{ background: 'red' }} > <Outlet /> </div>}>
      <Route path="/test" element={<p>Login</p>} />
    </Route>


    {/* <Route element={<div style={{ background: 'blue' }} > <Outlet /> </div>}>
        <Route path="/login" element={<p>Login</p>} />
      </Route>

      <Route element={<div style={{ background: 'yellow' }} > <Outlet /> </div>}>
        <Route path="users/*" element={<Users />} />
      </Route> */}
  </Routes>

)

export default RootRoutes;