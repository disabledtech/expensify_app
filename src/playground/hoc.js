// Higher order component (HOC) - A HOC component renders another component
// Goal: Reuse code, render hijacking, prop manip., abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>This is info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info.</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please authenticate. </p> }
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="These details." />, document.getElementById('App'));