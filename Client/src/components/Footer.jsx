import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-green-50 font-Inter">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-600 font-logo">
              Algo<span className="text-black">Flow AI</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Helping forward-thinking companies harness the power of AI to
              streamline operations, unlock insights, and innovate faster.
            </p>
            {/* <img
              src="/icons/google-page-speed 1.png"
              alt="Google Page Speed"
              className="w-48 h-auto"
            /> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-2">
              4th main, 6th Cross Rd, GM Palya, C V Raman Nagar, Bengaluru,
              Karnataka 560075
            </p>
            <p className="text-gray-600 text-sm mb-2">
              Registered office Basaratpur Adalpura chunar Mirzapur, Uttar
              Pradesh 231304, India.
            </p>
            <p className="text-gray-900 font-medium mb-1">
              📞 +91-8960880615, +91-7452833648
            </p>
            <p className="text-gray-900 font-medium mb-1">
              📧{" "}
              <a
                href="mailto:info@algoflow.ai"
                className="hover:underline text-green-600"
              >
                info@algoflowai.com
              </a>
            </p>
            <p className="text-gray-900 font-medium">
              🌐{" "}
              <a
                href="https://www.algoflowai.com"
                target="_blank"
                className="hover:underline text-green-600"
              >
                www.algoflowai.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[
                {
                  label: "Facebook",
                  icon: "facebook",
                  href: "https://facebook.com/algoflowai",
                },
                {
                  label: "Instagram",
                  icon: "instagram",
                  href: "https://instagram.com/algoflowai",
                },
                {
                  label: "Twitter",
                  icon: "twitter",
                  href: "https://twitter.com/algoflowai",
                },
                {
                  label: "LinkedIn",
                  icon: "linkedin",
                  href: "https://linkedin.com/company/algoflowai",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-500 hover:text-green-600 transition"
                  aria-label={social.label}
                  target="_blank"
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AlgoFlow AI Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
