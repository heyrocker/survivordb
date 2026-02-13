import "./globals.css";
import { Outfit, Bebas_Neue } from "next/font/google"
import Survivant from 'next/font/local'
import Link from "next/link"

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
          <Link href="/"><span className="title-text">Survivor<span className="title-highlight">DB</span></span></Link>
          <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
          <nav class="nav">
            <ul className="menu">
              <li><Link href="/seasons">Seasons</Link></li>
              <li><Link href="/players">Players</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}


