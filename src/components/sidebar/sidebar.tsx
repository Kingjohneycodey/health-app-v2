'use client';
'use client'
import React from 'react';
import Avatar from "../../assets/img/avatar.png"
import Card from '../Card/Card';



const Sidebar: React.FC = () => {
  return(
    <>
      <Card avatar={Avatar} heading="Jane Smith" address="456 Oak Ave" />
    </>
  );
    
    
  
}

export default Sidebar;
