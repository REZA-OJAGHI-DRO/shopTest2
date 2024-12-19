/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'inner-custom':'inset 0 0 10px 0 rgba(0,0,0,.9)',
        'inner-custom-2':'inset 0 2px 5px 1px rgba(0,0,0,.4)',
        'inner-custom-3':'inset 3px 4px 5px 0px rgba(0,0,0,.2)',
        'custom-1':'0px 15px 30px 0px rgba(131, 193, 0, .3)',
        'custom-2':'0px 0px 100px 100px rgba(178, 123, 255, 0.42)',
        'custom-3':'0px 0px 100px 100px #18181b',
        'custom-4':'0px 0px 100px 100px rgba(255,255,255,.1)',
        'custom-5':'0px 0px 100px 100px #878787',
        'custom-6':'0px 4px 10px 0px rgba(0, 0, 0, .3)',
        'custom-7':'0px 0px 10px 0px rgba(0, 0, 0, .1)',
        'custom-8':'0px 0px 10px 2px rgba(178, 123, 255, 0.42)',
        'custom-9':'0px -10px 10px -7px rgb(124,124,124)',
        'custom-10':'0px 10px 10px -2px rgb(36, 36, 36)',
        'custom-11':'0px 0px 10px 0px rgba(178, 123, 255, 0.42)',
        'custom-12':'0px 2px 10px 0px #B886FF',
      },
      colors:{
        'custom-green':'rgba(131, 193, 0, 1)',
        'custom-purple1':'rgba(178, 123, 255, 0.42)', 
        'custom-purple2':'#B377FF',
        'custom-black1':'rgba(45, 45, 45, 1)',
        'custom-bg-button':'#5A4779',
        'custom-bg-1':'rgba(217, 217, 217, 0.22)',
        'custom-bg-2':'rgba(218, 218, 218, 0.2)'
      },
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(90deg , #B886FF 0%, #684082 100%)',
        'custom-gradient-2': 'linear-gradient(to left , #545454 0%, #373737 100%)',
        'custom-gradient-3': 'linear-gradient(to left , transparent 0%, rgba(217, 217, 217, 0.4) 50% , transparent 100%)',
        'custom-gradient-4': 'linear-gradient( to bottom, transparent 0%,rgba(0, 0, 0, 0.1) 20%,rgba(0, 0, 0, 0.3) 40%,rgba(255, 255, 255, 1) 50%,rgba(0, 0, 0, 0.3) 60%,rgba(0, 0, 0, 0.1) 80%,transparent 100%);',
        'custom-gradient-5': 'linear-gradient(to left , #242424 50%, #242424 100%)',
        'custom-gradient-6': 'linear-gradient(to top , #000 0%, #302F30 100%)',
        'custom-gradient-7': 'linear-gradient(#886bb645 100%, #5A4479  0% )',
        
      },
      
      lineHeight: {
        'textarea': '2.5rem', 
      },
      height: {
        'textarea': '100px', 
      },
    },
  },
  plugins: [],
}