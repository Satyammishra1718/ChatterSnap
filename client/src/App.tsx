import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spin from "./components/CommonComponents/Spin/Spin";
import LayoutLoader from "./layout/LayoutLoader";

const Home = lazy(() => import("./views/Home/Home"));
const Login = lazy(() => import("./views/Login/Login"));
const Register = lazy(() => import("./views/Register/Register"));
const Chat = lazy(() => import("./views/Chat/Chat"));
const GroupManagement = lazy(
  () => import("./views/GroupManagement/GroupManagement")
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LayoutLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spin />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <Suspense fallback={<LayoutLoader />}>
              <Chat />
            </Suspense>
          }
        />
        <Route
          path="/groups"
          element={
            <Suspense fallback={<LayoutLoader />}>
              <GroupManagement />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Spin />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
