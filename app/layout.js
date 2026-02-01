import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <nav>
            <span className="title-text">Survivor<span className="title-highlight">DB</span></span>
            <ul className="main-nav">
              <li>Seasons</li>
              <li>Players</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}


