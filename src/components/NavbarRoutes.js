import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavbarRoutes() {
  useEffect(() => {
    document.title = "Home";
    return () => {};
  }, []);

  return (
    <div className="navbar">
      <NavLink to="/">
            Home
      </NavLink>
      <NavLink to="/about">
            About
      </NavLink>
      <NavLink to="/donate">
            Donate
      </NavLink>
    </div>
  );
}

export default NavbarRoutes;

// return (
//   <div className="navbar">
//     <NavLink to="/">
//       {/* <Container
//         // add some styling using the M-UI library

//         maxWidth="xl"
//         sx={{ background: "#fff" }}
//       > */}
//         {/* <Button
//           variant="outlined"
//           // onClick={() => {
//           //   alert("clicked");
//           // }}
//           size="large"
//           startIcon={<HomeIcon />}
//         > */}
//           {Home}
//         {/* </Button> */}
//       {/* </Container> */}
//     </NavLink>
//   </div>
// );
// }
