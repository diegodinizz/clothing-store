import { userActionTypes } from "./user.types"

export const setCurretUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})