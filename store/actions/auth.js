export const SIGNUP = 'SIGNUP';

export const signup = () => {
    return async dispatch => {
        console.log('in auth email: ' + email);
        console.log('in auth password: ' + password);
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAplQ2YS6Dc5hTBJpFxGnPr1Vl4Ky2ojJk',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'abcabc@abc.com',
                    password: 'password',
                    returnSecureToken: true
                })
            });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        Console.log(resData);
        dispatch({ type: SIGNUP });
    };
};

