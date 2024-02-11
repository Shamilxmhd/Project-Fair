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
    return await commonAPI("POST", `${SERVER_URL}/add-project`, reqBody, reqHeader)
}

// homeproject API
export const getHomeProjectAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/home-projects`, '', '')
}

// allproject API
export const getAllProjectAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-projects?search=${searchKey}`, '', reqHeader)
}

// userproject API
export const getUserProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-projects`, '', reqHeader)
}

// edit project API
export const editProjectAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/project/edit/${id}`, reqBody, reqHeader)
}
// project remove API
export const deleteProjectAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/project/remove/${id}`, {}, reqHeader)
}

// update user API 
export const updateUserProfileAPI = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/user/edit`, reqBody, reqHeader)
}