import authReducer from '../../reducers/auth';

test('Should set the auth state to supplied uid', () => {
    const uid = 'auniqueid';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test('Should set the auth state to empty', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'something' }, action);
    expect(state).toEqual({});
});

