import { commonAPI } from './commonAPI'
import { SERVER_URL } from './serverUrl'

// register API
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, user, "")
}

// login API
export const loginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, user, "")
}
// add Project API
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-projects`, reqBody, reqHeader)
}



// homeproject API
export const getHomeProjectAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/home-projects`, '', '')
}

// allproject API
export const getAllProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-projects`, '', reqHeader)
}

// userproject API
export const getUserProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-projects`, '', reqHeader)
}