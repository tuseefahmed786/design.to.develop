import React, { useRef, useState } from 'react'
import { listServices } from './servicesapi'

function ServiceSection() {
    const [currcent, setcurrcent] = useState('Design')
    
    function selectedService(params) {
      setcurrcent(params)
    }
    const scrollRef = useRef(null);

    const scrollLeft = () => {
      console.log(scrollRef.current)
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    };

  return (
    <>
  
    {/* start Service Section */}
    <section>
        <div className='our-service p-3 md:p-9 bg-[#f7f8f8]'>
          <div className='py-2 sm:py-12'><h1 className='text-7xl py-4'>Our services</h1></div>

          <div className='service-catgerios'>
            <ul className='flex gap-10 mb-3 border-b hr-custom'>
              {listServices.map((e, i) => {
                return <><li className={`text-2xl md:text-4xl pb-7 ${currcent == e.service ? "service-text" : "text-[#b6bac3]"}`}
                  key={i}
                  onClick={() => selectedService(e.service)}
                >{e.service}</li>
                </>
              })}
            </ul>
          </div>

          <div className='inner-services mt-6'>
            {listServices.map((e) => {
              if (e.service === currcent) {
                return (
                  <ul key={e.service} ref={scrollRef} className='no-scrollbar flex gap-5 flex-nowrap h-44 overflow-y-hidden overflow-x-scroll '>
                    {e.innerServices.map((innerService, i) => {
                      return (

                        <div key={i} className='bg-white rounded-xl py-5 px-5 p-5 min-w-96	'>
                          <li className='dm-serif text-xl sm:text-3xl py-4' key={i + 2}>{innerService.names}</li>
                          <p key={i + 3} className='text-[#5b616e] text-sm  font'>{innerService.description}</p>
                        </div>

                      );
                    })}
                  </ul>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className='scroll-buttons flex gap-5 my-5'>
            <button onClick={scrollLeft} className='px-4 py-2 rounded-full	 bg-blue-500 text-white rounded'>
              L
            </button>
            <button onClick={scrollRight} className='px-4 py-2 rounded-full bg-blue-500 text-white rounded'>
              R
            </button>
          </div>
        </div>
      </section>
      {/* end service section */}
    </>
  )
}

export default ServiceSection