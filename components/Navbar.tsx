import Link from 'next/link'
import { useState } from 'react'
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
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { MdMail, MdLocalPhone } from 'react-icons/md'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="bg-gray-600 text-sm text-white flex items-center justify-start p-2 pl-8">
        <MdMail className="mr-1" size="18" />
        <p className="mr-4">iletisim@sosyalzone.com</p>
        <div className="border-r border-white h-4 mx-4"></div>
        <MdLocalPhone className="mr-1" size="18" />
        <p>+905527920260</p>
      </div>
      <header className="shadow-lg w-full mx-auto p-4 bg-white">
        <nav className="container mx-auto flex items-center justify-between py-2">
          <div className="logo">
            <Link legacyBehavior href="/">
              <a>
                <h1 className="text-2xl font-bold font-roboto text-center">
                  Logo
                </h1>
              </a>
            </Link>
          </div>
          <div className="hidden lg:block space-x-10">
            {menuItems.map((menuItem) => (
              <Link legacyBehavior href={menuItem.route} key={menuItem.label}>
                <a
                  className={`font-roboto max-w-sm text-[15.9px] font-bold leading-tight relative inline-block hover:text-red-600 py-2 ${
                    router.pathname === menuItem.route ? 'text-red-600' : ''
                  } link link-underline link-underline-black text-black smooth-text`}
                  onClick={closeMenu}
                >
                  {menuItem.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 pr-8">
            {/* Social media icons on the right */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-500 ease-in-out hover:scale-125"
            >
              <FaFacebookF color="#3b5998" size="24" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-500 ease-in-out hover:scale-125"
            >
              <FaInstagram color="#E1306C" size="24" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-500 ease-in-out hover:scale-125"
            >
              <FaTwitter color="#1DA1F2" size="24" />
            </a>
            <div className="relative">
              <button
                className="lg:hidden"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <FaBars color="#000" size="24" />
              </button>
              <button
                className={`absolute top-0 right-0 transform transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
                onClick={closeMenu}
                aria-label="Close Menu"
                style={{ zIndex: 999 }}
              >
                <FaTimes color="#000" size="24" />
              </button>
            </div>
          </div>
        </nav>
        {/* Modal */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: '-50%', zIndex: 998 }}
              animate={{ opacity: 1, y: '0' }}
              exit={{ opacity: 0, y: '-50%' }}
              className="fixed inset-0 bg-white flex justify-center items-center"
            >
              <div className="w-full max-w-sm p-8 bg-white">
                <ul className="mt-6 space-y-6">
                  {menuItems.map((menuItem, index) => (
                    <li
                      key={menuItem.label}
                      className={`transform transition-transform duration-500 ease-in-out delay-${
                        index + 1
                      } ${
                        isMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-full opacity-0'
                      }`}
                    >
                      <Link legacyBehavior href={menuItem.route}>
                        <a
                          className={`block font-bold text-lg text-center ${
                            router.pathname === menuItem.route
                              ? 'text-red-600'
                              : ''
                          }`}
                          onClick={closeMenu}
                        >
                          {menuItem.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

const menuItems = [
  {
    route: '#hakkimizda',
    label: 'Hakkımızda',
  },
  {
    route: '#sevisler',
    label: 'Sevisler',
  },
  { route: '#iletisim', label: 'İletişim' },
  { route: '#paketler', label: 'Paketler' },
  {
    route: '#diger-hizmetlerimiz',
    label: 'Diğer Hizmetlerimiz',
  },
]

export default Navbar
