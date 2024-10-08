import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Ux Design Product Strategy",
        description: ["Research", "User Journeys & Flows", "Wireframes", "Prototypes", "Landing page design", " MVP Prototyping"]
    },
    {
        title: "UI Design",
        description: ["Layouts",
            "Typography",
            "Websites",
            "Mobile applications",
            "Web applications",
            "Color pallets",
            "Information architecture"]
    },
    {
        title: "Frontend Development",
        description: ["ReactNative", "JavaScript",
            "Animations",
            "Web-Apps",
            "Responsive Websites",
            "ReactJS",
            "Next JS"]
    },
    {
        title: "App Design",
        description: ["Web App Design",
            "Mobile App Design",
            "Figma",
            "Website Design",
            "Web applications",
            "Industrial Interface", ""]
    },
    {
        title: "Backend Development",
        description: ["Node JS","Mern Tech Stack","Express JS", "MongoDB","RestApi"]
    },
    {
        title: "Graphic Design",
        description: ["Branding","Logo","Email Graphics","Presentation Design"]
    }
];

const Service = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Services</h1>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg px-10 py-10 hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h2 className="text-4xl font-semibold mb-4 pb-7 text-gray-800">{service.title}</h2>
                            <div className='flex flex-wrap lg:gap-3 gap-2'>
                            {service.description.map((e)=>  <span className="font-d-body-regular-3 text-headings bg-[#F7F8F8] py-2 px-3 rounded-full">{e}</span>)}
                               
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Service;
