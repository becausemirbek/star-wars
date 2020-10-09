import Axios from "axios";
import { API_URL } from '../../helpers/constants';
import { 
  GET_PEOPLES, 
  GET_STARSHIPS, 
  SET_DETAIL_CARD,
  CLOSE_DETAIL_CARD
} from '../../helpers/constants';

// функция для получения данных(People) из API
export const fetchPeoples = () => async dispatch => {
  try {
    const { data:{results} } = await Axios.get(`${API_URL}/people`)
    dispatch({
      type: GET_PEOPLES,
      payload: results,
      isLoaded: true
    })
  } catch (e) {
    
  }
}

// функция для получения данных(Planets) из API
export const fetchPlanets = () => async dispatch => {
  try {
    const { data: { results } } = await Axios.get(`${API_URL}/planets`)
    dispatch({
      type: GET_STARSHIPS,
      payload: results,
      isLoaded: true
    })
  } catch (e) {
    
  }
}

// -----------------было-------
// export const setDetailCard = (url) => dispatch => {
//   dispatch({
//     type: SET_DETAIL_CARD,
//     payload: getDetail(url),
//   })
// }

// функция принимает в себя url определенного элемента, и дастает данные оттуда
export const setDetailCard = (url) => async dispatch => {
  const {data} = await Axios(url)
  dispatch({
    type: SET_DETAIL_CARD,
    payload: data,
  })
}

export const closeDetailCard = () => dispatch => {
  dispatch({
    type: CLOSE_DETAIL_CARD
  })
}

