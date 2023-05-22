import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const MainScreen = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="text-center">
              <h1 className="lg:text-3xl text-2xl text-red-600 font-bold mb-4">
                YouTube Videolarınız
                <p className="rounded-full lg:text-4xl text-3xl font-bold text-red-600 py-2 px-4 inline-block">
                  1948 Medya ile Milyonlara Ulaşıyor
                </p>
              </h1>
            </div>
            <div className="mt-8 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl p-4 text-white text-center">
              <p className="lg:text-lg text-base font-semibold leading-normal">
                Türkiye'nin en kapsamlı YouTube Reklam Ajansı olarak 2007
                yılından bu yana YouTube hizmeti vermekte, yüzlerce sanatçı,
                prodüksiyon şirketi ve reklam ajansları ile sorunsuz çalışmalara
                imza atmış bulunmaktayız.
              </p>
            </div>
            <div className="mt-8 text-center">
              <div className="flex justify-center">
                {/* Button */}
                <button className="bg-white hover:bg-red-500 text-red-500 hover:text-white py-3 px-5 rounded-full flex items-center transition-colors duration-500">
                  <span className="font-semibold">Bize</span>
                  <span className="ml-1 font-bold">Ulaşın</span>
                  <span className="flex items-center justify-center bg-red-500 rounded-full w-6 h-6 ml-2">
                    <FaArrowRight className="text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <Image
              src="/images/youtube.png"
              alt="Sağ Taraf Icon"
              className="max-w-[400px] lg:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
