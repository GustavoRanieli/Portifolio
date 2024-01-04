import React, { useEffect } from 'react'
import curriculo from '../assets/CurriculoGustavo.pdf'

import { portFolio, imgLanguages } from '../config/data' 
import AOS from 'aos'

const Perfil = () => {
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
        <div id='Sobre' className='divIcons'>
            <div className='flexIcons'>
                <img src={imgLanguages[0].img} alt="Icon JavaScript" />
                <img src={imgLanguages[1].img} alt="Icon TypeScript" />
                <img src={imgLanguages[2].img} alt="Icon NodeJs" />
                <img src={imgLanguages[3].img} alt="Icon Sass" />
                <img src={imgLanguages[4].img} alt="Icon React" />
                <img src={imgLanguages[5].img} alt="Icon GitHub" />
                <img src={imgLanguages[6].img} alt="Icon GitHub" />
                <img src={imgLanguages[7].img} alt="Icon GitHub" />
            </div>
        </div>
        <div className='sobreGrid'>
            <div data-aos="fade-right" className='divIgmSobre'>
                <img src={portFolio[1].img} alt="Foto de perfil" />
            </div>
            <div data-aos="fade-left" className='divTextSobre'>
                <div className='titleSobre'>
                    <h1>Gustavo Ranieli Lemes</h1>
                    <p>Futuro Desenvolvedor Full Stack</p>
                </div>
                <div  className='paragraphSobre'>
                    {/* Loren Ipsun */}
                    <p>Um desenvolvedor web apaixonado por criar soluções digitais inovadoras. Iniciei minha carreira em 2022 e desde então tenho mergulhado
                     de cabeça no mundo da programação, buscando constantemente o aprimoramento dos meus conhecimentos. Sou um entusiasta da aprendizagem
                      contínua e invisto em minha educação por meio de cursos e também como estudante na Faculdade FMU. Através dessas oportunidades, tenho
                       aprofundado meus conhecimentos teóricos e práticos, fortalecendo meu domínio de linguagens como HTML, CSS, JavaScript, Node e explorando
                        frameworks como React.</p>
                    <a href={curriculo} download><button>Baixar currículo</button></a>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Perfil