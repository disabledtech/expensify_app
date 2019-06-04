import { login, logout } from "../../actions/auth";

test('Should create login action object.', () => {
    const uid = 'ateallyuniqueid'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should create logout action object.', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});


