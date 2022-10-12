import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { selectTheme } from "../../features/theme/themeSlice";
import LoadingPage from "../LoadingPage";

import "./homePage.css";

const MealsPage = lazy(() => import("../mealsPage/mealsMain"));
const SideMenu = lazy(() => import("../../components/SideMenu/sideMenu"));
const NotFoundPage = lazy(() => import("../404page/404page"));
const SchoolHomePage = lazy(() => import("../SchoolHomePage"));
const EAsistentPage = lazy(() => import("../eAsistentPage"));
const ArnesUcilnice = lazy(() => import("../ArnesUcilnice"));

const HomePage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={`${theme} homePage`}>
      <SideMenu />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<SchoolHomePage />} />
          <Route path="/malica" element={<MealsPage />} />
          <Route path="/easistent" element={<EAsistentPage />} />
          <Route path="/arnes-ucilnice" element={<ArnesUcilnice />} />
          <Route path="/prijava" element={<Navigate to={"/"} />} />
          <Route path="/domov" element={<Navigate to={"/"} />} />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default HomePage;
