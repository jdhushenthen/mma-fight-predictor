import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {

    render() {
        return (
            <div>
                <Bar 
                    data={{
                        labels: this.props.labels,
                        datasets: [{
                            barPercentage: this.props.labels.length / 11,
                            backgroundColor: '#3369ff',
                            indexAxis: 'y',
                            data: this.props.data
                        }]
                    }}
                    height={400}
                    width={500}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

export default BarChart
