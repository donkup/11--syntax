import { pirmaRaide } from "./pirmaRaide.js";
import { vidurineRaide } from "./vidurineRaide.js";
import { paskutineRaide } from "./paskutineRaide.js";

function vientisasTekstas(texList) {
    let answer = '';
    for (let i = 0; i < texList.length; i++) {
        const text = texList[i];
        answer += pirmaRaide (text);
        answer += vidurineRaide(text);
        answer += paskutineRaide(text);
    }

    return answer
}

export {vientisasTekstas}