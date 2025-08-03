"use client";
import { useState } from "react";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

// export const social = [
//   {
//     id: 1,
//     url: "https://www.twitter.com",
//     icon: <FaFacebook />,
//   },
//   {
//     id: 2,
//     url: "https://www.twitter.com",
//     icon: <FaTwitter />,
//   },
//   {
//     id: 3,
//     url: "https://www.twitter.com",
//     icon: <FaLinkedin />,
//   },
//   {
//     id: 4,
//     url: "https://www.twitter.com",
//     icon: <FaBehance />,
//   },
// ];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleLinks}>
            cc
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
