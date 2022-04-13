import React, { lazy, Suspense } from 'react';
// This is a React Router v6 app
import { Routes, Route } from "react-router-dom";

import { MainLayout } from '~/views/layouts';

const Board = lazy(() => import('~/views/components/board/Board'));
const BoardList = lazy(() => import('~/views/components/board/BoardList'));
const BoardForm = lazy(() => import('~/views/components/board/BoardForm'));

const BoardRoute = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/board" element={<Board />} />
        <Route path="/boardList/:boardId" element={<BoardList />} />
        
        {/* <Route path="/:boardId" element={<Board />} /> */}
        {/* <Route path="/" element={<Board />}>
          <Route path=":redirectParam" component={Board} />
        </Route> */}

        <Route path="/form" element={<BoardForm />} />



        

      </Route>
      
    </Routes>

  </Suspense>
)

export default BoardRoute;