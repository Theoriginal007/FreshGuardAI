// chartConfig.js
export const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        borderColor: '#8884d8',
        backgroundColor: '#8884d8',
        fill: false,
      },
      {
        label: 'Engagement',
        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
        borderColor: '#82ca9d',
        backgroundColor: '#82ca9d',
        fill: false,
      },
    ],
  };
  
  export const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        backgroundColor: '#8884d8',
      },
    ],
  };
  
  export const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'User Engagement',
        data: [300, 50, 100, 80, 120, 60],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Data',
      },
    },
  };