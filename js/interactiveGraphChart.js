const toggleGraphBtn = document.getElementById('toggleGraphBtn');
const chartContainer = document.getElementById('chartContainer');
let chartDisplayed = false;

toggleGraphBtn.addEventListener('click', () => {
    chartDisplayed = !chartDisplayed;
    chartContainer.style.display = chartDisplayed ? 'block' : 'none';
    if (chartDisplayed) {
        toggleGraphBtn.textContent = 'Скрыть график';
        createChart();
    } else {
        toggleGraphBtn.textContent = 'Показать график';
    }
});

let myChart;
function createChart() {
    if (myChart) {
        myChart.destroy();
    }
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 12 }, (_, i) => `Месяц ${i + 1}`),
            datasets: [{
                label: 'Продажи',
                data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}