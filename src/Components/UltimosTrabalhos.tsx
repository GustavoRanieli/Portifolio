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
                    <a href="https://github.com/GustavoRanieli/PortalAlfabet">
                        <img src={portFolio[15].img} alt="" />
                        <h1>Portal de Alfabetização</h1>
                        <p className='languages'>EJS, NodeJS, MongoDB</p>
                        <p>Atuando em uma empresa voltada para educação, fui desafiado a montar um sistema que iria impactar na alfabetização de diversas crianças no interior de São Paulo.</p>
                        <a href="https://github.com/GustavoRanieli/PortalAlfabet"><p className='linkGit'>Link</p></a>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/GustavoRanieli/LibrasShowDeImagem">
                        <img src={portFolio[16].img} alt="" />
                        <h1>Libras Show de Imagem</h1>
                        <p className='languages'>EJS, NodeJS, SASS</p>
                        <p>Atuando em uma empresa voltada para educação, desenvolvi um sistema onde crianças interagem com o equipamento touch screen ou pela câmera para aprender palavras e até mesmo libras.</p>
                        <a href="https://github.com/GustavoRanieli/LibrasShowDeImagem"><p className='linkGit'>Link</p></a>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/GustavoRanieli/SeparadorDeSilabas">
                        <img src={portFolio[12].img} alt="" />
                        <h1>Separador de Sílabas</h1>
                        <p className='languages'>EJS, NodeJS, SASS</p>
                        <p>Primeiro esboço do que veio a ser o separador de sílabas finalizado, nesse sistema com um banco de mais de 11.000 palavras, identifico e retorno sua palavra separada para aprendizado.</p>
                        <a href="https://github.com/GustavoRanieli/SeparadorDeSilabas"><p className='linkGit'>Link</p></a>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/GustavoRanieli/gerenciador_d_tarefas">
                        <img src={portFolio[14].img} alt="" />
                        <h1>Gerenciador de Tarefas</h1>
                        <p className='languages'>EJS, SQL, NodeJS</p>
                        <p>Atuando como Freelancer, recebi o desafio de entregar um sistema de gerenciamento para um empreendedor utilizar com mais de 100 funcionário, consiste em distribuir tarefas e observações para cada colaborador.</p>
                        <a href="https://github.com/GustavoRanieli/gerenciador_d_tarefas"><p className='linkGit'>Link</p></a>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/GustavoRanieli/GeradorIframe">
                        <img src={portFolio[13].img} alt="" />
                        <h1>Gerador de Iframe</h1>
                        <p className='languages'>EJS, SQL, NodeJS</p>
                        <p>Atuando como Freelancer, desenvolvi uma aplicação para exibição de livros como prévia do produto, meu cliente tinha uma loja e pediu uma forma de exibir eles sem conseguirem baixar através de link direto.</p>
                        <a href="https://github.com/GustavoRanieli/GeradorIframe"><p className='linkGit'>Link</p></a>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Messiaslogia/emagrecendoSistema">
                        <img src={portFolio[17].img} alt="" />
                        <h1>Sistema de Vendas</h1>
                        <p className='languages'>EJS, SQL, NodeJS, APIRest</p>
                        <p>Como Freelancer desenvolvi um sistema completo de controle de pedidos, relatórios e entregas, minha cliente vende produtos pela internet e pela alta demanda, revendedores e distribuidores, precisava de um controle melhor.</p>
                        <a href="https://github.com/Messiaslogia/emagrecendoSistema"><p className='linkGit'>Link</p></a>
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
