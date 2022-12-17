import { ADD_COUNTER,
  DECREMENT_COUNTER,
   DIVIDE_COUNTER,
    INCREMENT_COUNTER,
     MULTIPLY_COUNTER, 
     RESET, SUBTRACT_COUNTER } from "./actionType"

export const IncCounter = (payload)=>{
 return {
 type:INCREMENT_COUNTER,
 payload
 };
};

export const DecCounter = (payload)=>{
 return {
 type:DECREMENT_COUNTER,
 payload
 };
};

export const addCounter = (payload)=>{
 return {
 type:ADD_COUNTER,
 payload
 };
};

export const subCounter = (payload)=>{
 return {
 type:SUBTRACT_COUNTER,
 payload
 };
};

export const mulCounter = (payload)=>{
 return {
 type:MULTIPLY_COUNTER,
 payload
 };
};

export const divCounter = (payload)=>{
 return {
 type:DIVIDE_COUNTER,
 payload
 };
};

export const reset = ()=>{
 return {
     type: RESET
 }
}