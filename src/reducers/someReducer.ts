import {
  SidebarItemsAction, SidebarItemsState 
 } from "../types";
 
 const sidebarItemsReducer = (
   state = { 
     sidebarItems: [{
       id: 0,
       title: "",
       connections: [0],
       isOpen: false
     }] 
   } as SidebarItemsState,
   action: SidebarItemsAction
 ): SidebarItemsState => {
   console.log("what is action here", action);
   switch (action.type) {
     case "setAll": 
     return {
       sidebarItems: [...action.payload.sidebarItems]
     };
     case "closeOne": 
     return {
       sidebarItems: [...action.payload.sidebarItems]
     };
     default: return state;
   }
 };
 
 export default sidebarItemsReducer;
