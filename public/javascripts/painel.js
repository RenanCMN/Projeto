var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July","Agust","Setem","Octur","Nov","Dezem"],
        datasets: [{
            label: "Quantidate Itens Cadastrados",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 10, 5, 2, 20, 30, 45,50,30,20,45,50],
            
        }]
    },

    // Configuration options go here
    options: {}
});