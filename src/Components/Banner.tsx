import React, {useEffect} from 'react'
import { portFolio } from '../config/data.tsx'
import AOS from 'aos'
    

const Banner = () => {
  return (
    <>
        <div id='Inicio' className='bannerGrid'>
            <div  className='divText'>
                <h1>Full Stack Developer.</h1>
                <p>Sou um desenvolvedor web apaixonado por impulsionar o sucesso das empresas por meio de soluções digitais inovadoras. Estou aqui hoje para convidar você, que está lendo, a trazer sua empresa para a próxima fase de crescimento.</p>
            </div>
            <div  className='divImg'>
                <img src={portFolio[0].img} alt="foto de perfil" />
            </div>
        </div>
    </>
  )
}

export default Banner