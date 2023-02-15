/**
 * test scenario for asyncReciveLeaderboards
 *
 * - asyncReciveLeaderboards function
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncLeaderboard, receiveLeaderboardsActionCreator } from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'user-1',
      name: 'User Test 1',
      email: 'user1example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'user-2',
      name: 'User Test 2',
      email: 'user2example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReciveLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllleaderBoards = api.getAllleaderBoards;
  });

  afterEach(() => {
    // restore original implentation
    api.getAllleaderBoards = api._getAllleaderBoards;

    // delete backup
    delete api._getAllleaderBoards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllleaderBoards = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch with jest
    const dispatch = jest.fn();

    // action
    await asyncLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub
    api.getAllleaderBoards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch with vitest
    const dispatch = jest.fn();
    // mock alert with vitest
    window.alert = jest.fn();

    // action
    await asyncLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
