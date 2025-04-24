import Image from "next/image";
import { FaCheck, FaLightbulb, FaCode, FaClock, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center text-white p-8 bg-[#061621]">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Yazılım Geliştirme Webinarı
            </h1>
            <p className="text-xl text-white/90">
              Modern web teknolojileri ve en iyi pratikler hakkında bilgi edinin.
            </p>
            <div className="countdown-card bg-white/10 backdrop-blur-sm">
              <div className="text-center">
                <span className="text-2xl font-bold">24</span>
                <span className="text-sm">Saat</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold">45</span>
                <span className="text-sm">Dakika</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold">30</span>
                <span className="text-sm">Saniye</span>
              </div>
            </div>
            <button className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-gray-900">
              Hemen Kaydol
            </button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/developer-illustration.svg"
              alt="Developer Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#061621]">
        <div className="container mx-auto max-w-6xl px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Neler Öğreneceksiniz?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="benefit-item">
              <FaCode className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Modern Web Teknolojileri</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  En son web geliştirme trendleri ve teknolojileri
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <FaLightbulb className="text-2xl text-yellow-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Pratik Örnekler</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gerçek dünya projelerinden örnekler ve uygulamalar
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <FaCheck className="text-2xl text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">En İyi Pratikler</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Profesyonel geliştiricilerin kullandığı teknikler
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <FaClock className="text-2xl text-purple-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Zaman Kazanın</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Verimli geliştirme teknikleri ile zaman tasarrufu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-[#061621]">
        <div className="container mx-auto max-w-2xl">
          <div className="card bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-6">Webinara Katılın</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                <input type="text" className="input-field" placeholder="Adınız ve soyadınız" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-posta</label>
                <input type="email" className="input-field" placeholder="ornek@email.com" />
              </div>
              <button type="submit" className="btn-primary w-full">
                Kaydol
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#061621]">
        <div className="container mx-auto max-w-6xl px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Katılımcılar Ne Diyor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-semibold">Ahmet Y.</h4>
                  <p className="text-sm text-gray-500">Yazılım Geliştirici</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Harika bir deneyimdi. Öğrendiklerimi hemen projelerimde uyguladım."
              </p>
            </div>
            <div className="testimonial-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-semibold">Ayşe K.</h4>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Eğitmen çok bilgiliydi. Tüm sorularımı detaylıca yanıtladı."
              </p>
            </div>
            <div className="testimonial-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-semibold">Mehmet S.</h4>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Pratik örnekler ve gerçek dünya senaryoları çok faydalıydı."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
