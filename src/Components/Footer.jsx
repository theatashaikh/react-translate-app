import React from "react";

function Footer() {
  return (
    <footer>
      An Ata Shaikh Production <strong>React-Translate-App</strong> &copy;{" "}
      {new Date().getFullYear() === 2024 ? "" : "2021 - "}{" "}
      {new Date().getFullYear()}. All rights reserved
    </footer>
  );
}

export default Footer;
