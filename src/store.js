import { reactive } from "vue"
import { createGlobalState, useLocalStorage } from "@vueuse/core"

export const useGlobalUserMetaState = createGlobalState(
  () => useLocalStorage('user_meta', { id: 0 })
)
export const useGlobalUserState = createGlobalState(
  () => useLocalStorage('user', { id: 0, test: true })
)
