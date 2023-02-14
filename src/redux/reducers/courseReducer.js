import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  { courses: [] },
  {
    //All Courses
    allCoursesRequest: state => {
      state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // add to playList
    addToPlaylistRequest: state => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlaylistFail: (state, action) => {
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
