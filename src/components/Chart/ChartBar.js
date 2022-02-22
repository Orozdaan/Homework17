
import'./ChartBar.css'
const ChartBar =(props)=>{
    let barFillHeight='0%'  // создаём переменную  с дефолтным значением "0%" которую мы передадим в стиль div'a с классом
	//  'chart-bar__fill'
    if (props.maxValue > 0){
        // условие если переменная maxValue будет больше нуля мы будем изменять переменную barFillHeigth
		//  присваивая ей число процента вычисленная с помощью метода Math.random()
        barFillHeight=Math.round((props.value / props.maxValue) * 100  ) + '%'
    }
    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={  {height : barFillHeight}}  // передаём barFillHeight здесь 
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
             {/* и передаём label в котором лежат месяца */}

        </div>
    )
}
export default ChartBar