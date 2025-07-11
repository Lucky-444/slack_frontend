import axios from '../../config/axiosConfig';

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post('/auth/login', { email, password });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// }


export const signUpRequest = async ({email, password, username}) => {
  try {
    const response = await axios.post('/users/signup', { email, password, username });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}


export const signInRequest = async ({email, password}) => {
  try {
    const response = await axios.post('/users/signin', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}

