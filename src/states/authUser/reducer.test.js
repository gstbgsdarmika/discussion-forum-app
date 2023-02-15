/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by SET_AUTH_USER
 *  - should return the authUser when given by UNSET_AUTH_USER
 *
*/

import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = authUserReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by SET_AUTH_USER action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'user-1',
          name: 'User Test 1',
          email: 'user1example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };
    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER', () => {
    // arrange
    const initialState = {
      id: 'user-1',
      name: 'User Test 1',
      email: 'user1example.com',
      avatar: 'https://generated-image-url.jpg',
    };

    const action = {
      type: 'UNSET_AUTH_USER',
      payload: {
        authUser: null,
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });
});
