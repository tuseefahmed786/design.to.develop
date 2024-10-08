import React from 'react';
import Project1 from '../../assests/project/7167233_3569183.jpg'
const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 py-14 px-36 bg-gray-100">
      {/* Customization Section */}
      <div className="bg-purple-300 rounded-3xl p-4 gap-11 flex flex-col row-start-1 row-end-3 col-start-1 col-end-2">
        <h2 className="text-xl font-bold text-white top-4 left-4">Customization</h2>
        <div className="flex items-center justify-center">
          <img
            src={Project1}
            alt="Card"
            className="rounded w-52 shadow-md transform rotate-3 -ml-5"
          />
        </div>
        <div className="  bottom-4 left-4py-2 px-4 rounded-3xl">
          <p className="text-[#45127a] font-mono font-medium">
            Use a pre-designed template or personalize with video, stickers, fonts, and more
          </p>
        </div>
      </div>

      {/* Scheduling Section */}
      <div className="bg-pink-200 rounded-3xl p-4 row-start-1 row-end-2 col-start-2 col-end-4">
        <h2 className="text-xl font-bold text-purple-900">Scheduling</h2>
        <p className="mt-2 text-purple-800">
          Schedule all your cards and gifts now and we’ll send them later.
        </p>
        <img
          src="scheduling-image.png"
          alt="Scheduling"
          className="top-10 right-10 rounded-lg shadow-lg"
        />
      </div>

      {/* Wallet Section */}
      <div className="bg-green-200 rounded-3xl p-4  ">
        <h2 className="text-xl font-bold text-green-900">Wallet</h2>
        <p className="mt-2 text-green-800">
          Access all your gifts and save up your Givingli Cash.
        </p>
        <img
          src="wallet-image.png"
          alt="Wallet"
          className="  top-10 left-10 rounded-lg shadow-lg"
        />
      </div>

      {/* Inbox Section */}
      <div className="bg-yellow-200 rounded-3xl p-4  ">
        <h2 className="text-xl font-bold text-yellow-900">Inbox</h2>
        <p className="mt-2 text-yellow-800">
          Track your gifts, group chats, and sent cards.
        </p>
        <img
          src="inbox-image.png"
          alt="Inbox"
          className="  bottom-10 right-10 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Projects;
