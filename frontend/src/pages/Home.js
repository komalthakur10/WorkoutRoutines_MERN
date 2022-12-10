import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from '../hooks/useAuthContext'

import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import IndividualIntervals from '../components/Carousels'


const Home = () => {

    const { workouts, dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                },
            }) 
            //console.log(response)   
            const json = await response.json()
            //console.log(json)

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        //console.log(user)
        if (user) {
            fetchWorkouts()
        }

    }, [dispatch, user]) 

    return (
        
        <div className="home">
             <IndividualIntervals />
             <WorkoutForm />
            <div className="workouts">
                { workouts && workouts.map(Workout => (
                    <WorkoutDetails key={Workout._id} Workout={Workout} />
                ))}
            </div>

        </div>
    )
}

export default Home