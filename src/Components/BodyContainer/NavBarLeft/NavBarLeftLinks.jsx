import React from "react";

function NavBarLeftLinks() {
  return (
    <article className="links">
      <div className="navLinks">
        {[
          "About",
          "Press",
          "Copyright",
          "Contact us",
          "Creators",
          "Advertise",
          "Developers",
        ].map((item, index) => {
          return (
            <a key={index} href="somewher">
              {item}
            </a>
          );
        })}
      </div>
      <div className="youtubeLinks">
        {[
          "Terms",
          "Privacy",
          "Policy & Safety",
          "How Youtube works",
          "Test new features",
        ].map((item, index) => {
          return (
            <a key={index} href="somewher">
              {item}
            </a>
          );
        })}
      </div>
    </article>
  );
}

export default NavBarLeftLinks;
