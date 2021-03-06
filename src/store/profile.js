import axios from 'axios'

const GET_USER_DETAILS = 'GET_USER_DETAILS'
const UPDATE_PROFILE = 'UPDATE_PROFILE'
const GET_CANDIDATE_DETAILS = 'GET_CANDIDATE_DETAILS'
const GET_JOB_DETAILS = 'GET_JOB_DETAILS'

const getUserDetails = (details) => ({
  type: GET_USER_DETAILS,
  details,
})

const updateProfile = (details) => ({
  type: UPDATE_PROFILE,
  details,
})

const getCandidateDetails = (profile) => ({
  type: GET_CANDIDATE_DETAILS,
  profile,
})

const getJobDetails = (profile) => ({
  type: GET_JOB_DETAILS,
  profile,
})

export const fetchUserDetails = () => {
  return async (dispatch) => {
    try {
      let {data} = await axios.get('/api/profile')
      dispatch(getUserDetails(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchUpdatedProfile = (profile) => {
  return async (dispatch) => {
    try {
      let {data} = axios.put('/api/profile', profile)
      dispatch(updateProfile(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//
export const fetchCandidateProfile = (candidateId) => {
  return async (dispatch) => {
    try {
      let {data} = await axios.get(`/api/profile/${candidateId}`)
      dispatch(getCandidateDetails(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchJobProfile = (jobId) => {
  return async (dispatch) => {
    try {
      let {data} = await axios.get(`/api/profile/job/${jobId}`)
      dispatch(getJobDetails(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return action.details
    case UPDATE_PROFILE:
      return action.details
    case GET_CANDIDATE_DETAILS:
      return action.profile
    case GET_JOB_DETAILS:
      return action.profile
    default:
      return state
  }
}
