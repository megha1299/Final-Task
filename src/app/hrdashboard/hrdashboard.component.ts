import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../api/service.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-hrdashboard',
  templateUrl: './hrdashboard.component.html',
  styleUrls: ['./hrdashboard.component.scss']
})
export class HRdashboardComponent {
  list:any[] = [];

  public todo : any;
  public interview: any;
  public leave: any;
  public user: any;

  // public userid: any;
  // public name: any;
  // public dob: any;
  // public email: any;

  constructor(private api: ServiceService, private route: Router){}
  
  ngOnInit(){

    this.getUser();
    this.getList();
    this.getInterview();
    this.getLeave();

  // Doughnut chart
    const myChart1 = new Chart("myChart1",{
      type: 'doughnut',
      data: {
        labels: ["Active", "Inactive"],
        datasets: [
          {
            label: "Employees",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [7,3]
          }
        ]
      },
      options: {
        
      },
  });

// Gauge chart
  const myChart2 = new Chart("myChart2",{
    type: 'doughnut',
     data : {
      labels: ['Total Producative hours'],
      datasets: [{
        label: 'Hours',
        data: [70, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(201, 203, 207,1)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 2,
        circumference: 180,
        rotation: 270,
        borderRadius: 6
        
      }]
    },
    
    options: {
    cutout: '90%',
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        filter: (tooltipItem) =>{
          console.log(tooltipItem);
          return tooltipItem.dataIndex === 0;
        }
      }
    }
    },
    
});

// bar chart

const myChart3 = new Chart("myChart3",{
  type: 'bar',
   data : {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
      label: 'Total Leaves in last week',
      data: [1, 3, 0, 1, 1, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    
  },
});
  }


  // employee table

  getUser(){
    this.api.getUser().subscribe((res)=>{
      console.log(res);
      this.user =res;
    })
  }

  // todo list

  getList(){
    this.api.getList().subscribe((res)=>{
      console.log(res);
      this.todo =res;
    })
  }

  // todo
  addTask(item: string){
    this.list.push({id:this.list.length,name:item})
    console.log(this.list)
  }
  remove(id: number){
    console.log(id);
    // to remove item
    this.list = this.list.filter(item => item.id !== id)
    this.todo = this.todo.filter((data: { id: number; }) => data.id !== id)
  }

  getInterview(){
    this.api.getInterview().subscribe((res)=>{
      console.log(res);
      this.interview = res;
    })
  }

  getLeave(){
    this.api.getLeave().subscribe((res)=>{
      console.log(res);
      this.leave = res;
    })
  }

  logout() {  
    this.api.logout();  
    this.route.navigate(['/login']);  
  } 
}
