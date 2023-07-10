import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.lable} ChartBar value={dataPoint.value} maxValue={totalMaximum} lable={dataPoint.lable} />)}
    </div>
};

export default Chart;