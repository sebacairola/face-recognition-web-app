import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn){
        return (
            <nav className="flex-end">
                <p onClick={ ()=> onRouteChange('signin') } className="f3 link dim white underline pa3 pointer">Sing Out</p>
            </nav>
        );
    } else {
        return (
            <nav className="flex-end">
                <p onClick={ ()=>onRouteChange('register') } className="f3 link dim white underline pa3 pointer">Register</p>                
            </nav>
        );
    }
    
}

export default Navigation;