import React from 'react';
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

const AuthScreen = props => {
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
                            onInputChange={() => { }}
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
                            onInputChange={() => { }}
                            initialValue=''
                        />
                        <View style={styles.buttonContainer}>

                            <Button
                                title="Login"
                                color={Colors.login}
                                onPress={() => { }}
                            />

                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Switch to Sign Up"
                                color={Colors.signup}
                                onPress={() => {

                                }}
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