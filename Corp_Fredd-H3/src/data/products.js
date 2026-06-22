// ============================================================================
// BASE DE DATOS OFICIAL - CATÁLOGO H3 Y HB MAX
// ============================================================================

// ============================================================================
// 1. IMPORTACIONES DE IMÁGENES Y PDFs
// ============================================================================
import h3 from '../assets/logos/h3.png'

// CATÁLOGO GENERAL (Respaldo)
import pdfH3 from '../assets/pdf/H3 CATALOGO.pdf'  
// import manualTanques from '../assets/pdf/manual_tanques.pdf';
// import certISO from '../assets/pdf/certificado_iso.pdf';

// 📄 NUEVO: IMPORTACIÓN DE FICHAS TÉCNICAS INDIVIDUALES
// Asegúrate de tener estos archivos o cambiar los nombres por los reales
import fichaCodo90 from '../assets/pdf/FICHA TECNICA CODO.pdf'; // Reemplazar por ficha real
import fichaElectrobombas from '../assets/pdf/H3 CATALOGO.pdf'; // Reemplazar por ficha real
import fichaTanques from '../assets/pdf/H3 CATALOGO.pdf'; // Reemplazar por ficha real
import fichatee from '../assets/pdf/FICHA TECNICA TEE.pdf';
import fichaunion from '../assets/pdf/FICHA TECNICA UNION.pdf';
import fichanipple from '../assets/pdf/FICHA TECNICA NIPPLE.pdf';
import fichacodoinserto from '../assets/pdf/FICHA TECNICA CODO INSERTO.pdf';
import fichateeinserto from '../assets/pdf/FICHA TECNICA TEE INSERTO.pdf';







// IMÁGENES DE PRODUCTOS
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

// ============================================================================
// 2. CATEGORÍAS BASADAS EN EL CATÁLOGO H3 2026
// ============================================================================
export const CATEGORIAS = [
  { id: 'agua-caliente', nombre: 'Agua Caliente (PPH)' },
  { id: 'agua-fria', nombre: 'Agua Fría y Desagüe (PVC)' },
  { id: 'tanques', nombre: 'Tanques y Biodigestores' },
  { id: 'electrobombas', nombre: 'Electrobombas HB Max' }
];

// ============================================================================
// 3. PRODUCTOS CLASIFICADOS
// ============================================================================
export const PRODUCTOS = [
  // --- SECCIÓN: AGUA CALIENTE (PPH) ---
  {
    id: 'h3-codo-90',
    nombre: 'CODO 90°',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-COD-90',
    descripcion: 'Codo para agua caliente y fria en material de polipropileno.',
    caracteristicas: ['codo de 90°.', 'union a rosca.', 'color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img01h3],
    fichaTecnica: fichaCodo90 // <-- AQUÍ SE ASIGNA LA FICHA ESPECÍFICA
  },
  {
    id: 'h3-tee',
    nombre: 'TEE',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-TEE-PPH',
    descripcion: 'Tee para agua caliente y fria en material de polipropileno.',
    caracteristicas: ['union a rosca.', 'color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img02h3],
    fichaTecnica: fichatee
    // Al NO poner "fichaTecnica" aquí, el sistema abrirá el Catálogo General automáticamente
  },
  {
    id: 'h3-union',
    nombre: 'UNION',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-UNI-PPH',
    descripcion: 'Union para agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Union.', 'Union a rosca.', 'Color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img03h3, img04h3],
    fichaTecnica: fichaunion
  },
  {
    id: 'h3-nipple',
    nombre: 'NIPPLE',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-NIP-PPH',
    descripcion: 'Nipple para union, agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Niple.', 'Union a rosca.', 'Color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '11/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
      { Medida: '2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato'},
    ],
    imagenes: [img05h3],
    fichaTecnica: fichanipple
  },
  {
    id: 'h3-codo-inserto',
    nombre: 'CODO INSERTO 90°',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-CIN-90-MET',
    descripcion: 'Codo inserto con union de metal de un lado, agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Codo inserto.', 'Union a rosca.', 'Color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img06h3],
    fichaTecnica: fichacodoinserto
  },
  {
    id: 'h3-tee-inserto',
    nombre: 'TEE INSERTO',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-TIN-MET',
    descripcion: 'Tee inserto con union de metal de un lado, agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Tee inserto.', 'Union a rosca.', 'Color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img07h3],
    fichaTecnica: fichateeinserto
  },
  {
    id: 'h3-union-inserto',
    nombre: 'UNION INSERTO',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-UIN-MET',
    descripcion: 'Union inserto con union de metal de un lado, agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Union Inserto.', 'Union a rosca.', 'Color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img08h3]
  },
  {
    id: 'h3-union-universal',
    nombre: 'UNION UNIVERSAL',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-UUN-PPH',
    descripcion: 'Union universal para agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Union Universal.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-RED-INT',
    descripcion: 'Reduccion interna agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Reduccion Interna.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-RED-EXT',
    descripcion: 'Reduccion externa agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Reduccion Externa.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-RED-BUS',
    descripcion: 'Reduccion bushing agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Reduccion Bushing.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-TAP-HEM',
    descripcion: 'Tapon hembra agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Tapon Hembra.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-TAP-MAC-01',
    descripcion: 'Tapon macho agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Tapon Macho.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-TAP-MAC-02',
    descripcion: 'Tapon macho agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Tapon Macho.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-UNC-PPH',
    descripcion: 'Union conector agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Union Conector.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-CUR-MIX',
    descripcion: 'Curva mixto agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Curva Mixto.', 'Union a rosca.', 'Color marron.'],
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
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-TUB-6MT',
    descripcion: 'Tubo de 6 mts agua caliente y fria en material de polipropileno.',
    caracteristicas: ['Tubo 6 Mts.', 'Union a rosca.', 'Color marron.'],
    especificaciones: [
      { Medida: '1/2"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '3/4"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
      { Medida: '1"', Color: 'Marron', Material: 'PPH', Presion_Nominal: '16 Bar', Marca: 'H3', Tipo_de_rosca: 'BSPT', stock: 'Inmediato' },
    ],
    imagenes: [img018h3]
  },
  {
    id: 'h3-llave-ducha',
    nombre: 'LLAVE DE DUCHA',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-LLV-DUCHA',
    descripcion: 'Perfectos para uso en viviendas, ya que ofrecen una excelente resistencia quimica.',
    caracteristicas: ['Manija de pomo', 'Union a rosca.', 'Agua Caliente / Fria.'],
    especificaciones: [
      { Medida: '1/2"', Material: 'Laton', Aplicacion: 'Ducha', stock: 'Inmediato' },
    ],
    imagenes: [img032h3, img033h3]
  },
  {
    id: 'h3-succion-cafe',
    nombre: 'SUCCION CAFE',
    categoria: 'agua-caliente',
    marca: 'H3',
    codigoBase: 'H3-SUC-CF',
    descripcion: 'Con un diseño de alta calidad en PVC resistente, esta válvula garantiza un flujo de agua eficiente y seguro.',
    caracteristicas: ['Facil Instalacion',],
    especificaciones: [
      { Medida: '1"', Material: 'Pvc', Mecanismo: 'Rosca', Color: 'Cafe', stock: 'Disponible' },
    ],
    imagenes: [img048h3]
  },

  // --- SECCIÓN: AGUA FRÍA Y DESAGÜE (PVC) ---
  {
    id: 'h3-llave-paso-rojo',
    nombre: 'LLAVE DE PASO MANGO ROJO',
    categoria: 'agua-fria',
    marca: 'H3',
    codigoBase: 'H3-LLP-MROJO',
    descripcion: 'Diseñada para controlar el flujo de agua en instalaciones domesticas e industriales ligeras.',
    caracteristicas: ['Mango mariposa', 'Union a rosca.', 'Agua fria.'],
    especificaciones: [
      { Medida: '1/2"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
    ],
    imagenes: [img026h3, img027h3]
  },
  {
    id: 'h3-llave-paso-celeste',
    nombre: 'LLAVE DE PASO MANGO CELESTE',
    categoria: 'agua-fria',
    marca: 'H3',
    codigoBase: 'H3-LLP-MCELESTE',
    descripcion: 'Perfectos para uso en viviendas.',
    caracteristicas: ['Mango mariposa', 'Union a rosca.', 'Agua fria.'],
    especificaciones: [
      { Medida: '1/2"', Rosca: 'ISO 7/1', Durabilidad: '25000 ciclos', Presion_Nominal: '10 Bar', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
    ],
    imagenes: [img028h3, img029h3]
  },
  {
    id: 'h3-llave-paso-inserto',
    nombre: 'LLAVE DE PASO INSERTO',
    categoria: 'agua-fria',
    marca: 'H3',
    codigoBase: 'H3-LLP-INSRT',
    descripcion: 'Perfectos para uso en viviendas, ya que ofrecen una excelente resistencia quimica.',
    caracteristicas: ['Mango 1/4', 'Union a rosca.', 'Agua fria.'],
    especificaciones: [
      { Medida: '1/2"', Material: 'UPVC', Mecanismo: 'Bola de 90° grados', Operacion: 'Palanca Superior', Marca: 'H3', Temperatura: '38° C', stock: 'Inmediato' },
    ],
    imagenes: [img030h3]
  },
  {
    id: 'h3-llave-paso-pp',
    nombre: 'LLAVE DE PASO POLIPROPENO',
    categoria: 'agua-fria',
    marca: 'H3',
    codigoBase: 'H3-LLP-PLP',
    descripcion: 'Perfectos para uso en viviendas, ya que ofrecen una excelente resistencia quimica.',
    caracteristicas: ['Mango 1/4', 'Union a rosca.', 'Agua fria.'],
    especificaciones: [
      { Medida: '1/2"', Material: 'PPH', Funcion: 'Liquidos / Gases', Aplicacion: 'Agua / Aceite / Gas', Marca: 'H3', Instalacion: 'Cualquier posocion', stock: 'Inmediato' },
    ],
    imagenes: [img031h3]
  },
  {
    id: 'h3-valvula-mini',
    nombre: 'VALVULA MINI NEGRO',
    categoria: 'agua-fria',
    marca: 'H3',
    codigoBase: 'H3-VLV-MINI',
    descripcion: 'Con un design de alta calidad en polipropileno, esta válvula garantiza un flujo de agua eficiente y seguro.',
    caracteristicas: ['Facil Instalacion', 'Union rosca',],
    especificaciones: [
      { Medida: '1"', Material: 'Polipropileno', Mecanismo: 'Rosca', Color: 'Negro', stock: 'Disponible' },
    ],
    imagenes: [img046h3]
  },
  {
    id: 'h3-valvula-pie',
    nombre: 'VALVULA DE PIE GRIS',
    categoria: 'agua-fria',
    marca: 'H3',
    codigoBase: 'H3-VLV-PIE',
    descripcion: 'Con un diseño de alta calidad en PVC resistente, esta válvula garantiza un flujo de agua eficiente y seguro.',
    caracteristicas: ['Facil Instalacion',],
    especificaciones: [
      { Medida: '1"', Material: 'pvc', Mecanismo: 'Rosca', Color: 'Gris', stock: 'Disponible' },
      { Medida: '11/2"', Material: 'pvc', Mecanismo: 'Rosca', Color: 'Gris', stock: 'Disponible' },
    ],
    imagenes: [img045h3]
  },

  // --- SECCIÓN: ELECTROBOMBAS HB MAX ---
  {
    id: 'h3-electrobomba-05hp-centrifuga',
    nombre: 'ELECTROBOMBA 0.5 HP CENTRIFUGA',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-ELB-05CF',
    descripcion: 'Doméstico, para abastecimiento de agua limpia en casas, apartamentos, etcétera.',
    caracteristicas: ['50 minutos de trabajo por 20 minutos de descanso.', '100% de Cobre Puro.', 'Tecnologia Coreana.'],
    especificaciones: [
      { Potenia: '370W 0.5HP', Diametro: '1"', Altura: '23 M', Caudal: '5400 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img019h3],
    fichaTecnica: fichaElectrobombas // <-- OTRA ASIGNACIÓN ESPECÍFICA
  },
  {
    id: 'h3-electrobomba-05hp-periferica',
    nombre: 'ELECTROBOMBA 0.5 HP PERIFERICA',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-ELB-05PF',
    descripcion: 'Doméstico, para abastecimiento de agua limpia en casas, apartamentos, etcétera.',
    caracteristicas: ['50 minutos de trabajo por 20 minutos de descanso.', '100% de Cobre Puro.', 'Tecnologia Coreana.'],
    especificaciones: [
      { Potenia: '370W 0.5HP', Diametro: '1"', Altura: '32 M', Caudal: '2100 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img020h3],
    fichaTecnica: fichaElectrobombas
  },
  {
    id: 'h3-electrobomba-1hp-centrifuga',
    nombre: 'ELECTROBOMBA  1HP CENTRIFUGA',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-ELB-10CF',
    descripcion: 'Doméstico, para abastecimiento de agua limpia en casas, apartamentos, etcétera.',
    caracteristicas: ['50 minutos de trabajo por 20 minutos de descanso.', '100% de Cobre Puro.', 'Tecnologia Coreana.'],
    especificaciones: [
      { Potenia: '750W 1HP', Diametro: '1"', Altura: '28 M', Caudal: '6000 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img019h3],
    fichaTecnica: fichaElectrobombas
  },
  {
    id: 'h3-electrobomba-sumergible-400w',
    nombre: 'ELECTROBOMBA SUMERGIBLE 400W',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-EBS-400W',
    descripcion: 'Con interruptor flotante y motor refrigerado por agua.',
    caracteristicas: ['Larga vida util.', 'Para aguas turbias.', 'Operacion silenciosa.'],
    especificaciones: [
      { Potenia: '400W ', Diametro: '1"x11/2"', Altura: '5 M', Caudal: '7800 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img021h3],
    fichaTecnica: fichaElectrobombas
  },
  {
    id: 'h3-electrobomba-sumergible-750w',
    nombre: 'ELECTROBOMBA SUMERGIBLE 750W',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-EBS-750W',
    descripcion: 'Con interruptor flotante y motor refrigerado por agua.',
    caracteristicas: ['Larga vida util.', 'Para aguas turbias.', 'Operacion silenciosa.'],
    especificaciones: [
      { Potenia: '750W ', Diametro: '1"x11/2"', Altura: '8 M', Caudal: '13800 L/H', Marca: 'H3', Succion: '8 M', stock: 'Disponible' },
    ],
    imagenes: [img021h3],
    fichaTecnica: fichaElectrobombas
  },
  {
    id: 'h3-electrobomba-lapiz-05hp',
    nombre: 'ELECTROBOMBA SUMERGIBLE TIPO LAPIZ 0.5HP',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-EBL-05HP',
    descripcion: 'Utilizada par riego, pulverizacion de jardineria.',
    caracteristicas: ['Alimentacion de tanques elevados.', 'Industria y Mineria.', 'Redes Domesticas.'],
    especificaciones: [
      { Potenia: '370W', Diametro: '1"', Altura: '59 M', Caudal: '32.1 Gal/Min 7.3M 3/H', Marca: 'H3', Etapas: '6', stock: 'Disponible' },
    ],
    imagenes: [img022h3],
    fichaTecnica: fichaElectrobombas
  },
  {
    id: 'h3-electrobomba-lapiz-1hp',
    nombre: 'ELECTROBOMBA SUMERGIBLE TIPO LAPIZ 1HP',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-EBL-10HP',
    descripcion: 'Utilizada par riego, pulverizacion de jardineria.',
    caracteristicas: ['Alimentacion de tanques elevados.', 'Industria y Mineria.', 'Redes Domesticas.'],
    especificaciones: [
      { Potenia: '750W', Diametro: '1"', Altura: '74 M', Caudal: '32.1 Gal/Min 7.3M 3/H', Marca: 'H3', Etapas: '7', stock: 'Disponible' },
    ],
    imagenes: [img022h3],
    fichaTecnica: fichaElectrobombas
  },
  {
    id: 'h3-electronivel',
    nombre: 'ELECTRONIVEL',
    categoria: 'electrobombas',
    marca: 'H3',
    codigoBase: 'H3-0022',
    descripcion: 'Controla el encendido y apagado de la bomba al ser instalado en el tanque.',
    caracteristicas: ['Contrapeso para regular el nivel de profundidad.', 'Plastico resistente y duradero.',],
    especificaciones: [
      { Material: 'Polipropeno', Color: 'Negro', Conexion: 'Alambrico', Amperaje: '4-15 A', Marca: 'H3', Voltaje: '110-120v', stock: 'Disponible' },
    ],
    imagenes: [img023h3]
  },

  // --- SECCIÓN: TANQUES Y BIODIGESTORES ---
  {
    id: 'h3-brazo-flotador',
    nombre: 'JUEGO DE BRAZO Y FLOTADOR',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-JBR-FLOT',
    descripcion: 'Frabricado con plastico de altra risistencia.',
    caracteristicas: ['Plastico resistente y duradero.',],
    especificaciones: [
      { Material: 'Polietileno', Color: 'Negro', Medida: '36 cm 3/4", 1/2"', Marca: 'H3', stock: 'Disponible' },
    ],
    imagenes: [img024h3, img025h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-tanque-700l',
    nombre: 'TANQUE ELEVADO 700 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-TANQ-700L',
    descripcion: 'Retiene tierra y sedimentos evitando que se tapen las tuberias y brindando agua limpia y transparente de la mejor calidad.',
    caracteristicas: ['Anti bacterias', 'Filtro Hydronet.',],
    especificaciones: [
      { Medida: '700 L', Material: 'Polietileno', Diametro: '97', Conexion: '11/2"x3/4"', stock: 'Disponible' },
    ],
    imagenes: [img034h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-tanque-1200l',
    nombre: 'TANQUE ELEVADO 1200 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-TANQ-1200L',
    descripcion: 'Retiene tierra y sedimentos evitando que se tapen las tuberias y brindando agua limpia y transparente de la mejor calidad.',
    caracteristicas: ['Anti bacterias', 'Filtro Hydronet.',],
    especificaciones: [
      { Medida: '1200 L', Material: 'Polietileno', Diametro: '97', Conexion: '11/2"x3/4"', stock: 'Disponible' },
    ],
    imagenes: [img035h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-tanque-2600l',
    nombre: 'TANQUE ELEVADO 2600 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-TANQ-2600L',
    descripcion: 'Retiene tierra y sedimentos evitando que se tapen las tuberias y brindando agua limpia y transparente de la mejor calidad.',
    caracteristicas: ['Anti bacterias', 'Filtro Hydronet.',],
    especificaciones: [
      { Medida: '2600 L', Material: 'Polietileno', Diametro: '97', Conexion: '2"x3/4"', stock: 'Disponible' },
    ],
    imagenes: [img036h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-biodigestor-600l',
    nombre: 'BIO-DIGESTOR 600 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-BIO-DIG-600',
    descripcion: 'Sistema para el tratamiento primario de las aguas residuales domesticas mediante un proceso de retención y degradación séptica de la materia orgánica.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '600 L', Material: 'Polietileno', Altura: '149 cm', Conexion: '2"', stock: 'Disponible' },
    ],
    imagenes: [img037h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-biodigestor-1300l',
    nombre: 'BIO-DIGESTOR 1300 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-BIO-DIG-1300',
    descripcion: 'Sistema para el tratamiento primario de las aguas residuales domesticas mediante un proceso de retención y degradación séptica de la materia orgánica.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '1300 L', Material: 'Polietileno', Altura: '149 cm', Conexion: '2"', stock: 'Disponible' },
    ],
    imagenes: [img038h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-biodigestor-3000l',
    nombre: 'BIO-DIGESTOR 3000 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-BIO-DIG-3000',
    descripcion: 'Sistema para el tratamiento primario de las aguas residuales domesticas mediante un proceso de retención y degradación séptica de la materia orgánica.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '3000 L', Material: 'Polietileno', Altura: '149 cm', Conexion: '2"', stock: 'Disponible' },
    ],
    imagenes: [img039h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-cisterna-1200l',
    nombre: 'CISTERNA 1200 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-CIS-1200L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '1200 L', Material: 'Polietileno', Altura: '145 cm', Diametro: '1.10"', stock: 'Disponible' },
    ],
    imagenes: [img040h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-cisterna-2800l',
    nombre: 'CISTERNA 2800 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-CIS-2800L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '2800 L', Material: 'Polietileno', Altura: '178 cm', Diametro: '1.56"', stock: 'Disponible' },
    ],
    imagenes: [img041h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-cisterna-5000l',
    nombre: 'CISTERNA 5000 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-CIS-5000L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '5000 L', Material: 'Polietileno', Altura: '1.70 cm', Diametro: '2.20"', stock: 'Disponible' },
    ],
    imagenes: [img042h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-cisterna-10000l',
    nombre: 'CISTERNA 10000 L',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-CIS-10000L',
    descripcion: 'La cisterna cuenta con garantía de por vida y con una exclusiva protección antibacterial interior que protege a tu familia porque reduce la reproducción de bacterias y microbios.',
    caracteristicas: ['Autolimpiable',],
    especificaciones: [
      { Medida: '10000 L', Material: 'Polietileno', Altura: '3.26 cm', Diametro: '2.20"', stock: 'Disponible' },
    ],
    imagenes: [img043h3],
    fichaTecnica: fichaTanques
  },
  {
    id: 'h3-brida',
    nombre: 'BRIDA',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-BRI-PPH',
    descripcion: 'Cuerpo de polipropileno que nunca se oxida.',
    caracteristicas: ['Facil Instalacion',],
    especificaciones: [
      { Medida: '11/2"', Material: 'Polipropileno', Mecanismo: 'Rosca', Color: 'Negro', stock: 'Disponible' },
    ],
    imagenes: [img044h3]
  },
  {
    id: 'h3-valvula-multiconector',
    nombre: 'VALVULA MULTICONECTOR',
    categoria: 'tanques',
    marca: 'H3',
    codigoBase: 'H3-VLV-MULTI',
    descripcion: 'Ideal para conectar al tanque y tuberias de forma segura y eficiente.',
    caracteristicas: ['Facil Instalacion',],
    especificaciones: [
      { Medida: '11/2"x3/4"', Material: 'Polipropileno', Mecanismo: '1/4" Giro', Color: 'Negro y Azul', stock: 'Disponible' },
    ],
    imagenes: [img047h3]
  },
];

// ============================================================================
// 4. CATÁLOGOS PDF OFICIALES
// ============================================================================

// ... (tu lista de productos H3 está aquí en el medio) ...

// Al final de products.js
export const CATALOGOS = [
  // 1. EJEMPLO CON UN ARCHIVO LOCAL (Importado arriba)



  { 
    id: 1, 
    titulo: 'Manual de Instalación Tanques H3', 
    categoria: 'Manuales', // Esta etiqueta aparece visualmente en la tarjeta
    tamano: '3.5 MB', 
    fecha: 'Marzo 2026', 
    enlacePdf: pdfH3 // Usa la variable que importaste arriba
  },

  // 2. EJEMPLO CON GOOGLE DRIVE (Súper Escalable)
  { 
    id: 2, 
    titulo: 'Ficha Técnica Codo 90° PPH', 
    categoria: 'Ficha Técnica', 
    tamano: '1.2 MB', 
    fecha: '2026', 
    // Pegas directamente el link de Drive. 
    // El sistema es inteligente y lo transformará en un visor incrustado automáticamente.
    // enlacePdf: 'https://drive.google.com/file/d/1EjemploDeTuIdDeDriveX/view?usp=sharing'
    enlacePdf:fichaCodo90
  },

  // 3. OTRO EJEMPLO MÁS
  { 
    id: 3, 
    titulo: 'Certificado de Calidad ISO 9001 - H3', 
    categoria: 'Certificado', 
    tamano: '850 KB', 
    fecha: 'Actualizado', 
    enlacePdf: pdfH3 
  },

  { 
    id: 4, 
    titulo: 'Catalogo H3 - 2026', 
    categoria: 'Catalogo', 
    tamano: '850 KB', 
    fecha: 'Actualizado', 
    enlacePdf: pdfH3 
  }

  
  // ¡Puedes agregar 1000 objetos más aquí y el buscador los encontrará al instante!
];