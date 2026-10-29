import { configureStore, createSlice } from '@reduxjs/toolkit'

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { period: '7 days', activeNav: 'Overview', notificationsOpen: false },
  reducers: {
    setPeriod: (state, action) => { state.period = action.payload },
    setActiveNav: (state, action) => { state.activeNav = action.payload },
    toggleNotifications: (state) => { state.notificationsOpen = !state.notificationsOpen },
  },
})
export const { setPeriod, setActiveNav, toggleNotifications } = dashboardSlice.actions
export const store = configureStore({ reducer: { dashboard: dashboardSlice.reducer } })
