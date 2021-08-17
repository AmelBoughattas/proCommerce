import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateAdminRouter = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.auth);
    return (
        <Route
            {...rest}
            render={(props) =>
                auth.isAuth && auth.user.role==="admin" ?    <Component {...props} /> :<Redirect to="/login" />
            }
        /> 
    );
};

export default PrivateAdminRouter;