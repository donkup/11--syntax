// IMPORT
import { suma } from './components/algebra/suma.js';
import { dalyba } from "./components/algebra/dalyba.js";
import { sandauga } from './components/algebra/sandauga.js';
import { skirtumas } from './components/algebra/skirtumas.js';
import { kvadratas } from './components/algebra/kvadratas.js';
import { vientisasTekstas } from "./components/tekstas/vientisasTekstas.js";
import { pirmaRaide } from './components/tekstas/pirmaRaide.js';
import { vidurineRaide } from './components/tekstas/vidurineRaide.js';
import { paskutineRaide } from "./components/tekstas/paskutineRaide.js";

//EXECUTION


console.log('running home ...');

const a = suma(8, 5)
    console.log('suma', a);

const b = dalyba(9, 3)
    console.log('dalyba', b);

const c = sandauga(2, 2)
    console.log('sandauga', c);

const d = skirtumas (5, 2)
    console.log('skirtumas', d);

const k = kvadratas (2)
    console.log('kvadratas', k);





const s1 = vientisasTekstas(['labas', 'rytas']);
console.log(s1, '->', 'lbsrts');

const s2 = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
console.log(s2, '->', 'maonmsyragts');

const s3 = vientisasTekstas(['as', 'i', 'ten']);
console.log(s3, '->', 'aasiiiten');