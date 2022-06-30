import React, {useState} from 'react'

const CardsComponent = ({children, as, onHover}) => {
const [isHovered, setIsHovered ]= useState(false);
const onMouseEnter = () => setIsHovered(true);

const onMouseLeave = () => setIsHovered(false);


const className = `cards ${as ? as : ''} ${isHovered ? onHover : ''}`;


  return (
    <div className={className} onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave}>
       {children}
    </div>
  )
}

export default CardsComponent



