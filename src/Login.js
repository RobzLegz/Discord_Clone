import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/905px-Discord_logo.svg.png" alt="discord logo"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
