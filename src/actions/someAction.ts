import { 
  SidebarItemsAction, 
  SetAllSidebarItemsArgs, 
  SidebarItem, 
  CloseOneSidebarItemArgs 
} from "../types";

export const setAllSomething = (args: SetAllSidebarItemsArgs): SidebarItemsAction => {
  // console.log("what is args here", args);
  // set all other sidebaritems isOpen false that dont have the id matching the one passed in
  // send that new array to the reducer to set the new state

  const {
    id,
    currentSidebarItems,
    // foundBySearchTerm
  } = args;

  if (!id) { // if id was undefined it's the initial fetch
    return { 
      type: "setAll", 
      payload: {
        sidebarItems: currentSidebarItems.map((item) => ({
          ...item,
          isOpen: false
        }))
      } 
    }; 
  }

  const newSidebarItems = currentSidebarItems.map((item): SidebarItem => {
    if (item.id !== id) {
      return { // close all the other ones except the one we clicked
        ...item,
        isOpen: false
      };
    } 
    return {
      ...item,
      isOpen: true,
    };
  });
  // console.log("new sidebar items", newSidebarItems);

  return {
    type: "setAll",
    payload: { sidebarItems: newSidebarItems }
  };
};

export const setSomethingInactive = (args: CloseOneSidebarItemArgs): SidebarItemsAction => {
  const {
    id,
    currentSidebarItems
  } = args;

  const newSidebarItems = currentSidebarItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isOpen: false
      };
    }
    return {
      ...item,
      isOpen: false
    };
  });
  return {
    type: "closeOne",
    payload: {
      sidebarItems: newSidebarItems
    }
  };
}; 
