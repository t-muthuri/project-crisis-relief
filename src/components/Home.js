import { React, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Container } from "@mui/material";

function Home() {

    useEffect(() => {
        document.title = "Home";
        return () => {};
      }, []);

  return (
    <div>
        <h1>Home Page</h1>
    </div>
  );
}

export default Home;