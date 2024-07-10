import { GlobalTypesEnum } from "./context";

export const globalReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GlobalTypesEnum.GET_ALL_INVITE_LINKS:
      return {
        ...state,
        inviteLinksList: payload,
      };
    case GlobalTypesEnum.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case GlobalTypesEnum.SET_SELECTED_INVITE_LINKS:
      return {
        ...state,
        selectedInviteLink: payload,
      };
    case GlobalTypesEnum.GET_PROMOTION_DETAILS:
      return {
        ...state,
        promotionDetail: payload,
      };

    default:
      return state;
  }
};
