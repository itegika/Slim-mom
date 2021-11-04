export const getSummariesInfo = (state) =>
  state.calendar.summaries.todaySummary;
export const getnotAllowedProducts = (state) =>
  state.calendar?.summaries?.user?.userData?.notAllowedProducts;
export const getUserId = (state) => state.calendar.summaries.user.id;