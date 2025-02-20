import Link from "next/link"

import { RiYoutubeLine, RiInstagramLine, RiWhatsappLine } from "react-icons/ri"

const Socials = () => {
  const phoneNumber = "5521964362490" // Replace with the actual phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.youtube.com/@profmariaNNalourenco"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={whatsappUrl}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://www.instagram.com/profmariannalourenco/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  )
}

export default Socials

