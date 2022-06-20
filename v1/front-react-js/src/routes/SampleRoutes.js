import React, { lazy, Suspense } from 'react';
// This is a React Router v6 app
import { Routes, Route } from "react-router-dom";

import { MainLayout } from '~/views/layouts';

const SampleBoardList = lazy(() => import('~/views/components/sample/board/SampleBoardList'));
const SampleBoardForm = lazy(() => import('~/views/components/sample/board/SampleBoardForm'));

const SampleRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/lists" element={<SampleBoardList />} />
        <Route path="/lists/register" element={<SampleBoardForm />} />
        <Route path="/lists/:boardId" element={<SampleBoardForm />} />
      </Route>      
    </Routes>
  </Suspense>
)

export default SampleRoutes;