// ============================================================================
// BASE DE DATOS MAESTRA - INDUSTRIAS FREDD S.A.C.
// ============================================================================

// ============================================================================
// 1. IMPORTACIONES TRADICIONALES (Al inicio del archivo)
// ============================================================================
// Importamos las imágenes desde '../assets/img/' relativo a la carpeta 'data'

import h3 from '../assets/logos/h3.png'
import duroxa from '../assets/logos/duroxa.png'
import storck from  '../assets/logos/storck.png'
import hinox from '../assets/logos/hinox.png'
// CATALOGOS
import pdf1 from '../assets/pdf/H3 CATALOGO.pdf'  
import pdf2 from '../assets/pdf/H3 CATALOGO.pdf'
import pdf3 from '../assets/pdf/H3 CATALOGO.pdf'

// =================================================================================
// LINEA DE PRODUCTOS H3
// =================================================================================

import img01h3 from '../assets/img/h3/CODO_90.png';
import img02h3 from '../assets/img/h3/dfdf.png';
import img03h3 from '../assets/img/h3/union.png';
import img04h3 from '../assets/img/h3/union2.png';
import img05h3 from '../assets/img/h3/nipplep.png';
import img06h3 from '../assets/img/h3/codoinserto.png';
import img07h3 from '../assets/img/h3/teeinserto.png';
import img08h3 from '../assets/img/h3/UNIONINSERTO.png';
import img09h3 from '../assets/img/h3/universal2.png';
import img010h3 from '../assets/img/h3/universalrojo.png';
import img011h3 from '../assets/img/h3/REDINTERNA.png';
import img012h3 from '../assets/img/h3/REDEXTERNA.png';
import img013h3 from '../assets/img/h3/bushingde1atrescuartos.png';
import img014h3 from '../assets/img/h3/taponhembra.png';
import img015h3 from '../assets/img/h3/taponmacho.png';
import img016h3 from '../assets/img/h3/adaptadortank.png';
import img017h3 from '../assets/img/h3/CURVOMIXTO.png';
import img018h3 from '../assets/img/h3/tubopph.png';
import img019h3 from '../assets/img/h3/ELECTROBOMBA.png';
import img020h3 from '../assets/img/h3/electrobomba05hp.png';
import img021h3 from '../assets/img/h3/electrobomba400w.png';
import img022h3 from '../assets/img/h3/electrobombalapiz.jpg';
import img023h3 from '../assets/img/h3/electronivel.png';
import img024h3 from '../assets/img/h3/flotador.png';
import img025h3 from '../assets/img/h3/valvulaflotador.png';
import img026h3 from '../assets/img/h3/llavedepasorojo.png';
import img027h3 from '../assets/img/h3/llavedepaso3.png';
import img028h3 from '../assets/img/h3/llavedepasoceleste2.png';
import img029h3 from '../assets/img/h3/llavedepasoceleste.png';
import img030h3 from '../assets/img/h3/llavedepasoinserto.png';
import img031h3 from '../assets/img/h3/LLAVEDEPASOPP.png';
import img032h3 from '../assets/img/h3/llaveduchaazul.png';
import img033h3 from '../assets/img/h3/llaveducharojo.png';
import img034h3 from '../assets/img/h3/TANQUE.png';
import img035h3 from '../assets/img/h3/TANQUE1200.png';
import img036h3 from '../assets/img/h3/TANQUE2000.png';
import img037h3 from '../assets/img/h3/DIGESTOR600.png';
import img038h3 from '../assets/img/h3/DIGESTOR1300.png';
import img039h3 from '../assets/img/h3/DIGESTOR3000.png';
import img040h3 from '../assets/img/h3/CISTERNA1200.png';
import img041h3 from '../assets/img/h3/CISTERNA2800.png';
import img042h3 from '../assets/img/h3/CISTERNA5000.png';
import img043h3 from '../assets/img/h3/CISTERNA10000.png';
import img044h3 from '../assets/img/h3/brida.png';
import img045h3 from '../assets/img/h3/valvulagris.png';
import img046h3 from '../assets/img/h3/valvulamini.png';
import img047h3 from '../assets/img/h3/valvulamulticonector.png';
import img048h3 from '../assets/img/h3/valvulapiecafe.png';

// =================================================================================
// LINEA DE PRODUCTOS DUROXA
// =================================================================================

import img01 from '../assets/img/dx/DISCOCORTE4.png';
import img02 from '../assets/img/dx/DISCOCORTE7.png';
import img03 from '../assets/img/dx/DISCOCORTE14.png';
import img04 from '../assets/img/dx/ELECTRODO.png';
import img05 from '../assets/img/dx/ELECTRODOx5.png';
import img06 from '../assets/img/dx/lija1.png';
import img07 from '../assets/img/dx/lija2.png';
import img08 from '../assets/img/dx/lija3.png';
import img09 from '../assets/img/dx/lijarojo1.png';
import img010 from '../assets/img/dx/lijarojo2.png';
import img011 from '../assets/img/dx/DISCOFLAT.png';
import img012 from '../assets/img/dx/hoja.png';
// ============================================================================
// CONFIGURACIÓN DE ENLACES EXTERNOS PARA LAS LÍNEAS DE PRODUCTOS
// Edita aquí las URLs de redirección para cada categoría de la Home
// ============================================================================
export const ENLACES_LINEAS = {
  'H3': 'https://h3max.com',
  'DUROXA':'https://duroxa.net/',
  'storck':'https://storckpro.com',
  'hinox':'https://hinox-sitio-oficial.com'
};

export const CATEGORIAS = [
  { 
    id: 'H3', 
    nombre: 'H3', 
    marca: 'H3', 
    logo: 'H3', 
    imagen: [h3] 
  },
  { 
    id: 'DUROXA', 
    nombre: 'DUROXA', 
    marca: 'DUROXA', 
    logo: 'DUROXA', 
    imagen: [duroxa] 
  },
  { 
    id: 'storck', 
    nombre: 'STORCK', 
    marca: 'PAVCO', 
    logo: 'GASFITERÍA', 
    imagen: [storck]
  },
  { 
    id: 'hinox', 
    nombre: 'HINOX', 
    marca: 'HINOX', 
    logo: 'HINOX', 
    imagen: [hinox] 
  }
];


export const PRODUCTOS = [
  // ============================================================
  // LINEA H3
  // ============================================================
  {
    id: 'h3-codo-90',
    nombre: 'CODO 90°',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-COD-90',
    descripcion: 'Codo para agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'codo de 90°.',
      'union a rosca.',
      'color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img01h3]
  },
  {
    id: 'h3-tee',
    nombre: 'TEE',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TEE-PPH',
    descripcion: 'Codo para agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'codo de 90°.',
      'union a rosca.',
      'color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img02h3]
  },
  {
    id: 'h3-union',
    nombre: 'UNION',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-UNI-PPH',
    descripcion: 'Union para agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Union.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img03h3, img04h3]
  },
  {
    id: 'h3-nipple',
    nombre: 'NIPPLE',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-NIP-PPH',
    descripcion: 'Nipple para union, agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Niple.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img05h3]
  },
  {
    id: 'h3-codo-inserto',
    nombre: 'CODO INSERTO 90°',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-CIN-90-MET',
    descripcion: 'Codo inserto con union de metal de un lado, agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Codo inserto.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img06h3]
  },
  {
    id: 'h3-tee-inserto',
    nombre: 'TEE INSERTO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TIN-MET',
    descripcion: 'Tee inserto con union de metal de un lado, agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Tee inserto.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img07h3]
  },
  {
    id: 'h3-union-inserto',
    nombre: 'UNION INSERTO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-UIN-MET',
    descripcion: 'Union inserto con union de metal de un lado, agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Union Inserto.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img08h3]
  },
  {
    id: 'h3-union-universal',
    nombre: 'UNION UNIVERSAL',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-UUN-PPH',
    descripcion: 'Union universal para agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Union Universal.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img09h3, img010h3]
  },
  {
    id: 'h3-reduccion-interna',
    nombre: 'REDUCCION INTERNA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-RED-INT',
    descripcion: 'Reduccion interna agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Reduccion Interna.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"*3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"*1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"*1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img011h3]
  },
  {
    id: 'h3-reduccion-externa',
    nombre: 'REDUCCION EXTERNA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-RED-EXT',
    descripcion: 'Reduccion externa agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Reduccion Externa.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"*3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"*1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"*1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img012h3]
  },
  {
    id: 'h3-reduccion-bushing',
    nombre: 'REDUCCION BUSHING',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-RED-BUS',
    descripcion: 'Reduccion bushing agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Reduccion Bushing.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"*3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"*1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"*1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img013h3]
  },
  {
    id: 'h3-tapon-hembra',
    nombre: 'TAPON HEMBRA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TAP-HEM',
    descripcion: 'Tapon hembra agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Tapon Hembra.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img014h3]
  },
  {
    id: 'h3-tapon-macho-1',
    nombre: 'TAPON MACHO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TAP-MAC-01',
    descripcion: 'Tapon macho agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Tapon Macho.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img015h3]
  },
  {
    id: 'h3-tapon-macho-2',
    nombre: 'TAPON MACHO INDUSTRIAL',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TAP-MAC-02',
    descripcion: 'Tapon macho agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Tapon Macho.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img015h3]
  },
  {
    id: 'h3-union-conector',
    nombre: 'UNION CONECTOR',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-UNC-PPH',
    descripcion: 'Union conector agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Union Conector.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img016h3]
  },
  {
    id: 'h3-curva-mixto',
    nombre: 'CURVA MIXTO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-CUR-MIX',
    descripcion: 'Curva mixto agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Curva Mixto.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img017h3]
  },
  {
    id: 'h3-tubo-pph',
    nombre: 'TUBO PPH',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TUB-6MT',
    descripcion: 'Tubo de 6 mts agua caliente y fria en material de polipropileno.',
    caracteristicas: [
      'Tubo 6 Mts.',
      'Union a rosca.',
      'Color marron.'
    ],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img018h3]
  },
  {
    id: 'h3-electrobomba-05hp-centrifuga',
    nombre: 'ELECTROBOMBA 0.5 HP CENTRIFUGA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-ELB-05CF',
    descripcion: 'Doméstico, para abastecimiento de agua limpia en casas, apartamentos, etcétera.',
    caracteristicas: [
      '50 minutos de trabajo por 20 minutos de descanso.',
      '100% de Cobre Puro.',
      'Tecnologia Coreana.'
    ],
    especificaciones: [
      { Potenia: '370W 0.5HP', Diametro: '1"', Altura: '23 M', Caudal: '5400 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img019h3]
  },
  {
    id: 'h3-electrobomba-05hp-periferica',
    nombre: 'ELECTROBOMBA 0.5 HP PERIFERICA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-ELB-05PF',
    descripcion: 'Doméstico, para abastecimiento de agua limpia en casas, apartamentos, etcétera.',
    caracteristicas: [
      '50 minutos de trabajo por 20 minutos de descanso.',
      '100% de Cobre Puro.',
      'Tecnologia Coreana.'
    ],
    especificaciones: [
      { Potenia: '370W 0.5HP', Diametro: '1"', Altura: '32 M', Caudal: '2100 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img020h3]
  },
  {
    id: 'h3-electrobomba-1hp-centrifuga',
    nombre: 'ELECTROBOMBA  1HP CENTRIFUGA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-ELB-10CF',
    descripcion: 'Doméstico, para abastecimiento de agua limpia en casas, apartamentos, etcétera.',
    caracteristicas: [
      '50 minutos de trabajo por 20 minutos de descanso.',
      '100% de Cobre Puro.',
      'Tecnologia Coreana.'
    ],
    especificaciones: [
      { Potenia: '750W 1HP', Diametro: '1"', Altura: '28 M', Caudal: '6000 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img019h3]
  },
  {
    id: 'h3-electrobomba-sumergible-400w',
    nombre: 'ELECTROBOMBA SUMERGIBLE 400W',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-EBS-400W',
    descripcion: 'Con interruptor flotante y motor refrigerado por agua.',
    caracteristicas: [
      'Larga vida util.',
      'Para aguas turbias.',
      'Operacion silenciosa.'
    ],
    especificaciones: [
      { Potenia: '400W ', Diametro: '1"x11/2"', Altura: '5 M', Caudal: '7800 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img021h3]
  },
  {
    id: 'h3-electrobomba-sumergible-750w',
    nombre: 'ELECTROBOMBA SUMERGIBLE 750W',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-EBS-750W',
    descripcion: 'Con interruptor flotante y motor refrigerado por agua.',
    caracteristicas: [
      'Larga vida util.',
      'Para aguas turbias.',
      'Operacion silenciosa.'
    ],
    especificaciones: [
      { Potenia: '750W ', Diametro: '1"x11/2"', Altura: '8 M', Caudal: '13800 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img021h3]
  },
  {
    id: 'h3-electrobomba-lapiz-05hp',
    nombre: 'ELECTROBOMBA SUMERGIBLE TIPO LAPIZ 0.5HP',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-EBL-05HP',
    descripcion: 'Utilizada par riego, pulverizacion de jardineria.',
    caracteristicas: [
      'Alimentacion de tanques elevados.',
      'Industria y Mineria.',
      'Redes Domesticas.'
    ],
    especificaciones: [
      { Potenia: '370W', Diametro: '1"', Altura: '59 M', Caudal: '32.1 Gal/Min 7.3M 3/H', Marca: 'H3', Etapas: '6', stock: 'Disponible' },
    ],
    imagenes: [img022h3]
  },
  {
    id: 'h3-electrobomba-lapiz-1hp',
    nombre: 'ELECTROBOMBA SUMERGIBLE TIPO LAPIZ 1HP',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-EBL-10HP',
    descripcion: 'Utilizada par riego, pulverizacion de jardineria.',
    caracteristicas: [
      'Alimentacion de tanques elevados.',
      'Industria y Mineria.',
      'Redes Domesticas.'
    ],
    especificaciones: [
      { Potenia: '750W', Diametro: '1"', Altura: '74 M', Caudal: '32.1 Gal/Min 7.3M 3/H', Marca: 'H3', Etapas: '7', stock: 'Disponible' },
    ],
    imagenes: [img022h3]
  },
  {
    id: 'h3-electronivel',
    nombre: 'ELECTRONIVEL',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-0022',
    descripcion: 'Controla el encendido y apagado de la bomba al ser instalado en el tanque.',
    caracteristicas: [
      'Contrapeso para regular el nivel de profundidad.',
      'Plastico resistente y duradero.',
    ],
    especificaciones: [
      { Material: 'Polipropeno', Color: 'Negro', Conexion: 'Alambrico', Amperaje: '4-15 A', Marca: 'H3', Voltaje: '110-120v', stock: 'Disponible' },
    ],
    imagenes: [img023h3]
  },
  {
    id: 'h3-brazo-flotador',
    nombre: 'JUEGO DE BRAZO Y FLOTADOR',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-JBR-FLOT',
    descripcion: 'Frabricado con plastico de altra risistencia.',
    caracteristicas: [
      'Plastico resistente y duradero.',
    ],
    especificaciones: [
      { Material: 'Polietileno', Color: 'Negro', Medida: '36 cm 3/4", 1/2"', Marca: 'H3', stock: 'Disponible' },
    ],
    imagenes: [img024h3, img025h3]
  },
  {
    id: 'h3-llave-paso-rojo',
    nombre: 'LLAVE DE PASO MANGO ROJO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-LLP-MROJO',
    descripcion: 'Diseñada para controlar el flujo de agua en instalaciones domesticas e industriales ligeras.',
    caracteristicas: [
      'Mango mariposa',
      'Union a rosca.',
      'Agua fria.'
    ],
    especificaciones: [
      { Medida: '1/2"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '3/4"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '1"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '11/2"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '2"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '3"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '4"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
    ],
    imagenes: [img026h3, img027h3]
  },
  {
    id: 'h3-llave-paso-celeste',
    nombre: 'LLAVE DE PASO MANGO CELESTE',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-LLP-MCELESTE',
    descripcion: 'Perfectos para uso en viviendas.',
    caracteristicas: [
      'Mango mariposa',
      'Union a rosca.',
      'Agua fria.'
    ],
    especificaciones: [
      { Medida: '1/2"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
    ],
    imagenes: [img028h3, img029h3]
  },
  {
    id: 'h3-llave-paso-inserto',
    nombre: 'LLAVE DE PASO INSERTO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-LLP-INSRT',
    descripcion: 'Perfectos para uso en viviendas, ya que ofrecen una excelente resistencia quimica.',
    caracteristicas: [
      'Mango 1/4',
      'Union a rosca.',
      'Agua fria.'
    ],
    especificaciones: [
      { Medida: '1/2"', Material: 'UPVC', Mecanismo: 'Bola de 90° grados', Operacion: 'Palanca Superior', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '3/4"', Material: 'UPVC', Mecanismo: 'Bola de 90° grados', Operacion: 'Palanca Superior', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
      { Medida: '1"', Material: 'UPVC', Mecanismo: 'Bola de 90° grados', Operacion: 'Palanca Superior', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
    ],
    imagenes: [img030h3]
  },
  {
    id: 'h3-llave-paso-pp',
    nombre: 'LLAVE DE PASO POLIPROPENO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-LLP-PLP',
    descripcion: 'Perfectos para uso en viviendas, ya que ofrecen una excelente resistencia quimica.',
    caracteristicas: [
      'Mango 1/4',
      'Union a rosca.',
      'Agua fria.'
    ],
    especificaciones: [
      { Medida: '1/2"', Material: 'PPH', Funcion: 'Liquidos / Gases', Aplicacion: 'Agua / Aceite / Gas', Marca: 'H3', Instalacion: 'Cualquier posocion', stock: 'Inmediato' },
    ],
    imagenes: [img031h3]
  },
  {
    id: 'h3-llave-ducha',
    nombre: 'LLAVE DE DUCHA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-LLV-DUCHA',
    descripcion: 'Perfectos para uso en viviendas, ya que ofrecen una excelente resistencia quimica.',
    caracteristicas: [
      'Manija de pomo',
      'Union a rosca.',
      'Agua Caliente / Fria.'
    ],
    especificaciones: [
      { Medida: '1/2"', Material: 'Laton', Aplicacion: 'Ducha', stock: 'Inmediato' },
    ],
    imagenes: [img032h3, img033h3]
  },
  {
    id: 'h3-tanque-700l',
    nombre: 'TANQUE ELEVADO 700 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TANQ-700L',
    descripcion: 'Retiene tierra y sedimentos evitando que se tapen las tuberias y brindando agua limpia y transparente de la mejor calidad.',
    caracteristicas: [
      'Anti bacterias',
      'Filtro Hydronet.',
    ],
    especificaciones: [
      { Medida: '700 L', Material: 'Polietileno', Diametro: '97', Conexion: '11/2"x3/4"', stock: 'Disponible' },
    ],
    imagenes: [img034h3]
  },
  {
    id: 'h3-tanque-1200l',
    nombre: 'TANQUE ELEVADO 1200 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TANQ-1200L',
    descripcion: 'Retiene tierra y sedimentos evitando que se tapen las tuberias y brindando agua limpia y transparente de la mejor calidad.',
    caracteristicas: [
      'Anti bacterias',
      'Filtro Hydronet.',
    ],
    especificaciones: [
      { Medida: '1200 L', Material: 'Polietileno', Diametro: '97', Conexion: '11/2"x3/4"', stock: 'Disponible' },
    ],
    imagenes: [img035h3]
  },
  {
    id: 'h3-tanque-2600l',
    nombre: 'TANQUE ELEVADO 2600 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-TANQ-2600L',
    descripcion: 'Retiene tierra y sedimentos evitando que se tapen las tuberias y brindando agua limpia y transparente de la mejor calidad.',
    caracteristicas: [
      'Anti bacterias',
      'Filtro Hydronet.',
    ],
    especificaciones: [
      { Medida: '2600 L', Material: 'Polietileno', Diametro: '97', Conexion: '2"x3/4"', stock: 'Disponible' },
    ],
    imagenes: [img036h3]
  },
  {
    id: 'h3-biodigestor-600l',
    nombre: 'BIO-DIGESTOR 600 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-BIO-DIG-600',
    descripcion: 'Sistema para el tratamiento primario de las aguas residuales domesticas mediante un proceso de retención y degradación séptica de la materia orgánica.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '600 L', Material: 'Polietileno', Altura: '149 cm', Conexion: '2"', stock: 'Disponible' },
    ],
    imagenes: [img037h3]
  },
  {
    id: 'h3-biodigestor-1300l',
    nombre: 'BIO-DIGESTOR 1300 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-BIO-DIG-1300',
    descripcion: 'Sistema para el tratamiento primario de las aguas residuales domesticas mediante un proceso de retención y degradación séptica de la materia orgánica.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '1300 L', Material: 'Polietileno', Altura: '149 cm', Conexion: '2"', stock: 'Disponible' },
    ],
    imagenes: [img038h3]
  },
  {
    id: 'h3-biodigestor-3000l',
    nombre: 'BIO-DIGESTOR 3000 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-BIO-DIG-3000',
    descripcion: 'Sistema para el tratamiento primario de las aguas residuales domesticas mediante un proceso de retención y degradación séptica de la materia orgánica.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '3000 L', Material: 'Polietileno', Altura: '149 cm', Conexion: '2"', stock: 'Disponible' },
    ],
    imagenes: [img039h3]
  },
  {
    id: 'h3-cisterna-1200l',
    nombre: 'CISTERNA 1200 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-CIS-1200L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '1200 L', Material: 'Polietileno', Altura: '145 cm', Diametro: '1.10"', stock: 'Disponible' },
    ],
    imagenes: [img040h3]
  },
  {
    id: 'h3-cisterna-2800l',
    nombre: 'CISTERNA 2800 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-CIS-2800L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '2800 L', Material: 'Polietileno', Altura: '178 cm', Diametro: '1.56"', stock: 'Disponible' },
    ],
    imagenes: [img041h3]
  },
  {
    id: 'h3-cisterna-5000l',
    nombre: 'CISTERNA 5000 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-CIS-5000L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '5000 L', Material: 'Polietileno', Altura: '1.70 cm', Diametro: '2.20"', stock: 'Disponible' },
    ],
    imagenes: [img042h3]
  },
  {
    id: 'h3-cisterna-10000l',
    nombre: 'CISTERNA 10000 L',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-CIS-10000L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: [
      'Autolimpiable',
    ],
    especificaciones: [
      { Medida: '10000 L', Material: 'Polietileno', Altura: '3.26 cm', Diametro: '2.20"', stock: 'Disponible' },
    ],
    imagenes: [img043h3]
  },
  {
    id: 'h3-brida',
    nombre: 'BRIDA',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-BRI-PPH',
    descripcion: 'Cuerpo de polipropileno que nunca se oxida.',
    caracteristicas: [
      'Facil Instalacion',
    ],
    especificaciones: [
      { Medida: '11/2"', Material: 'Polipropileno', Mecanismo: 'Rosca', Color: 'Negro', stock: 'Disponible' },
    ],
    imagenes: [img044h3]
  },
  {
    id: 'h3-valvula-mini',
    nombre: 'VALVULA MINI NEGRO',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-VLV-MINI',
    descripcion: 'Con un design de alta calidad en polipropileno, esta válvula garantiza un flujo de agua eficiente y seguro.',
    caracteristicas: [
      'Facil Instalacion',
      'Union rosca',
    ],
    especificaciones: [
      { Medida: '1"', Material: 'Polipropileno', Mecanismo: 'Rosca', Color: 'Negro', stock: 'Disponible' },
    ],
    imagenes: [img046h3]
  },
  {
    id: 'h3-valvula-pie',
    nombre: 'VALVULA DE PIE GRIS',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-VLV-PIE',
    descripcion: 'Con un diseño de alta calidad en PVC resistente, esta válvula garantiza un flujo de agua eficiente y seguro.',
    caracteristicas: [
      'Facil Instalacion',
    ],
    especificaciones: [
      { Medida: '1"', Material: 'pvc', Mecanismo: 'Rosca', Color: 'Gris', stock: 'Disponible' },
      { Medida: '11/2"', Material: 'pvc', Mecanismo: 'Rosca', Color: 'Gris', stock: 'Disponible' },
    ],
    imagenes: [img045h3]
  },
  {
    id: 'h3-valvula-multiconector',
    nombre: 'VALVULA MULTICONECTOR',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-VLV-MULTI',
    descripcion: 'Ideal para conectar al tanque y tuberias de forma segura y eficiente.',
    caracteristicas: [
      'Facil Instalacion',
    ],
    especificaciones: [
      { Medida: '11/2"x3/4"', Material: 'Polipropileno', Mecanismo: '1/4" Giro', Color: 'Negro y Azul', stock: 'Disponible' },
    ],
    imagenes: [img047h3]
  },
  {
    id: 'h3-succion-cafe',
    nombre: 'SUCCION CAFE',
    categoria: 'H3',
    marca: 'H3',
    codigoBase: 'H3-SUC-CF',
    descripcion: 'Con un diseño de alta calidad en PVC resistente, esta válvula garantiza un flujo de agua eficiente y seguro.',
    caracteristicas: [
      'Facil Instalacion',
    ],
    especificaciones: [
      { Medida: '1"', Material: 'Pvc', Mecanismo: 'Rosca', Color: 'Cafe', stock: 'Disponible' },
    ],
    imagenes: [img048h3]
  },

  // ============================================================
  // LINEA DUROXA
  // ============================================================
  {
    id: 'dx-disco-corte',
    nombre: 'DISCO DE CORTE 4"',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-DSC-CRT',
    descripcion: 'Disco de corte para metal adecuado para cortes rectos.',
    caracteristicas: [
      'Corte facil',
      'Abrazivo',
    ],
    especificaciones: [
      { Medida: '41/2"', Material: 'Tejido fibra de vidrio', Grano: 'Oxido de aluminio', Liga: 'Resina Organica', stock: 'Disponible' },
      { Medida: '7"', Material: 'Tejido fibra de vidrio', Grano: 'Oxido de aluminio', Liga: 'Resina Organica', stock: 'Disponible' },
      { Medida: '14"', Material: 'Tejido fibra de vidrio', Grano: 'Oxido de aluminio', Liga: 'Resina Organica', stock: 'Disponible' },
    ],
    imagenes: [img01, img02, img03]
  },
  {
    id: 'dx-electrodo',
    nombre: 'ELECTRODO',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-ELEC-GEN',
    descripcion: 'Electrodo de uso general en acero dulce.',
    caracteristicas: [
      'Corriente CA/CD',
      'Soldar chapas y perfiles delgados',
    ],
    especificaciones: [
      { Medida: '6011 3/32', AMP: '40-90', Acero: 'Suave', Caja: '20 kls.', stock: 'Disponible' },
      { Medida: '6011 1/8', AMP: '80-130', Acero: 'Suave', Caja: '20 kls.', stock: 'Disponible' },
      { Medida: '7018 1/8', AMP: '80-130', Acero: 'Suave', Caja: '20 kls.', stock: 'Disponible' },
      { Medida: '7018 5/32', AMP: '110-165', Acero: 'Suave', Caja: '20 kls.', stock: 'Disponible' },
      { Medida: '7018 3/16', AMP: '40-90', Acero: 'Suave', Caja: '20 kls.', stock: 'Disponible' },
    ],
    imagenes: [img04, img05]
  },
  {
    id: 'dx-lija-metal',
    nombre: 'LIJA METAL',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-LIJ-MET',
    descripcion: 'Ideal para eliminar oxido, limpiar y reparar superficies metalicas o no ferrosas.',
    caracteristicas: [
      'Limpiar oxido',
      'Aleacion no ferrosa',
    ],
    especificaciones: [
      { Grano: '36', Medida: '230mm 280mm', Paquete: '25', Caja: '500.', stock: 'Disponible' },
      { Grano: '40', Medida: '230mm 280mm', Paquete: '25', Caja: '500.', stock: 'Disponible' },
      { Grano: '50', Medida: '230mm 280mm', Paquete: '50', Caja: '500.', stock: 'Disponible' },
      { Grano: '60', Medida: '230mm 280mm', Paquete: '50', Caja: '500.', stock: 'Disponible' },
      { Grano: '80', Medida: '230mm 280mm', Paquete: '50', Caja: '500.', stock: 'Disponible' },
      { Grano: '100', Medida: '230mm 280mm', Paquete: '50', Caja: '500.', stock: 'Disponible' },
      { Grano: '120', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '150', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '180', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
    ],
    imagenes: [img08]
  },
  {
    id: 'dx-lija-agua',
    nombre: 'LIJA AL AGUA',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-LIJ-AGU',
    descripcion: 'Excelente en la reparacion de superficies con una mayor duracion y flexibilidad y un acabado profesional.',
    caracteristicas: [
      'Limpiar oxido',
      'Aleacion no ferrosa',
    ],
    especificaciones: [
      { Grano: '80', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '100', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '120', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '150', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '180', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '220', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '240', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '280', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '320', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '360', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '400', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '600', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '800', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '1000', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '1200', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '2000', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
    ],
    imagenes: [img06]
  },
  {
    id: 'dx-lija-seco',
    nombre: 'LIJA AL SECO',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-LIJ-SECO',
    descripcion: 'Excelente en la reparacion de superficies con una mayor duracion y flexibilidad y un acabado profesional.',
    caracteristicas: [
      'Limpiar oxido',
      'Aleacion no ferrosa',
    ],
    especificaciones: [
      { Grano: '80', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '100', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '120', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '150', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '180', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '220', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '240', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '280', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '320', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '360', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '400', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
      { Grano: '600', Medida: '230mm 280mm', Paquete: '50', Caja: '1000.', stock: 'Disponible' },
    ],
    imagenes: [img07]
  },
  {
    id: 'dx-lija-granate',
    nombre: 'LIJA GRANATE',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-LIJ-GRNT',
    descripcion: 'Ideal para eliminar oxidos, limpiar y reparar superficies metalicas o aleaciones no ferrosas.',
    caracteristicas: [
      'Limpiar oxido',
      'Aleacion no ferrosa',
    ],
    especificaciones: [
      { Grano: '40', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '60', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '80', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '100', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '120', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '150', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '180', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
      { Grano: '220', Medida: '50 Mts', Paquete: '2 Rlls', stock: 'Disponible' },
    ],
    imagenes: [img09]
  },
  {
    id: 'dx-lija-granate-circular',
    nombre: 'LIJA GRANATE CIRCULAR',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-LJC-GRA',
    descripcion: 'El disco granate es un abrasivo de uso general.',
    caracteristicas: [
      'Metal ',
      'Madera',
      'Pared',
      'Cemento',
    ],
    especificaciones: [
      { Grano: '40', Medida: '4.5"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '60', Medida: '4.5"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '80', Medida: '4.5"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '100', Medida: '4.5"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '120', Medida: '4.5"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '40', Medida: '7"', Paquete: '25 Und', Master: '1500', stock: 'Disponible' },
      { Grano: '60', Medida: '7"', Paquete: '25 Und', Master: '1500', stock: 'Disponible' },
      { Grano: '80', Medida: '7"', Paquete: '25 Und', Master: '1500', stock: 'Disponible' },
      { Grano: '100', Medida: '7"', Paquete: '25 Und', Master: '1500', stock: 'Disponible' },
      { Grano: '120', Medida: '7"', Paquete: '25 Und', Master: '1500', stock: 'Disponible' },
      { Grano: '40', Medida: '9"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '60', Medida: '9"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '80', Medida: '9"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '100', Medida: '9"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
      { Grano: '120', Medida: '9"', Paquete: '25 Und', Master: '2000', stock: 'Disponible' },
    ],
    imagenes: [img010]
  },
  {
    id: 'dx-disco-flap',
    nombre: 'DISCO FLAP POLIFAN',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-FLP-POL',
    descripcion: 'Diseñado para operaciones de desbaste, limpieza y acabado en metales ferrosos y no ferroso.',
    caracteristicas: [
      'Metal ',
      'Madera',
      'Pared',
      'Cemento',
    ],
    especificaciones: [
      { Grano: '40', Medida: '4.5"', Paquete: '50 Und', Master: '1000', stock: 'Disponible' },
      { Grano: '60', Medida: '4.5"', Paquete: '50 Und', Master: '1000', stock: 'Disponible' },
      { Grano: '80', Medida: '4.5"', Paquete: '50 Und', Master: '1000', stock: 'Disponible' },
      { Grano: '100', Medida: '4.5"', Paquete: '50 Und', Master: '1000', stock: 'Disponible' },
      { Grano: '120', Medida: '4.5"', Paquete: '50 Und', Master: '1000', stock: 'Disponible' },
    ],
    imagenes: [img011]
  },
  {
    id: 'dx-hoja-sierra',
    nombre: 'HOJA DE SIERRA',
    categoria: 'DUROXA',
    marca: 'DUROXA',
    codigoBase: 'DX-HOJ-SERRA',
    descripcion: 'Diseñadas para cortes limpios y precisos en metales.',
    caracteristicas: [
      'Buena durabilidad',
      'Rendimiento en trabajos',
      'Uso general',
      'Aplicaciones detalladas',
    ],
    especificaciones: [
      { Medida: '18 TPI', Largo: '300 mm', Paquete: '10 Und', Master: '100', stock: 'Disponible' },
      { Medida: '24 TPI', Largo: '300 mm', Paquete: '10 Und', Master: '100', stock: 'Disponible' },
    ],
    imagenes: [img012]
  }
];

// ⚠️ NOTA: Asegúrate de reemplazar "URL_DE_TU_DRIVE_X" con los IDs reales de tus archivos PDF en la nube
export const CATALOGOS = [
  { 
    id: 1, 
    titulo: 'Catálogo Herramientas Eléctricas BOSCH', 
    tamano: '12.4 MB', 
    fecha: '2026', 
    archivo: 'Catalogo_BOSCH.pdf',
    // ☁️ EJEMPLO CON DRIVE: El sistema lo detectará y aplicará el formato /preview
    enlacePdf: pdf1
  },
  { 
    id: 2, 
    titulo: 'Guía de Tuberías y Conexiones PAVCO', 
    tamano: '8.2 MB', 
    fecha: '2026', 
    archivo: 'Guia_PAVCO.pdf',
    // 🌐 EJEMPLO CON HOSTING PROPIO (Ruta Absoluta): Se cargará de manera nativa e inmediata
    enlacePdf: pdf2
  },
  { 
    id: 3, 
    titulo: 'Fichas Técnicas de Seguridad 3M', 
    tamano: '5.1 MB', 
    fecha: '2025', 
    archivo: 'Seguridad_3M.pdf',
    // 📂 EJEMPLO CON HOSTING PROPIO (Ruta Relativa al Build): Si guardas tus PDFs en la carpeta public de este proyecto
    enlacePdf: pdf3
  }
];