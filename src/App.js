import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import NavigationBottom from './components/navigation/NavigationBottom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Loading from './components/looading/Loading';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import CreateThread from './pages/CreateThread';
import LeaderboardsPage from './pages/LeaderboardsPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null || authUser === undefined) {
    return (
      <div className="app">
        <header>
          <Navigation />
        </header>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </main>
        <footer>
          <NavigationBottom />
        </footer>
      </div>
    );
  }
  return (
    <div className="app">
      <header>
        <Navigation authUser={authUser} />
      </header>
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<HomePage authUser={authUser} />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/new" element={<CreateThread />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </Routes>
      </main>
      <footer>
        <NavigationBottom authUser={authUser} signOut={onSignOut} />
      </footer>
    </div>
  );
}

export default App;
