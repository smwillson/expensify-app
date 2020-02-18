import React from 'react';
import ReactDOM from 'react-dom';

//Wrapped Component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>

    </div>
);

//higher order component

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info, please dont share!</p>}
            <WrappedComponent {...props} />
        </div>

    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view this info!</p>}

        </div>

    );
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false}info="Sama Mushtaq" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Sama Mushtaq" />, document.getElementById('app'));