import React from 'react';
import {Scene, Router, Drawer} from 'react-native-router-flux';

import GetStarted from './components/getStarted/GetStarted';
import SignUp from './components/signUp/SignUp';
import Verify from './components/verify/Verfiy';
import TabNav from './components/navigator/TabNav';
import SideMenu from './components/sideMenu/SideMenu'
import Onboarding from './components/onBoarding/onBoarding'
import sidebarButton from './components/sideMenu/sidebarButton/sidebarButton'

import PaymentMethod from './components/payment/PaymentMethod'
import CreditPay from './components/payment/paymentMethod/CreditPay'
import BackButton from './components/sideMenu/backButton/BackButton'
import CarouselMy from './components/carousel/Carousel'

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
                        renderLeftButton={sidebarButton}
                        title="Car Park" />
                </Scene>
                <Scene key="payMethod">
                    
                    <Scene 
                        key="pay"
                        component={PaymentMethod}
                        renderLeftButton={BackButton}
                        title="Payment Method" />
                    <Scene 
                        key="credit"
                        component={CreditPay}
                         leftButtonImage={BackButton}
                        title="Visa / Master Card" />
                </Scene>
                <Scene key="car">
                    <Scene 
                        key="carMethod"
                        component={CarouselMy}
                        renderLeftButton={BackButton}
                        title="Car Park" />
                </Scene>
                <Scene key="drawer">
                    <Drawer
                        hideNavBar
                        key="drawerMenu"
                        ref="navigation"
                        component={SideMenu}
                        righ
                    >
                    </Drawer>
                </Scene>
                
                
            </Scene>
            
        </Router>
            
    ); 
};


export default RouterComponent;

