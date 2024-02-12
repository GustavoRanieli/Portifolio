import logo from '../assets/img/gustavo-low-resolution-logo-black-on-transparent-background.png';
import showdimagem from '../assets/img/show.png';
import progBr from '../assets/img/progbr.png';
import horadcodar from '../assets/img/horadcodar.png';
import fmu from '../assets/img/fmu.png';
import construindo from '../assets/img/construindo.png';
import perfil from '../assets/img/perfil.png';
import sobre from '../assets/img/sobre.png';
import js from '../assets/img/js.png';
import rec from '../assets/img/physics.png';
import sass from '../assets/img/sass.png';
import typscript from '../assets/img/typescript.png';
import nod from '../assets/img/node-js.png';
import git from '../assets/img/github.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import ocrImg from '../assets/img/5214651.png';
import silabasImg from '../assets/img/2807493.png';
import uMusic from '../assets/img/DevChallenger.png';
import mandarin from '../assets/img/Mandarin.png';
import englishMaster from '../assets/img/englishMasters.png';
import libras from '../assets/img/libras.png';
import portalAlfa from '../assets/img/PortalDAlfabetizacao.png';
import gerenciadorDTarefas from '../assets/img/GeradorDeTarefas.png';
import geradorDIframes from '../assets/img/GeradorDeIframes.png';
import separadorDSilabas from '../assets/img/SeparadorDeSilabas.png';
import emagrecendoSistema from '../assets/img/emagrecendoSistema.png'




type imgHead = {
    name: string,
    url?: string,
    img?: typeof logo
}

export const imgHeader:imgHead[] = [
    {
        name: 'Logoheader',
        url: '/',
        img: logo
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/gustav.ranieli/'
    },
    {
        name: 'Github',
        url: 'https://github.com/GustavoRanieli'
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/gustavo-ranieli-lemes-053793200/'
    }
]

export const portFolio: imgHead[] = [
    {
        name:'Perfil',
        img: perfil
    },
    {
        name:'Sobre',
        img: sobre
    },
    {
        name: 'Hora de Codar',
        img: horadcodar
    },
    {
        name: 'Progbr',
        img: progBr
    },
    {
        name: 'Show de Imagem',
        img: showdimagem
    },
    {
        name: 'Fmu',
        img: fmu
    },
    {
        name: 'Construindo',
        img: construindo
    },
    {
        name: 'OCR',
        img: ocrImg
    },
    {
        name: 'Silabas',
        img: silabasImg
    },
    {
        name: 'UMusic',
        img: uMusic
    },
    {
        name: 'Mandárin',
        img: mandarin
    },
    {
        name: 'EnglishMasters',
        img: englishMaster
    },
    {
        name: 'SeparadorDSilabas',
        img: separadorDSilabas
    },
    {
        name: 'GeradorDIframes',
        img: geradorDIframes
    },
    {
        name: 'GerenciadorDTarefas',
        img: gerenciadorDTarefas
    },
    {
        name: 'PortalDAlfabetizacao',
        img: portalAlfa
    },
    {
        name: 'Libras',
        img: libras
    },
    {
        name: 'emagrecendoSistema',
        img: emagrecendoSistema
    },
]

export const imgLanguages: imgHead[] = [
    {
        name: 'JavaScript',
        img: js
    },
    {
        name: 'TypeScript',
        img: typscript
    },
    {
        name: 'NodeJs',
        img: nod
    },
    {
        name: 'Sass',
        img: sass
    },
    {
        name: 'React',
        img: rec
    },
    {
        name: 'GitHub',
        img: git
    },
    {
        name: 'Html',
        img: html
    },
    {
        name: 'Css',
        img: css
    }
]
    

