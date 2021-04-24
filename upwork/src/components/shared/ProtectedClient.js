import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedClient = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.token && user.userType === "client") {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedClient;
