import create from "zustand";

export const useStore=create((set)=>({
    toggleSelect:false,
    setToggleSelect:()=>(set(state=>({toggleSelect:!state.toggleSelect})))
}))