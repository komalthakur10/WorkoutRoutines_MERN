import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchWorkouts } = useWorkoutsContext()
    const logout = () => {
        // Remove user form storage
        localStorage.removeItem('user')

        // Dispatch logout action
        dispatch({type: 'LOGOUT'})
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
    }
    return {logout}
}