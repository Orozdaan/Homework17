import React, { useCallback, useState, useEffect } from 'react'
import './App.css'
import { BASE_URL } from './utils/costants/costants'
import Expenses from './components/Expenses/Expenses' // импортируем компоненту Expenses к компоненту App
import NewExpenses from './components/NewExpenses/NewExpenses' // импортируем компоненту NewExpenses в компоненту App
import Card from './components/UI/Card'
import Loading from './components/Loading/Loading'

const App = () => {
	// Get
	const [expenses, setExpenses] = useState([])
	 const [isLoading, setIsloading] = useState(false)
	 const [error, setError] = useState(null)

	const fetchExpenseHandler = useCallback(async () => {
		setIsloading(true)
		setError(null)
		try {
			const response = await fetch(`${BASE_URL}/expense.json`)
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}
			const data = await response.json()
			const loadedExpenses = []

			for (const key in data) {
				loadedExpenses.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
					date: new Date(data[key].date),
				})
			}
			setExpenses(loadedExpenses)
		} catch (error) {
			setError(error.message || 'Something went wrong!')
		}
		setIsloading(false)
	}, [])

	useEffect(() => {
		fetchExpenseHandler()
	}, [fetchExpenseHandler])

	let content = <p>Found no expenses</p>
	if (expenses.length > 0) {
		content = <Expenses items={expenses} />
	}
	if (error) {
		content = <p>{error}</p>
	}
	if (isLoading) {
		content = <Loading />
	}

	return (
		<Card>
			<NewExpenses 
        //   setMessage={setMessage}
          ongetData={fetchExpenseHandler}
      />
	  <span className='loading'> {content}</span>
	 
	 
		</Card>
	)
}
export default App
