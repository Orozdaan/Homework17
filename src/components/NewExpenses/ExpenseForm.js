import { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { BASE_URL } from '../../utils/costants/costants'
import ModalWindow from '../UI/Modal'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [message, setMessage] = useState(false)

	// ---------VERSION 1
	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		if (currentInput === 'title') {
			setTitle(event.target.value)
		} else if (currentInput === 'amount') {
			setAmount(event.target.value)
		} else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}
	// Post
	const submitHandler = (event) => {
		event.preventDefault()
		if (
			title.trim().length <= 0 ||
			amount.length <= 0 ||
			date.length <= 0
		) {
			setMessage('Type something!')
		} else {
			const expenseData = {
				title,
				amount,
				date,
			}
			async function fetchfn() {
				const response = await fetch(`${BASE_URL}/expense.json`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(expenseData),
				})
				props.onGetData()
			}

			setMessage('Data saved successfully!')
			fetchfn()
			setTitle('')
			setAmount('')
			setDate('')
		}
	}
	setTimeout(() => {
		setMessage(false)
	}, 2000)

	return (
		<Fragment>
			{message && <ModalWindow>{message}</ModalWindow>}
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							name='title'
							type='text'
							value={title}
							onChange={inputChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							name='amount'
							type='number'
							min='0'
							step='1'
							value={amount}
							onChange={inputChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							name='date'
							type='date'
							min='2022-01-01'
							value={date}
							onChange={inputChangeHandler}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</form>
		</Fragment>
	)
}

export default ExpenseForm
