import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ["Miami","Daytona","Orlando"],
        datasets: [
          {
            label: "Population",
            data: [
              617594,
              181045,
              153060,
              105519,
              95072
            ],
            backgroundColor: [
              'rgba(155,145,166,.3)'
            ]
          }
        ]
      }
    }
  }
  render(){
    return(
      <div className='chartCont'>
        <Bar 
          data={this.state.chartData}
        />
      </div>
    )
  }
}

export default Chart;