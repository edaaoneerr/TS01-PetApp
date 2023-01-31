import { AppState } from "./AppState";

export const AppInitialState: AppState = {
    loading: {
        show: false,
        hide: true
    },
    login: {
        error: null,
        isLoggedIn: false,
        isLoggingIn: false,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
        user: null
    }
}