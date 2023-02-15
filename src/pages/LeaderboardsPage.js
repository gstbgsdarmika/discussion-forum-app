import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/leaderboard/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <section>
      <div className="board-page">
        <h2>Klasmen Pengguna Aktif</h2>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
    </section>
  );
}

export default LeaderboardsPage;
