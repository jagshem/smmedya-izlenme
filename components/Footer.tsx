import Link from 'next/link'
import {
  FaInfoCircle,
  FaTruck,
  FaPhone,
  FaBox,
  FaBuilding,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa'
import { MdMail, MdLocalPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <p className="text-sm text-gray-500 text-center">
              © 2023 1948 Co. Tüm hakları saklıdır.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center">
            {menuItems.map((menuItem) => (
              <Link legacyBehavior href={menuItem.route} key={menuItem.label}>
                <a className="text-sm text-gray-500 hover:text-white px-3 py-2">
                  {menuItem.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center mb-4">
              <MdMail className="mr-1" size={18} />
              <p className="mr-4">iletisim@1948.com</p>
              <MdLocalPhone className="mr-1" size={18} />
              <p>+905527920260</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const menuItems = [
  {
    route: '#hakkimizda',
    label: 'Hakkımızda',
  },
  {
    route: '#hizmetler',
    label: 'Hizmetler',
  },
  {
    route: '#iletisim',
    label: 'İletişim',
  },
  {
    route: '#paketler',
    label: 'Paketler',
  },
  {
    route: '#diger-hizmetler',
    label: 'Diğer Hizmetler',
  },
]

export default Footer
