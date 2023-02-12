import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops.........!</h1>
      <h4>Somthing went wrong !!</h4>
      <h2>{err.status + " " + err.statusText}</h2>
    </div>
  );
};

export default Error;
