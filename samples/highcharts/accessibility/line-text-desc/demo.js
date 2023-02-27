const chart = Highcharts.chart('container', {
    title: {
        text: 'Crypto coin prices in USD'
    },
    subtitle: {
        text: 'Source: Yahoo Finance'
    },
    accessibility: {
        screenReaderSection: {
            axisRangeDateFormat: '%B %Y'
        }
    },
    data: {
        csv: document.getElementById('csv').textContent
    },
    yAxis: {
        title: {
            text: ''
        },
        accessibility: {
            description: 'Price in USD'
        },
        labels: {
            format: '${value}'
        },
        max: 80000
    },
    xAxis: {
        accessibility: {
            description: 'Time'
        },
        type: 'datetime'
    }
});

chart.accessibility.addLineChartTextDescription();
