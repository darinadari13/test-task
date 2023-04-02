import { Routes, Route, useLocation } from "react-router-dom";
import styles from './App.module.scss';
import Layout from "../Layout";
import HomePage from "../../pages/HomePage/HomePage";
import { ABOUT_US_PATH, EXPLORE_PATH, HELP_PATH, RECOMENDATION_PATH } from "../../data/const";

const FakeRouteComponent = () => {
  const location = useLocation()

  return <div className={styles.fakeRouteComponent}>{location.pathname}</div>
}

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path={RECOMENDATION_PATH} element={<FakeRouteComponent />} />
        <Route path={EXPLORE_PATH} element={<FakeRouteComponent />} />
        <Route path={HELP_PATH} element={<FakeRouteComponent />} />
        <Route path={ABOUT_US_PATH} element={<FakeRouteComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
