import axios from 'axios'

const GET_USER_DETAILS = 'GET_USER_DETAILS'

const getUserDetails = (details) => ({
  type: GET_USER_DETAILS,
  details,
})

export const fetchUserDetails = () => {
  return async (dispatch) => {
    try {
      let {data} = await axios.get('/api/profile')
      console.log('data from fetch user details', data)
      dispatch(getUserDetails(data))
    } catch (error) {
      console.log('error in fetch user details', error)
    }
  }
}

const initialState = {}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return action.details
    default:
      return state
  }
}