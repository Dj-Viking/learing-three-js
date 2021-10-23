export interface SidebarItemInfo {
  [key: number]: {
    connections?: Array<number> | [];
    content: Array<{
      type: "text"|"image", body?: string, url?: string
    }>;
    id: number;
    title: string;
  }
}

export interface SetAllSidebarItemsArgs {
  id?: number;
  foundBySearchTerm?: Array<SidebarItem>;
  currentSidebarItems: Array<SidebarItem>
}
export interface CloseOneSidebarItemArgs {
  id?: number;
  currentSidebarItems: Array<SidebarItem>
}

export interface SideBarContentState {
  [key: number]: {
    connections?: Array<number> | [];
    content: Array<{
      type: "text"|"image", body?: string, url?: string
    }>;
    id: number;
    title: string;
  }
}

export type SidebarItemsState = {
  sidebarItems: Array<SidebarItem>
}

export interface SidebarItem {
  title: string;
  id: number;
  connections: Array<number>;
  isOpen?: boolean;
  // isParent?: boolean;
}

export interface SidebarItemsAction {
  type: "setAll" | "closeOne",
  payload: {
    sidebarItems: Array<SidebarItem>
  } 
}

export interface BlockProps {
  variables: Array<{
    id: string;
    value: string
  }>;
  blockData: {
    type: "text"|"image", body?: string, url?: string
  };
  searchTerm: string
}

export interface SideBarConnection {
  title: string;
  id: number;
}

export interface NodeProps {
  id: number;
  title: string;
  connections?: Array<{
    title: string;
    id: number;
  }>;
  isOpen: boolean;
}

export interface MyRootState {
  sidebarItems: SidebarItemsState;
}
