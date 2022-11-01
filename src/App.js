import anime from 'animejs';
import React from 'react';
import './App.css';


function App() {
  function click(){
    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(svg, i) { return i * 250 },
      direction: 'alternate',
    });
    anime({
      targets: '.btn',
      easing: 'easeInOutSine',
      loop: 10,
      duration: 700,
      borderTopColor: ['#4285F4','#EA4335','#FBBC05','#34A853','#4285F4'],
      borderRightColor: ['#EA4335','#FBBC05','#34A853','#4285F4','#EA4335'],
      borderBottomColor: ['#FBBC05','#34A853','#4285F4','#EA4335','#FBBC05'],
      borderLeftColor: ['#34A853','#4285F4','#EA4335','#FBBC05','#34A853'],
    });
    
  }

  function play(){
    anime({
      targets: '.bar',
      easing: 'easeInOutElastic',
      duration: 700,
      height: function(){
        return anime.random(0, 700)
      },
      backgroundColor: function(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`
              },
      complete: play,
      

    })
  }
  const elRef = React.useRef(null);
  function get(){
  
  
  
  }

  function change(){
    anime({
         targets: '.eg',
        width: function(){
          return anime.random(0, 200)
        },
        complete: change,
    })
    console.log(elRef.current?.clientWidth)
  }
  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={click}>click to see</button> 
      <button onClick={get}>get</button>
      <br />
      <br />
      <br />
      <div className="eg" ref={elRef} ></div>
      <button onClick={change}>change</button>
      <br />
      <br />
      <button className='btn'>
        <svg><path d="M 113.71808,98.156288 Q 110.541,99.61462 106.76496,100.70837 103.01496,101.77608 99.499335,101.77608 94.968088,101.77608 91.192048,100.52608 87.416009,99.276079 84.759761,96.77608 82.07747,94.25004 80.619138,90.474 79.160806,86.671919 79.160806,81.593797 79.160806,72.296928 84.577469,66.932348 90.020174,61.541726 99.499335,61.541726 102.80662,61.541726 106.24412,62.349017 109.70766,63.130267 113.69203,65.031307 V 71.151095 H 113.22329 Q 112.41599,70.526096 110.87954,69.510471 109.34308,68.494847 107.85871,67.817764 106.06183,67.010473 103.77017,66.48964 101.50454,65.942765 98.613919,65.942765 92.103506,65.942765 88.301425,70.135471 84.525386,74.302135 84.525386,81.437547 84.525386,88.963585 88.483717,93.15629 92.442048,97.322955 99.26496,97.322955 101.76496,97.322955 104.23892,96.828163 106.73891,96.333372 108.61391,95.552122 V 86.04692 H 98.223294 V 81.515672 H 113.71808 Z" fill="none" stroke-width='0.5' stroke="#4285F4" ></path></svg>
        <svg><path d="M 147.12951,86.489628 Q 147.12951,93.598999 143.48368,97.713579 139.83785,101.82816 133.71806,101.82816 127.54619,101.82816 123.90036,97.713579 120.28057,93.598999 120.28057,86.489628 120.28057,79.380257 123.90036,75.265676 127.54619,71.125054 133.71806,71.125054 139.83785,71.125054 143.48368,75.265676 147.12951,79.380257 147.12951,86.489628 Z M 142.07743,86.489628 Q 142.07743,80.83859 139.86389,78.104216 137.65035,75.343801 133.71806,75.343801 129.73369,75.343801 127.52015,78.104216 125.33265,80.83859 125.33265,86.489628 125.33265,91.958375 127.54619,94.796915 129.75973,97.609413 133.71806,97.609413 137.62431,97.609413 139.83785,94.822956 142.07743,92.010458 142.07743,86.489628 Z" fill="none" stroke-width='0.5' stroke="#EA4335" ></path></svg>
        <svg><path d="M 179.49929,86.489628 Q 179.49929,93.598999 175.85346,97.713579 172.20763,101.82816 166.08784,101.82816 159.91597,101.82816 156.27014,97.713579 152.65035,93.598999 152.65035,86.489628 152.65035,79.380257 156.27014,75.265676 159.91597,71.125054 166.08784,71.125054 172.20763,71.125054 175.85346,75.265676 179.49929,79.380257 179.49929,86.489628 Z M 174.44721,86.489628 Q 174.44721,80.83859 172.23367,78.104216 170.02013,75.343801 166.08784,75.343801 162.10347,75.343801 159.88992,78.104216 157.70243,80.83859 157.70243,86.489628 157.70243,91.958375 159.91597,94.796915 162.12951,97.609413 166.08784,97.609413 169.99409,97.609413 172.20763,94.822956 174.44721,92.010458 174.44721,86.489628 Z" fill="none" stroke-width='0.5' stroke="#FBBC05" ></path></svg>
        <svg><path d="M 210.67115,97.713579 Q 210.67115,105.10941 207.31177,108.57295 203.9524,112.03649 196.97324,112.03649 194.65553,112.03649 192.44199,111.69795 190.25449,111.38545 188.11908,110.78649 V 105.78649 H 188.37949 Q 189.57741,106.25524 192.18157,106.93232 194.78574,107.63545 197.3899,107.63545 199.8899,107.63545 201.53053,107.03649 203.17115,106.43753 204.08261,105.36982 204.99407,104.3542 205.38469,102.92191 205.77532,101.48962 205.77532,99.718787 V 97.062538 Q 203.56178,98.83337 201.53053,99.718787 199.52532,100.57816 196.40032,100.57816 191.19199,100.57816 188.11908,96.828163 185.0722,93.052124 185.0722,86.20317 185.0722,82.453172 186.11387,79.74484 187.18158,77.010467 189.00449,75.031301 190.6972,73.182344 193.11907,72.16672 195.54095,71.125054 197.93678,71.125054 200.46282,71.125054 202.15553,71.645887 203.87428,72.140678 205.77532,73.182344 L 206.08782,71.932345 H 210.67115 Z M 205.77532,93.026082 V 77.166717 Q 203.82219,76.281301 202.12948,75.916717 200.46282,75.526093 198.79615,75.526093 194.7597,75.526093 192.44199,78.234424 190.12428,80.942756 190.12428,86.099003 190.12428,90.994833 191.84303,93.520874 193.56178,96.046914 197.54615,96.046914 199.68157,96.046914 201.81698,95.239623 203.97844,94.40629 205.77532,93.026082 Z" fill="none" stroke-width='0.5' stroke="#4285F4" ></path></svg>
        <svg><path d="M 225.25447,101.02087 H 220.35863 V 60.50006 H 225.25447 Z" fill="none" stroke-width='0.5' stroke="#34A853" ></path></svg>
        <svg><path d="M 259.2909,86.984419 H 237.85862 Q 237.85862,89.666709 238.66591,91.671916 239.47321,93.651082 240.87945,94.927123 242.23362,96.177122 244.08258,96.802122 245.95758,97.427121 248.19716,97.427121 251.16591,97.427121 254.1607,96.255247 257.18153,95.057331 258.45757,93.911498 H 258.71799 V 99.250037 Q 256.24403,100.2917 253.6659,100.99483 251.08778,101.69795 248.24924,101.69795 241.00966,101.69795 236.94716,97.791704 232.88467,93.859415 232.88467,86.645878 232.88467,79.510465 236.76487,75.317759 240.67112,71.125054 247.02528,71.125054 252.9107,71.125054 256.08778,74.562552 259.2909,78.00005 259.2909,84.328171 Z M 254.52528,83.234421 Q 254.49924,79.380257 252.57216,77.270883 250.67112,75.16151 246.76487,75.16151 242.83258,75.16151 240.48883,77.479217 238.17112,79.796923 237.85862,83.234421 Z" fill="none" stroke-width='0.5' stroke="#EA4335" ></path></svg>
      </button>
      <br />
      <br />
      <br />
      <br />
      
      <div className='con'>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      <div className='bar' id="tone"></div>
      
      
      </div>
      <button onClick={play}>onplay</button>
    </div>
  );
}

export default App;
