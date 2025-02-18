import Image from "next/image"
import Link from "next/link"
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="w-full flex items-center px-16 xl:px-0 xl:h-[80px] lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image src={"/logo.png"} width={100} height={48} alt="" priority={true} />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header

