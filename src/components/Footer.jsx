import React from 'react'
import { BsRobot } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10">
      
      <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center">
        
        <div className="flex justify-center items-center gap-3 mb-3">
          
          <div className="bg-black text-white p-2 rounded-lg">
            <BsRobot size={16} />
          </div>

          <h2 className="font-semibold">
            InterviewIQ.AI
          </h2>

        </div>

        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>

      </div>

    </div>
  )
}

export default Footer;



// import React from 'react'
// import { BsRobot } from "react-icons/bs";

// function Footer() {
//   return (
//     <div className="bg-[#f3f3f3] flex justify-center px-4 py-10">

//       <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-10 px-6">

//         {/* Logo + Name */}
//         <div className="flex justify-center items-center gap-3 mb-4">
//           <div className="bg-black text-white p-2 rounded-lg">
//             <BsRobot size={16} />
//           </div>

//           <h2 className="font-semibold text-lg">
//             InterviewIQ.AI
//           </h2>
//         </div>

//         {/* Description */}
//         <p className="text-gray-500 text-sm max-w-xl mx-auto text-center mb-6">
//           AI-powered interview preparation platform designed to improve
//           communication skills, technical depth and professional confidence.
//         </p>

//         {/* Links */}
//         <div className="flex justify-center gap-6 text-sm text-gray-600 mb-6">
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//           <a href="#">Privacy</a>
//         </div>

//         {/* Copyright */}
//         <p className="text-center text-gray-400 text-sm">
//           © 2026 InterviewIQ.AI — All rights reserved.
//         </p>

//       </div>

//     </div>
//   )
// }

// export default Footer;