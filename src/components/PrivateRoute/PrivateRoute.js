import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className="mt-5 pt-5">
            <Spinner animation="border" variant="primary" />
        </div>
    }

    return (
        <Route
            {...rest}
           render = {({ location }) =>
            user.email ? 
            children
            :
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
              }}
            >
            </Redirect>
        } 
        >
        </Route>
    );
};

export default PrivateRoute;