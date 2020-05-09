import React, { useReducer, useCallback } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const AuthScreen = props => {
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    const inputChangeHandler = useCallback(
        (inputId, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputId
            });
        }, [dispatchFormState]);


    const singupHandler = () => {
        // dispatch(authActions.signup());
        console.log("UserName: " + formState.inputValues.email)
        console.log("Password: " + formState.inputValues.password)
        props.navigation.navigate('Shop');
};
return (
    <KeyboardAvoidingView
        style={styles.screen}
        behavior='padding'
        keyboardVerticalOffset={50}
    >
        <ImageBackground style={styles.background} source={require('../../assets/background.jpg')}>

            <Card style={styles.authContainer}>
                <ScrollView>
                    <Input
                        id='email'
                        label='E-Mail'
                        keyboardType='email-address'
                        required
                        email
                        autoCapitalize='none'
                        errorText='Please enter a valid email address.'
                        onInputChange={inputChangeHandler}
                        initialValue=''
                    />
                    <Input
                        id='password'
                        label='Password'
                        keyboardType='default'
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize='none'
                        errorText='Please enter a valid password.'
                        onInputChange={inputChangeHandler}
                        initialValue=''
                    />
                    <View style={styles.buttonContainer}>

                        <Button
                            title="Login"
                            color={Colors.login}
                            onPress={singupHandler}
                        />

                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Switch to Sign Up"
                            color={Colors.signup}
                            onPress={()=>{}}
                        />
                    </View>
                </ScrollView>
            </Card>
        </ImageBackground>
    </KeyboardAvoidingView >
);
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        width: '100%',
        maxHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: '50%',
        maxHeight: 400,
        padding: 20
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default AuthScreen;