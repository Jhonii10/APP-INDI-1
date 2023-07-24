import anime from "animejs";
import { useEffect, useRef } from "react";

const LoadingSpinner = () => {
    const hexagonRef = useRef(null);
    const hexagonBRef = useRef(null);
  
    useEffect(() => {
      const anim = anime.timeline({
        loop: true,
        direction: 'alternate',
      });
  
      anim
        .add({
          targets: hexagonRef.current.querySelector('path'),
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutQuart',
          duration: 1000,
          delay: function(el, i) {
            return i * 250;
          },
        })
        .add({
          targets: hexagonBRef.current,
          duration: 1000,
          opacity: 1,
          easing: 'easeInOutQuart',
        });
    }, []);
  
    return (
      <div className="container-10">
        <svg
          id="hexagon"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          ref={hexagonRef}
          className="svg-10"
        >
            <g
              id="B"
              transform="translate(36, 33)"
              fill="#2563EB"
              style={{ opacity: 0 }}
              fontFamily="Quicksand', sans-serif"
              fontSize={50}
              fontWeight={400}
              letterSpacing="4.16666603"
              ref={hexagonBRef}
            >
              <text>
                <tspan x="-21.141666985" y={33}>
                  CK
                </tspan>
              </text>
              


            </g>
            <path
              stroke="#2563EB"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
                 L 11, 27
                 L 11, 72
                 L 50, 95
                 L 89, 73
                 L 89, 28 z"
            />
        
        </svg>
      </div>
    );
  };
  

  export default LoadingSpinner;
  