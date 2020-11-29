import {useEffect, useState} from 'react'
import firebase from 'firebase/app'

// -- returns an array of task for the given userId
// *** impletemnt filtering by userId in the leadName or responsible name
export default function useTasks() {
	const [tasks, setTasks] = useState([])

	// -- NOTE refer to the comments in useComments for details of the code below
	useEffect(() => {
		const tasksRef = firebase.firestore().collection('tasks')
		const unsubscribe = tasksRef
			// .orderBy('priority', 'desc')
			.onSnapshot((snapshot) => {
				const tasksArray = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
				setTasks(tasksArray)
			})

		return () => unsubscribe()
	}, [])

	return tasks
}