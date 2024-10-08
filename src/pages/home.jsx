import React from 'react'
import ServiceSection from '../components/service/ServiceSection'
import Faq from '../components/faq/Faq'
import Testimonial from '../components/testimonial/Testimonial'
import Projects from '../components/projects/Projects'

function Home() {
  return (
    <>
      <div className='px-4 sm:px-8 py-12 md:py-24 hero-section'>
        <h1 className='md:text-9xl text-6xl'> We build
        <svg data-v-60ce5527="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 104 59" class="nuxt-icon hidden md:inline-block relative top-2 w-24 h-10" font-control="false"><path fill="#D4323D" d="M60.533 10.8c-1.72 1.16-1.801 2.403-.276 3.922.672.71 7.493 4.527 15.138 8.552 7.698 4.1 14.519 7.916 15.255 8.638 1.377 1.228 1.366 1.293-.089 2.83-.819.917-6.012 4.194-11.58 7.34-6.008 3.401-10.267 6.243-10.678 7.098-1.181 2.642-.726 3.845 1.618 4.446 1.842.448 3.495.07 8.618-2.027 8.474-3.508 15.816-7.739 18.94-10.908 2.165-2.208 2.663-3.181 3.192-6.266.562-3.277.469-3.889-1.17-6.287-2.693-3.968-5.58-5.655-19.552-11.36-16.571-6.747-17.824-7.16-19.416-5.978"></path><path fill="#D4323D" d="M70.699 27.893c-12.17-1.56-26.453-2.754-35.178-2.796-24.44-.224-30.734.217-32.447 2.107-.571.63-.95 1.292-.779 1.454.48.677 6.323 2.474 8.541 2.656 1.319.028 13.674.891 27.54 1.815 29.373 1.931 33.52 2.048 37.085.94 2.018-.58 2.642-1.135 2.69-2.185.063-1.908-2.663-3.368-7.452-3.991"></path></svg> while
          you bootstrap</h1>
        <p className='text-xl sm:text-2xl font-serif py-5 mb-2 text-gray-600'>While you focus on marketing,  networking and fundraising we‘ll be your tech and product design partner.
        </p>
        <a href='https://www.linkedin.com/in/tuseef-ahmed-286a9521b/' className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Book Your Call
    </a>
      </div>

      <ServiceSection />
      <div className='bg-[#f7f8f8]'>
      <h1 className="text-6xl font-bold px-10">FAQ</h1>
      <Faq />
      <Testimonial/>
      {/* <Projects/> */}
    </div>
    </>
  )
}

export default Home