"use client"

import { useEffect, useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image:
      "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    quote:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.",
  },
  {
    id: 2,
    name: "Imran Khan",
    role: "Software Engineer",
    image:
      "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    quote:
      "The team at Alcaline Solutions has been exceptional. Their attention to detail and creative solutions helped us a lot.",
  },
  {
    id: 3,
    name: "Sara Ali",
    role: "Digital Marketer",
    image:
      "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    quote:
      "I'm impressed by their professionalism and the quality of work. They've exceeded our expectations in every way.",
  }
]

export default function Testimonials() {
    const scrollRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollContainer = scrollRef.current
      if (scrollContainer) {
        const scrollAmount = 320
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" })

        const reachedEnd =
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth

        // Circular behavior: If we reached the end, jump back to the start
        if (reachedEnd) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" })
        }

        // If at the start and scrolling to the left, jump to the last testimonial
        if (scrollContainer.scrollLeft === 0) {
          scrollContainer.scrollTo({ left: scrollContainer.scrollWidth, behavior: "smooth" })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full px-4 py-16 bg-white font-sans">
      <div className="text-center mb-10">
        <div className="w-[69px] h-[5px] mx-auto mb-2 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]" />
        <h2 className="text-2xl md:text-3xl text-gray-800 font-medium">
          Why customers love <br />
          <span className="text-black font-bold">working with us</span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 py-6 scroll-smooth no-scrollbar"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="min-w-[300px] bg-gray-50 rounded-xl shadow-md p-6 flex flex-col justify-between"
          >
            <Quote className="text-green-600 w-6 h-6 mb-4" />
            <p className="text-sm text-gray-700 mb-6">{t.quote}</p>

            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-2 border-2 border-green-600"
              />
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-semibold text-green-600 text-sm">{t.name}</h3>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
