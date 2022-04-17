import * as React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <div>barra sony</div>
        <nav>
          <ul>
            <li>Games</li>
            <li>Hardware</li>
            <li>Services</li>
            <li>News</li>
            <li>Store</li>
            <li>Assistence</li>
          </ul>

          <div>
            <a>Sign In</a>
            <span>search</span>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
