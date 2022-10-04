import React, { useEffect, useState } from "react";
import Avatar from "../../images/Avatar.jpg";
import Logo from "../../images/YouTube-Logo-Light.png";
import { FaBars, FaSearch, FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import useWindowSize from "../../Hooks/useWindowSize";
import UploadVideoBtn from "./UploadVideoBtn";
import NotificationsBtn from "./NotificationsBtn";

function Header({ isNavBarLeftOpened, setIsNavBarLeftOpened }) {
  const [searchValue, setSearchValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const { width } = useWindowSize();
  const [formIsVisible, setFormIsVisible] = useState(() => {
    return window.innerWidth > 540;
  });
  const [isVideoNavOpened, setIsVideoNavOpened] = useState(false);
  const [isNotificationsOpened, setIsNotificationsOpened] = useState(false);

  useEffect(() => {
    setFormIsVisible(window.innerWidth > 540);
  }, [width]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    e.target.value ? setIsInputEmpty(false) : setIsInputEmpty(true);
  };

  const handleDelete = () => {
    setSearchValue("");
    setIsInputEmpty(true);
  };

  const handleShowForm = () => {
    setIsVideoNavOpened(false);
    setIsNotificationsOpened(false);
    setFormIsVisible(true);
  };

  return (
    <div className="Header">
      <div className="container">
        <div className="leftSide">
          <button
            className="toggleMenu"
            onClick={() => setIsNavBarLeftOpened(!isNavBarLeftOpened)}
          >
            <FaBars />
          </button>
          <a href="/" style={{ color: "white" }}>
            <img
              src={Logo}
              alt="Youtube Logo"
              className="Logo"
              title="YouTube Home"
            />
          </a>
        </div>

        {formIsVisible && (
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-input">Search:</label>
            <div className="inputHolder">
              {!(width > 540) && formIsVisible && (
                <button
                  type="button"
                  className="arrowLeft"
                  onClick={() => setFormIsVisible(false)}
                >
                  <FaArrowLeft title="Close" />
                </button>
              )}
              <input
                id="search-input"
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => handleSearch(e)}
              />
              <button
                style={{ display: isInputEmpty ? "none" : "grid" }}
                type="button"
                className="Delete"
                title="Delete"
                onClick={() => handleDelete()}
              >
                <MdOutlineClose />
              </button>
              <button className="searchIcon" type="submit" itle="Search">
                <FaSearch />
              </button>
            </div>
          </form>
        )}

        <div className="rightSide">
          {!(width > 540) && (
            <button id="openSearch" title="Search" onClick={handleShowForm}>
              <FaSearch />
            </button>
          )}
          <UploadVideoBtn
            isVideoNavOpened={isVideoNavOpened}
            setIsVideoNavOpened={setIsVideoNavOpened}
            setIsNotificationsOpened={setIsNotificationsOpened}
          />
          <NotificationsBtn
            isNotificationsOpened={isNotificationsOpened}
            setIsNotificationsOpened={setIsNotificationsOpened}
            setIsVideoNavOpened={setIsVideoNavOpened}
          />
          <div className="Avatar">
            <img src={Avatar} alt="User Profile Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
