import { server } from '../store';
import axios from 'axios';

//update Profile
export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'allCoursesRequest' });

    const { data } = await axios.put(
      `${server}/updateprofile`,
      { name, email },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: 'updateProfileSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};

//change Profile Picture
export const updateProfilePicture = formdata => async dispatch => {
  try {
    dispatch({ type: 'updateProfilepictureRequest' });

    const { data } = await axios.put(
      `${server}/updateprofilepicture`,
      formdata,
      {
        headers: {
          'Content-type': 'multiparts/form-data',
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: 'updateProfilepictureSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfilepictureFail',
      payload: error.response.data.message,
    });
  }
};

//change password
export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: 'changePasswordRequest' });

    const { data } = await axios.put(
      `${server}/changepassword`,
      { oldPassword, newPassword },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: 'changePasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'changePasswordFail',
      payload: error.response.data.message,
    });
  }
};

//forget  password
export const forgetPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordRequest' });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/forgetpassword`,
      { email },
      config
    );
    console.log(data);
    dispatch({ type: 'forgetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

//reset  password
export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({ type: 'resetPasswordRequest' });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      { password },
      config
    );
    console.log(data);
    dispatch({ type: 'resetPasswordSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'resetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

//add to play list
export const addToplaylist = id => async dispatch => {
  try {
    dispatch({ type: 'addToPlaylistRequest' });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/addtoplaylist`,
      {
        id,
      },
      config
    );

    dispatch({ type: 'addToPlaylistSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addToPlaylistFail',
      payload: error.response.data.message,
    });
  }
};

// REmOVE from  play list
export const removeFromPlaylist = id => async dispatch => {
  try {
    dispatch({ type: 'removeFromPlayListRequest' });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removefromplaylist?id=${id}`,

      config
    );

    dispatch({ type: 'removeFromPlayListSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'removeFromPlayListFail',
      payload: error.response.data.message,
    });
  }
};
