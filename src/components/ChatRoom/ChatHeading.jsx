import React from 'react';
import { motion } from "framer-motion";

const ChatHeading = () => {
  const textVariant = (delay) => ({
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, delay: delay },
    },
  });

  const marqueeVariants = {
    start: {
      x: '100%',
    },
    center: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    },
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '-3rem',
    height: '15vh',
    overflow: 'hidden',
    backgroundColor: '#000',
    color: 'white',
  };

  const marqueeStyle = {
    position: 'absolute',
    top: '2%',
    fontSize: '85px',
    fontFamily: "'Times New Roman', Times, serif",
    whiteSpace: 'nowrap',
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={marqueeStyle}
        variants={marqueeVariants}
        initial="start"
        animate="center"
      >
        CHAT ROOM
      </motion.div>
    </div>
  );
};

export default ChatHeading;


// Todo: Main Comming Soon Code On Full Screen
// import React, { useEffect, useRef } from 'react';
// import { motion } from "framer-motion";

// const ChatRoom = () => {
//   const imgRef = useRef(null);

//   const textVariant = (delay) => ({
//     hidden: { y: -50, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", duration: 1.5, delay: delay },
//     },
//   });

//   const adjustOpacity = () => {
//     if (imgRef.current) {
//       const distanceFromTop = window.scrollY;
//       const startDistance = window.innerWidth < 798 ? 240 : 350;
//       const maxDistance = 500;

//       if (distanceFromTop > startDistance) {
//         const adjustedDistance = distanceFromTop - startDistance;
//         const opacity = Math.max(0, Math.min(1, 1 - adjustedDistance / (maxDistance - startDistance)));
//         imgRef.current.style.opacity = opacity;

//         if (opacity === 0) imgRef.current.style.zIndex = '-1';
//         else imgRef.current.style.display = '2';
//       } else {
//         imgRef.current.style.opacity = 1;
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", adjustOpacity);
//     return () => window.removeEventListener("scroll", adjustOpacity);
//   }, []);

//   const marqueeContainerStyle = {
//     position: 'relative',
//     overflow: 'hidden',
//     whiteSpace: 'nowrap',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const marqueeTextStyle = {
//     display: 'inline-block',
//     fontSize: '200px',
//     fontFamily: "'Times New Roman', Times, serif",
//     color: 'white',
//     animation: 'marquee 18s linear infinite',
//     padding: '0 10px',
//   };

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'baseline',
//     position: 'fixed',
//     width: '100vw',
//     marginTop: '-3rem',
//     margin: 0,
//     padding: 0,
//     zIndex: 2,
//     overflow: 'hidden',
//   };

//   return (
//     <div style={{ height: '20vh', margin: 0, padding: 0 }}>
//       <div style={{ position: 'relative', zIndex: 2 }}></div>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <div style={containerStyle}>
//           <motion.div
//             variants={textVariant(0.5)}
//             initial="hidden"
//             animate="show"
//           >
//             <div style={marqueeContainerStyle}>
//               <div style={marqueeTextStyle}>Comming Soon....{"  "} </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Adding the marquee keyframes animation inline
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(`
//   @keyframes marquee {
//     0% {
//       transform: translateX(100%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }
// `, styleSheet.cssRules.length);

// export default ChatRoom;