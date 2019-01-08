import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import GetStarted from './components/getStarted/GetStarted';
import SignUp from './components/signUp/SignUp';
import Verify from './components/verify/Verfiy';
import TabNav from './components/navigator/TabNav';
import Onboarding from './components/onBoarding/onBoarding'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="slidePage" hideNavBar>
                    <Scene
                        key="slide"
                        component={Onboarding}
                        initial 
                        title="Slide"/>
                </Scene>    
                <Scene key="started">
                    <Scene
                        rightTitle="Add"
                        onRight={() => alert('Close')}
                        key="getStarted"
                        component={GetStarted}
                        title="Get Started"
                        />
                </Scene>
                <Scene key="auth">
                    <Scene 
                        key="signUp"
                        component={SignUp}
                        title="Sign Up" />
                </Scene>
                <Scene key="auth2">
                    <Scene 
                        key="verify"
                        component={Verify}
                        title="Verify" />
                </Scene>
                <Scene key="home">
                    <Scene 
                        key="Home"
                        component={TabNav}
                        title="Home" />
                </Scene>
                
                
            </Scene>
        </Router>
            
    ); 
};


export default RouterComponent;