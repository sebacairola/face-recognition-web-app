import React from 'react';

const Navigation = ({ onRouteChange, navState }) => {
    if (navState === 'signout'){
        return (
            <nav className="flex-end">
                <p onClick={ ()=> onRouteChange('signin') } className="f3 link dim white underline pa3 pointer">Sing Out</p>
            </nav>
        );
    } else if( navState === 'register') {
        return (
            <nav className="flex-end">
                <p onClick={ ()=>onRouteChange('register') } className="f3 link dim white underline pa3 pointer">Register</p>                
            </nav>
        );
    } else if (navState === 'signin') {
        return (
            <nav className="flex-end">
                <p onClick={ ()=>onRouteChange('signin') } className="f3 link dim white underline pa3 pointer">Sign In</p>                
            </nav>
        );
    }
    
}

export default Navigation;