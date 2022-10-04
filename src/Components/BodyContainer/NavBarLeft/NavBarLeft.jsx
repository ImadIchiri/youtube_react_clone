import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import NavBarLeftLinks from "./NavBarLeftLinks";
import NavBarLeftOne from "./NavBarLeftOne";
import NavBarLeftTwo from "./NavBarLeftTwo";
import NavBarLeftSubscriptions from "./NavBarLeftSubscriptions";
import NavBarLeftThree from "./NavBarLeftThree";
import NavBarLeftFour from "./NavBarLeftFour";
import NavBartLeftShortAside from "./NavBartLeftShortAside";

function NavBarLeft({ isNavBarLeftOpened }) {
  return (
    <>
      <aside
        className="navBarLeft"
        style={{
          display: isNavBarLeftOpened ? "block" : "none",
        }}
      >
        {/* Article #1 'navBarLeftOne' */}
        <NavBarLeftOne />

        {/* Article #2 'navBarLeftTwo' */}
        <NavBarLeftTwo />

        {/* Article #3 'Subscriptions' */}
        <NavBarLeftSubscriptions />

        {/* Article #4 'navBarLeftThree: Explor' */}
        <NavBarLeftThree />

        {/* Article #5 'navBarLeftFour' */}
        <NavBarLeftFour />

        {/* Links */}
        <NavBarLeftLinks />

        <p className="copyright">
          &copy; {new Date().getFullYear()} Google LLC
        </p>
      </aside>

      {!isNavBarLeftOpened && <NavBartLeftShortAside />}
    </>
  );
}

export default NavBarLeft;
