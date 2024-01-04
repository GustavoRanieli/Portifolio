import React, { useEffect } from 'react'

import { portFolio } from '../config/data'
import AOS from 'aos'

const Cursos = () => {
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
        <div id='Cursos' className='containerCourses'>
            <div className='coursesTitle'>
                <h1>O que estou estudando</h1>
                <p>Cursos que já fiz ou que ainda estou estudando no momento</p>
            </div>
            <div data-aos="fade-up" className='gridCourses'>
                <div>
                    <img src={portFolio[3].img} alt="" />
                    <h1>ProgBr</h1>
                    <p>Ao longo do curso, fui guiado por instrutores experientes do Programador Br, que compartilharam seu conhecimento de forma clara e prática. Aprendi desde os fundamentos do desenvolvimento web, como HTML, CSS e JavaScript, até o uso de frameworks renomados, como React e Node.js.</p>
                </div>
                <div>
                    <img src={portFolio[5].img} alt="" />
                    <h1>FMU</h1>
                    <p>Na Faculdade FMU, estou mergulhado em um ambiente acadêmico estimulante, onde tenho acesso a professores especializados e recursos educacionais de alta qualidade. Estou adquirindo conhecimentos abrangentes em análise de sistemas e desenvolvimento de software, desde os conceitos fundamentais até as práticas avançadas.</p>
                </div>
                <div>
                    <img src={portFolio[2].img} alt="" />
                    <h1>TypeScript do Básico ao Avançado</h1>
                    <p>Durante o curso, fui guiado por instrutores experientes do Curso em Vídeo, que apresentaram o TypeScript de forma clara e abrangente. Aprendi desde os conceitos básicos até as técnicas avançadas, explorando recursos poderosos que o TypeScript oferece.</p>
                </div>
                <div>
                    <img src={portFolio[2].img} alt="" />
                    <h1>AWS</h1>
                    <p>No curso de AWS na Udemy, sob a orientação de instrutores experientes, explorei os fundamentos e práticas essenciais da Amazon Web Services. Da compreensão dos serviços básicos a cenários práticos, o curso oferece uma visão abrangente do ecossistema AWS, preparando-me para obter meu primeiro certificado.</p>
                </div>
                <div>
                    <img src={portFolio[11].img} alt="" />
                    <h1>Inglês</h1>
                    <p>Na English Masters, adotei o inovador curso de inglês com foco em "Emotional Learning". Além de gramática e vocabulário, o programa destaca o desenvolvimento emocional para aprimorar a comunicação efetiva. Com a promessa de fluência em até um ano, estou animado para explorar este método envolvente, integrando aprendizado de idiomas com uma conexão emocional, tornando o processo mais eficaz e significativo.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cursos