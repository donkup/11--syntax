/*

parasyti funkcija:
- duoto zodzio pirma raide
- duoto zodzio vidurine raide
- duoto zodzio paskutine raide
- ar duoto zodzio N-oji raide yra didzioji? true/false
- ar duoto zodzio N-oji raide yra mazoji? true/false
*/


const pirmaRaide = text => text [0];
export { pirmaRaide }

const paskutineRaide = text => text[text.length - 1];
export { paskutineRaide }

const vidurineRaide = text => text(Math.ceil (text.length/ 2 - 1));
export { vidurineRaide }
    
