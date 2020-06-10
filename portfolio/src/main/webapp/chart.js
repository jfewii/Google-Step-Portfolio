/* JS for chart */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Activity');
  data.addColumn('number', 'Percent');
    data.addRows([
      ['Work', 60],
      ['Music Production', 7],
      ['Golf', 12],
      ['Basketball', 5],
      ['Video Games', 3],
      ['Reading', 7],
      ['Netflix', 6]
    ]);

  const visualSetup = {
    'title': 'My Time Each Week',
    'width':800,
    'height':600
  };

  const chart = new google.visualization.PieChart(
    document.getElementById('chart-container'));
  chart.draw(data, visualSetup);
}
