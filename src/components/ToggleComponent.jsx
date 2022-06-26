import React, {useState} from 'react'

const ToggleComponent = () => {
   

    const [darkMode, setDarkMode] = useState(false);
    const [lightMode, setLightMode] = useState(false);

    const handleToggleSwitchDarkMode = () => {
        setDarkMode(darkMode + 1);

    }
    const handleToggleSwitchLightMode = () => {
        setLightMode(lightMode - 1);
    }
 
   

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
       <button className="app" onMouseEnter={handleToggleSwitchDarkMode } onMousseLeave={handleToggleSwitchLightMode}>
       Test: {darkMode} {lightMode}
      
   
       </button>
       
      
    </div>
  );
}

export default ToggleComponent