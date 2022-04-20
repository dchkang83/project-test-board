import React, { lazy, Suspense } from 'react';
// This is a React Router v6 app
import { Routes, Route } from "react-router-dom";

import { MainLayout } from '~/views/layouts';

const Dashboard = lazy(() => import('~/views/components/dashboard/Dashboard'));
const Test = lazy(() => import('~/views/components/dashboard/Test'));

const DashboardRoute = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/Test" element={<Test />} />
    </Routes>
  </Suspense>
)

export default DashboardRoute;