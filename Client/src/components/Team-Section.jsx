export default function TeamSection() {
  return (
    <div className="w-full font-Inter">
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Purple decorative line */}
        {/* <div className="absolute left-1/2 top-0 w-px h-24 bg-purple-500"></div> */}

        {/* Header section */}
        <div className="text-center mb-16 relative flex justify-center items-center flex-col">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
          <div className="inline-block p-6 text-black">
            <h2 className="text-2xl md:text-3xl font-normal mb-2">
              Way of building
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold">Great Software</h1>
          </div>
        </div>

        {/* Main content section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className=" spape-y-6 md:space-y-16 md:w-[557px] md:h-[473px]">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Build the right team to scale
            </h2>

            <p className="text-gray-600">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>

            <p className="text-gray-600">
              Our <span className="text-green-600">delivery model</span> helps
              you cut costs and deliver within budget.
            </p>

            {/* Testimonial */}
            <div className="border-l-4 border-[#4ed35e] pl-4 mt-8">
              <p className="italic text-gray-600">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/icons/ceo1.png"
                    alt="CEO avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Jeewa markram</h4>
                  <p className="text-sm text-gray-500">CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="relative">
            {/* Orange decorative circle */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-300 rounded-full -z-10"></div>

            {/* Purple decorative circle */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-300 rounded-full -z-10"></div>

            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/Rectangle 17.png"
                alt="Team collaboration"
                className="w-full h-auto md:w-[557px] md:h-[473px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left image section */}
            <div className="relative order-2 md:order-1">
              {/* Orange decorative circle */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-300 rounded-full -z-10"></div>

              <div className="rounded-lg overflow-hidden  md:w-[557px] md:h-[473px]">
                <img
                  src="/images/Rectangle 18.png"
                  alt="Developers working"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="space-y-6 order-1 md:order-2 md:space-y-16 md:w-[557px] md:h-[473px]">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Build the right team to scale
              </h2>

              <p className="text-gray-600">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>

              <p className="text-gray-600">
                Our <span className="text-green-600">delivery model</span> helps
                you cut costs and deliver within budget.
              </p>

              {/* Testimonial */}
              <div className="border-l-4 border-[#4ed35e] pl-4 mt-8">
                <p className="italic text-gray-600">
                  "Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules"
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/icons/ceo2.png"
                      alt="CEO avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Jeewa markram</h4>
                    <p className="text-sm text-gray-500">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Main content section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-16 md:w-[557px] md:h-[473px]">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Build the right team to scale
            </h2>

            <p className="text-gray-600">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>

            <p className="text-gray-600">
              Our <span className="text-green-600">delivery model</span> helps
              you cut costs and deliver within budget.
            </p>

            {/* Testimonial */}
            <div className="border-l-4 border-[#4ed35e] pl-4 mt-8">
              <p className="italic text-gray-600">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/icons/ceo3.png"
                    alt="CEO avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Jeewa markram</h4>
                  <p className="text-sm text-gray-500">CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="relative">
            {/* Orange decorative circle */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-300 rounded-full -z-10"></div>

            {/* Purple decorative circle */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-300 rounded-full -z-10"></div>

            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/Rectangle 19.png"
                alt="Team collaboration"
                className="w-full h-auto md:w-[557px] md:h-[473px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
