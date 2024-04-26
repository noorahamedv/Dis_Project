var visitorsCtx = document.getElementById('visitorsChart').getContext('2d');
        var ticketDistributionCtx = document.getElementById('ticketDistributionChart').getContext('2d');
        var ticketSalesTrendCtx = document.getElementById('ticketSalesTrendChart').getContext('2d');

        var visitorsChart = new Chart(visitorsCtx, {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Visitors',
                    data: [150, 200, 250, 300, 350, 400, 450],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        var ticketDistributionChart = new Chart(ticketDistributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Adults', 'Children', 'Seniors'],
                datasets: [{
                    label: 'Ticket Distribution',
                    data: [40, 30, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        var ticketSalesTrendChart = new Chart(ticketSalesTrendCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Ticket Sales Trend',
                    data: [300, 350, 400, 450],
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    