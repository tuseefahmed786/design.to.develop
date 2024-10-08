import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Marie",
        title: "CEO at COMPANY",
        image: "path/to/image.jpg",
        quote: "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
        highlighted: true,
    },
    {
        name: "Stephanie",
        title: "CEO at COMPANY",
        image: "path/to/image.jpg",
        quote: "I know it's cliché, but we were lost before we found COMPANY. Can't thank these guys enough!",
    },
    {
        name: "Andre",
        title: "CEO at COMPANY",
        image: "path/to/image.jpg",
        quote: "If I could give 11 stars, I would! COMPANY saved me 100 hours.",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(1);

    return (
        <>
           <div className="flex justify-around flex-wrap px-4 gap-4">
           <div className="tess-custom
      relative cursor-pointer border-black p-8 text-black transition-colors duration-500 z-10 bg-white
      "><span className="absolute tess-custom2 block origin-top-right rotate-45 bg-black object-cover"></span><h3 className="text-base sm:text-xl text-black">Took some convincing, but now that we're on COMPANY, we're never going back."</h3><p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-black">Pam, CEO at COMPANY</p></div>

            <div className="tess-custom
      relative  cursor-pointer border-black p-8 text-black transition-colors duration-500 z-10 bg-indigo-600
      "><span className="absolute tess-custom2 block origin-top-right rotate-45 bg-black object-cover"></span><h3 className="text-base sm:text-xl text-white">“It took some convincing to try Product, but now we can't imagine using anything else!”</h3><p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-indigo-200">Na Line, Founder</p></div>

            <div className="tess-custom
      relative  cursor-pointer border-black p-8 text-black transition-colors duration-500 z-10 bg-white
      "><span className="absolute tess-custom2 block origin-top-right rotate-45 bg-black object-cover"></span><h3 className="text-base sm:text-xl text-black">"Convincing to switch to our design and development services, but now we can’t picture working with anyone else!"</h3><p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-black">Utility Bills Cal, CEO at COMPANY</p></div>
       
           </div>
            </>
    );
};

export default Testimonial;
