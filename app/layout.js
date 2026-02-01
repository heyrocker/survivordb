import "./globals.css";
import { Outfit, Bebas_Neue } from "next/font/google"
import Survivant from 'next/font/local'

const survivant = Survivant({
  src: '../assets/fonts/survivant.ttf',
  variable: '--font-survivant'
})

const outfit = Outfit({
  subsets: ['latin'],
  display: "swap",
  variable: '--font-outfit'
})

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: "swap",
  variable: '--font-bebas-neue'
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body className={[outfit.variable, bebas_neue.variable, survivant.variable].join(' ')}>
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


