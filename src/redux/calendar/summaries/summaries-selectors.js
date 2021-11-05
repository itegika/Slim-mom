export const getSummariesInfo = (state) =>
  state.calendar.summaries.todaySummary;
// export const getnotAllowedProducts = (state) =>
//   state.calendar?.summaries?.user?.userData?.notAllowedProducts;


// export const getUserId = (state) => state.calendar.id;
export const getUserId = (state) =>state.calendar.id;

// export const getUserId = (state) => state.calendar.summaries.user.id;

export const getCurrentUserInfootAllowedProducts = (state) =>
  state.calendar?.summaries?.userData?.notAllowedProducts;

