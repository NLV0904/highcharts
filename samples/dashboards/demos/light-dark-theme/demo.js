const csvData = document.getElementById('csv').innerText;

Dashboards.board('container', {
    dataPool: {
        connectors: [{
            name: 'sample',
            type: 'CSV',
            options: {
                csv: csvData,
                firstRowAsNames: true
            }
        }]
    },
    gui: {
        layouts: [{
            id: 'layout-1',
            rows: [{
                cells: [{
                    id: 'dashboard-col-0'
                }, {
                    id: 'dashboard-col-1'
                }]
            }]
        }]
    },
    components: [
        {
            cell: 'dashboard-col-0',
            connector: {
                name: 'sample'
            },
            type: 'Highcharts',
            sync: {
                highlight: true
            },
            columnKeyMap: {
                Food: 'x',
                'Vitamin A': 'y'
            },
            title: {
                text: 'Column chart'
            },
            chartOptions: {
                xAxis: {
                    type: 'category'
                },
                title: {
                    text: ''
                },
                chart: {
                    animation: false,
                    type: 'column'
                },
                plotOptions: {
                    series: {
                        colorByPoint: true
                    }
                }
            }
        }, {
            cell: 'dashboard-col-1',
            type: 'DataGrid',
            connector: {
                name: 'sample'
            },
            editable: true,
            title: {
                text: 'Grid component'
            },
            sync: {
                highlight: true
            }
        }
    ]
}, true);

[...document.querySelectorAll('input[name="color-mode"]')]
    .forEach(input => {
        input.addEventListener('click', e => {
            document.getElementById('container').className =
                e.target.value === 'none' ? '' : `highcharts-${e.target.value}`;
        });
    });
