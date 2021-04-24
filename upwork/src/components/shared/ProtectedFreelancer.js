import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedFreelancer = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.token && user.userType === "freelancer") {
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

export default ProtectedFreelancer;
