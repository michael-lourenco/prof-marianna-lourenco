import { Sora } from "@next/font/google"
import Nav from "./Nav"
import Header from "./Header"
import TopLeftImg from "./TopLeftImg"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-[#303843] text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative min-h-screen overflow-y-auto`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      <main className="h-full">{children}</main>
    </div>
  )
}

export default Layout

