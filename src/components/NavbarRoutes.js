import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Landing from "./Landing/Index";

function NavbarRoutes() {
  useEffect(() => {
    document.title = "Home";
    return () => {};
  }, []);

  return (
    <div className="navbar">
      <NavLink to="/">
            {Landing}
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
