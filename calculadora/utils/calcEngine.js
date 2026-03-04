import Display from "../components/Display";
import { fixFloat, formateNumber, toNumber } from "./format";

const OPS = new Set(["+", "-", "*", "/"]);

export function createEngine({ locale = "pt-BR"} = {}) {
    function initialState() {
        return{
            Display: formateNumber(0, locale),
            expression: "",
            storedValue: null,
            pendingOp: null, 
            isNewEntry: true,
            lastKey: null,
        };
    }

    function reduce(state, key) {
        const s = {...state,lastKey: key};
            // Programar pra CARALHOOOO!!!!!
        return s;
    }

    function onDigitOrDot(s, key, locale) {

    }

    function onOperator( s, op, locale) {

    }

    function onEqual(s, locale) {

    }

    function compute (a, b, op) {

    }

    function symbol (op){

    }

    function isDigit(k){

    }

    function displayToRaw(displayText) {

    }

    return { initialState, reduce}

}