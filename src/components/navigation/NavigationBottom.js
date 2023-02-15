import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { GoCommentDiscussion, GoGraph } from 'react-icons/go';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

function NavigationBottom({ authUser, signOut }) {
  const navigate = useNavigate();
  const onThread = () => {
    navigate('/');
  };
  const onLeaderboards = () => {
    navigate('/leaderboards');
  };
  const onLogin = () => {
    navigate('/login');
  };
  return (
    <div className="navigation-bottom">
      <nav className="navigation-bottom__list d-flex justify-content-evenly">
        <button type="button" className="navigation-item" onClick={onThread}>
          <div className="navigation-item__icon">
            <GoCommentDiscussion />
          </div>
          <p className="navigation-item__label">Threads</p>
        </button>
        <button type="button" className="navigation-item" onClick={onLeaderboards}>
          <div className="navigation-item__icon">
            <GoGraph />
          </div>
          <p className="navigation-item__label">Leaderboards</p>
        </button>
        {
          authUser === null || authUser === undefined ? (
            <button type="button" className="navigation-item" onClick={onLogin}>
              <div className="navigation-item__icon">
                <IoMdLogIn />
              </div>
              <p className="navigation-item__label">Login</p>
            </button>
          ) : (
            <button type="button" className="navigation-item" onClick={signOut}>
              <div className="navigation-item__icon">
                <IoMdLogOut />
              </div>
              <p className="navigation-item__label">Logout</p>
            </button>
          )
        }
      </nav>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
};

NavigationBottom.propTypes = {
  authUser: PropTypes.shape(userShape),
  signOut: PropTypes.func,
};

NavigationBottom.defaultProps = {
  authUser: null,
  signOut: null,
};

export default NavigationBottom;
