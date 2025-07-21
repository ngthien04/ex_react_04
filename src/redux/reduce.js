import { CHON_GHE, HUY_GHE } from "./action";

const initialState = {
  danhSachGheDangChon: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHON_GHE: {
      const index = state.danhSachGheDangChon.findIndex(g => g.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        return {
          ...state,
          danhSachGheDangChon: state.danhSachGheDangChon.filter(g => g.soGhe !== action.ghe.soGhe)
        };
      } else {
        return {
          ...state,
          danhSachGheDangChon: [...state.danhSachGheDangChon, action.ghe]
        };
      }
    }
    case HUY_GHE:
      return {
        ...state,
        danhSachGheDangChon: state.danhSachGheDangChon.filter(g => g.soGhe !== action.soGhe)
      };
    default:
      return state;
  }
}