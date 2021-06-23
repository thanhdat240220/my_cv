import React, { useState } from "react";
import Routers from "./Router";

function App(): React.ReactElement {
  const [connection, setConnection] = useState({
    status: true,
    message: "Retry connecting",
  });
  window.addEventListener("online", () => {
    setConnection({
      status: true,
      message: "Connected",
    });
  });
  window.addEventListener("offline", () => {
    setConnection({
      status: false,
      message: "Retry connecting",
    });
  });

  return (
    <>
      {!connection && <div className="try-connection"></div>}
      <Routers></Routers>
    </>
  );
}

export default App;
