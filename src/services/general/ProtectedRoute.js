import React from 'react'
import {useHistory} from 'react-router-dom'

// -- service that takes only display the component if the user has logged in, else they get redirected to the login page
// -- protected routes will show 'Loading' until the user has been resolved
export const ProtectedRoute = ({isLoading, isAuth, children}) => {
	let history = useHistory()
	if (isLoading) {
		return <div>Loading...</div> // -- displayed until user credentials are loaded
	}

	// -- ** insert feature: floating modal to remind of logging 1st ** -- //

	if (!isAuth) {
		history.push('/login')
	}

	return children
}
