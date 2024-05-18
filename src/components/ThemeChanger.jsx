import React,{useState,useContext} from 'react'
// import { ThemeChangerr } from './context/colorContext'

function ThemeChanger({settheme,setcolor}) {
    // const {color,setcolor}=ThemeChangerr()
   
    const themec=      [
        {
            "themeName": "Midnight Blue",
            "darkBackground": "#191970",
            "lightBackground": "#F0F8FF",
            "darkTextColor": "#000080",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Forest Green",
            "darkBackground": "#006400",
            "lightBackground": "#F5FFFA",
            "darkTextColor": "#228B22",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Royal Purple",
            "darkBackground": "#800080",
            "lightBackground": "#E6E6FA",
            "darkTextColor": "#4B0082",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Dark Slate Gray",
            "darkBackground": "#2F4F4F",
            "lightBackground": "#D3D3D3",
            "darkTextColor": "#708090",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Crimson Red",
            "darkBackground": "#DC143C",
            "lightBackground": "#FFC0CB",
            "darkTextColor": "#8B0000",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Deep Sky Blue",
            "darkBackground": "#00BFFF",
            "lightBackground": "#87CEEB",
            "darkTextColor": "#1E90FF",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Orchid",
            "darkBackground": "#9932CC",
            "lightBackground": "#DA70D6",
            "darkTextColor": "#8A2BE2",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Slate Blue",
            "darkBackground": "#6A5ACD",
            "lightBackground": "#B0C4DE",
            "darkTextColor": "#483D8B",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Goldenrod",
            "darkBackground": "#DAA520",
            "lightBackground": "#FFF8DC",
            "darkTextColor": "#B8860B",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Olive Green",
            "darkBackground": "#556B2F",
            "lightBackground": "#F0FFF0",
            "darkTextColor": "#228B22",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Teal",
            "darkBackground": "#008080",
            "lightBackground": "#F0FFFF",
            "darkTextColor": "#008080",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Indigo",
            "darkBackground": "#4B0082",
            "lightBackground": "#E6E6FA",
            "darkTextColor": "#000080",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Chocolate",
            "darkBackground": "#D2691E",
            "lightBackground": "#FFDAB9",
            "darkTextColor": "#8B4513",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Salmon",
            "darkBackground": "#E9967A",
            "lightBackground": "#FA8072",
            "darkTextColor": "#8B5742",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Steel Blue",
            "darkBackground": "#4682B4",
            "lightBackground": "#B0C4DE",
            "darkTextColor": "#5F9EA0",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Cyan",
            "darkBackground": "#008B8B",
            "lightBackground": "#B0E0E6",
            "darkTextColor": "#00CED1",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Maroon",
            "darkBackground": "#800000",
            "lightBackground": "#B22222",
            "darkTextColor": "#8B0000",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Olive",
            "darkBackground": "#808000",
            "lightBackground": "#D3D3D3",
            "darkTextColor": "#556B2F",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Slate Gray",
            "darkBackground": "#708090",
            "lightBackground": "#C0C0C0",
            "darkTextColor": "#2F4F4F",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Khaki",
            "darkBackground": "#BDB76B",
            "lightBackground": "#FFFACD",
            "darkTextColor": "#6B8E23",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Magenta",
            "darkBackground": "#8B008B",
            "lightBackground": "#FF00FF",
            "darkTextColor": "#800080",
            "lightTextColor": "#FFFFFF"
        },
        {
            "themeName": "Tomato",
            "darkBackground": "#FF6347",
            "lightBackground": "#FFA07A",
            "darkTextColor": "#FF4500",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Turquoise",
            "darkBackground": "#00CED1",
            "lightBackground": "#40E0D0",
            "darkTextColor": "#00CED1",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Sienna",
            "darkBackground": "#A0522D",
            "lightBackground": "#D2691E",
            "darkTextColor": "#8B4513",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Goldenrod",
            "darkBackground": "#B8860B",
            "lightBackground": "#FFD700",
            "darkTextColor": "#DAA520",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Orange",
            "darkBackground": "#FF8C00",
            "lightBackground": "#FFA500",
            "darkTextColor": "#FF4500",
            "lightTextColor": "#000000"
        },
        {
            "themeName": "Dark Slate Blue",
            "darkBackground": "#483D8B",
            "lightBackground": "#8470FF",
            "darkTextColor": "#483D8B",
            "lightTextColor": "#000000"}
    
    ];
    
  return (
    
    <div className='absolute top-40  right-4 md:right-20 bg-pink-400 rounded-lg transition-transform duration-1000'>
   
    <div className="w-[250px] rounded-xl border">
   
    <div className="p-4 h-[320px] overflow-hidden overflow-y-scroll">
      {/* <h1 className="inline-flex items-center text-lg font-semibold">
        Change Theme   </h1>
        <div >
      
      <input type="color" value="#414141" onChange={(e)=>{
        setcolor(e.target.value);
      }}/>
    </div> */}
  
    
      <p className="mt-3 text-sm text-gray-600">
        Set your custom theme using above button or select from below 
      </p>
      <div className="mt-4 flex flex-wrap justify-evenly">     
       
       {themec.map((object)=>(
         <span key={object.themeName} style={{backgroundColor:object.darkBackground,color:object.lightTextColor}} className={`mb-2 mr-2  rounded-full  px-3 py-1 text-[10px] font-black text-gray-900 cursor-pointer w-[40%] flex items-center text-center justify-center min-h-[30px]`} onClick={()=>{setcolor(object)
          settheme((prev)=>(!prev))
         }}>
        {object.themeName}
      </span>
        
      ))}
       
      </div>
      <button
        type="button"
        className="absolute px-[8px]  top-[12px] right-[12px] rounded-full bg-black text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={()=>{
          settheme((prev)=>(!prev))
        }}
      >
        X
      </button>
    </div>
  </div>
  </div>
        
  
  )
}

export default ThemeChanger
