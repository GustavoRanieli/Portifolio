import React, { useEffect } from 'react'

import { portFolio } from '../config/data'
import AOS from 'aos'


const UltimosTrabalhos = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação em milissegundos
            easing: 'ease-in-out', // Tipo de easing da animação
            disable: 'mobile',

          });
          AOS.refresh(); // Atualiza o AOS quando o componente montar ou atualizar
    }, []);
    
  return (
    <>
        <div id='Trabalhos' className='containerLastWorks'>
            <div className='lastWorksTitle'>
                <h1>Meus últimos trabalhos</h1>
                <p>Trabalhos prontos ou que ainda estão em desenvolvimento.</p>
            </div>
            <div data-aos="fade-up" className='gridWorks'>
                <div>
                    <a href="https://github.com/GustavoRanieli/UMusic"><img src={portFolio[9].img} alt="" />
                    <h1>UMusic</h1></a>
                    <p className='languages'>NodeJs, Javascript, Sass, EJS e API</p>
                    <p>Foi um desafio da DevChanlleger onde tinha que fazer uma landing page parecida com o spotfiy, fui além e utilizei a API do spotify.</p>
                    <a href="https://github.com/GustavoRanieli/UMusic" className='linkGit'><p className='linkGit'>Link</p></a>
                </div>
                <div>
                    <a href="https://github.com/GustavoRanieli/codemoji">
                        <img src={portFolio[10].img} alt="" />
                        <h1>Codemoji</h1>
                        <p className='languages'>React, TypeScript, Sass</p>
                        <p>Desafio 8 dos desafios front-end do Yuri Code, era uma simples landing page, fui além e adicionei mais recursos.</p>
                        <a href="https://github.com/GustavoRanieli/codemoji"><p className='linkGit'>Link</p></a>
                    </a>
                </div>
                <div>
                    <img src={portFolio[6].img} alt="" />
                    <h1>Em Desenvolvimento</h1>
                </div>
                {/* <div>
                    <img src={portFolio[6].img} alt="" />
                    <h1>Em Desenvolvimento</h1>
                </div>
                <div>
                    <img src={portFolio[6].img} alt="" />
                    <h1>Em Desenvolvimento</h1>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default UltimosTrabalhos
