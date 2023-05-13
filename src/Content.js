import React from 'react';

const Content = () => {

    const handleNameChange = () => {
        const names = ["Naveen","Mani", "Veera", "Ganesh"];
        const int = Math.floor(Math.random() * 4);
    
        return names[int];
      };   

  return (
    <main>
        <p>
          Namasthe {handleNameChange()}!!!
        </p>
    </main>
  );
}

export default Content;
