import './Chart.css'
import ChartBar from './ChartBar'
const Chart =(props)=>{
    // сюда приходит массив со статистикой
const dataPointsValues =props.dataPoints.map((data)=>data.value) // мы его перебираем и возвращаем новый массив элементов
// data.value

const totalMax =Math.max(...dataPointsValues) // здесь присваивается totalMax самый максимальный value
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint)=>
                <ChartBar        // Эта компонента выводит те самые дифграммы статистики
                     key ={dataPoint.label}
                     value={dataPoint.value}
                     maxValue={totalMax}
                     label ={dataPoint.label}
                />
        )}
        </div>
    )
}
export default Chart