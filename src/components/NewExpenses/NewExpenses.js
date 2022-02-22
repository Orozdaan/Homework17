import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {
	return (
		<div className='new-expense'>
			<ExpenseForm setMessage={props.setMessage} onGetData={props.ongetData} />
		</div>
	)
}
export default NewExpenses