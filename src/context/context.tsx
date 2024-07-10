import { createContext, useContext, useReducer } from "react";
import { globalReducer } from "./reducer";

export const GlobalContext = createContext({});
const INITIAL_STATE = {
  isLoading: true,
  inviteLinksList: [],
  selectedInviteLink: null,
  promotionDetail: null,
}

// hook
export const useGlobalContext = () => useContext(GlobalContext)

export enum GlobalTypesEnum {
  IS_LOADING = "IS_LOADING",
  GET_ALL_INVITE_LINKS = "GET_ALL_INVITE_LINKS",
  GET_PROMOTION_DETAILS = "GET_PROMOTION_DETAILS",
  SET_SELECTED_INVITE_LINKS = "SET_SELECTED_INVITE_LINKS",
}

export function GlobalProvider(props: any) {
  const [state, dispatch] = useReducer(globalReducer, { ...INITIAL_STATE })

  const value = {
    isLoading: state.isLoading,
    inviteLinksList: state.inviteLinksList,
    selectedInviteLink: state.selectedInviteLink,
    promotionDetail: state.promotionDetail,
    updateList: (list: any) => {
      dispatch({
        type: GlobalTypesEnum.GET_ALL_INVITE_LINKS,
        payload: list,
      });
    },
    setSelectedInviteLink: (data: any) => {
      dispatch({
        type: GlobalTypesEnum.SET_SELECTED_INVITE_LINKS,
        payload: data,
      });
    },
    setInviteLinks: (data: any) => {
      dispatch({
        type: GlobalTypesEnum.GET_ALL_INVITE_LINKS,
        payload: data,
      });
    }
  };

  return (
    <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>
  )
}

//{}