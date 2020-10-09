import { GET_PEOPLES, GET_STARSHIPS, SET_DETAIL_CARD, CLOSE_DETAIL_CARD } from '../../helpers/constants';

const initialState = {
  data: [],
  isLoaded: true,
  detailCard: null
}

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLES : return {
      ...state,
      data: action.payload,
      isLoaded: false
    }

    case GET_STARSHIPS : return {
      ...state,
      data: action.payload,
      isLoaded: false
    }

    case SET_DETAIL_CARD:
      return {
        ...state, 
        detailCard: action.payload
      }


    case CLOSE_DETAIL_CARD:
      return { ...state, detailCard: null}

    default: return state
  }
}

export default AppReducer;