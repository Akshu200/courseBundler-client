import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
  {
    //Login
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    //register
    registerRequest: state => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    //logout
    logoutRequest: state => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    //user request
    loadUserRequest: state => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    cleanError: state => {
      state.error = null;
    },
    cleanMessage: state => {
      state.message = null;
    },
  }
);

export const profileReducer = createReducer(
  {},
  {
    updateProfileRequest: state => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //change password
    changePasswordRequest: state => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    ///forget password
    forgetPasswordRequest: state => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    ///reset password
    resetPasswordRequest: state => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //change  profile picture
    updateProfilepictureRequest: state => {
      state.loading = true;
    },
    updateProfilepictureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfilepictureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Remove from play list
    removeFromPlayListRequest: state => {
      state.loading = true;
    },
    removeFromPlayListSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromPlayListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    cleanError: state => {
      state.error = null;
    },
    cleanMessage: state => {
      state.message = null;
    },
  }
);
