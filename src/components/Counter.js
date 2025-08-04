import React, { useEffect, useState } from 'react'
import style from './Counter.module.css'
const Counter = () => {
  const[count, setCount] = useState(0)
  const[isRuning, setIsRuning] = useState(true)

  useEffect (() =>{
    let interval;
    

    if (isRuning){
      interval = setInterval(() =>{
        setCount(prevCount=> prevCount +1 )
        
        console.log(`Le composant est monté : ${isRuning}`)
      }, 1000)
    }

    return () => {
      clearInterval(interval);
      console.log('Le composant est demonté !')
    } 
    
    
    
  }, [isRuning]);
  
  // Formatage en minute et seccondes
  
  const formatCompteur = (seccondes) =>{
    const minute = Math.floor(seccondes / 60)
    const remaningSecconde = seccondes % 60;
    return `${String(minute).padStart(2, "0")}:${String(remaningSecconde).padStart(2, "0")}`;
    
  }

  // Modifier l'état de la valeur de isRuning
    const updateIsRuning = () =>{
        setIsRuning(!isRuning)
    }

  // Réinitialiser le compteur
  
  const resetCompteur = () =>{
    setCount(0)
    setIsRuning(false)
  }


  return (
    <div>
      <div className={style.Container}>
        <span className={`${style.etiquette} ${!isRuning ? style.etiquetteColorRed : style.etiquetteColorGreen}`}>{isRuning ? "Actif" : "Inactif"}</span>
        <h1>Compteur : {formatCompteur(count)}</h1>
        <div className={style.buttonContainer}>
          <button className={`${style.buttonDemarer} ${!isRuning ? style.buttonColorGren : style.ButtonColorRed}`} onClick={() =>{updateIsRuning()}}>{!isRuning ? "Démarer": "Arreté"}</button>
          {count !== 0 ? <button className={style.buttonReset} onClick={() => {resetCompteur()}}>Réinitialiser</button> : ""}
        </div>
      </div>
    </div>
  )
}

export default Counter

