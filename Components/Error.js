import {useRouteError} from "react-router-dom";

function Error() {
    const errorInfo = useRouteError();
    console.log(errorInfo);
  return (
    <div>
        <h1>Oops! Something went wrong!</h1>
        <h1>{errorInfo.data}</h1>
    </div>
  );
}

export default Error;