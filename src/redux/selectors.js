export const selectLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;

export const selectUserData = state => state.user.userData;
export const selectUserToken = state => state.user.token;
export const selectUserIsAuth = state => state.user.isAuth;

export const selectFinanceData = state => state.finance.data;
export const selectFinanceTotalBalance = state => state.finance.totalBalance;
