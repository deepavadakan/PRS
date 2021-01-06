

var data = [{
  type: "sunburst",
  labels: ["Total<br>Calls", "Non-covid<br>Calls", "Covid<br>Suspect", "Covid<br>Positive", "Covid<br>Negative", "Unknown<br>Not tested"],
  parents: ["", "Total<br>Calls", "Total<br>Calls", "Covid<br>Suspect", "Covid<br>Suspect", "Covid<br>Suspect"],
  values:  [1472, 1144, 328, 88, 153, 78],
  outsidetextfont: {size: 20, color: "#377eb8"},
  leaf: {opacity: 0.4},
  marker: {line: {width: 2}},
}];

var layout = {
  margin: {l: 0, r: 0, b: 0, t: 0},
  width: 500,
  height: 500,
  title: '2020 Calls',
};

Plotly.newPlot('pie-plot', data, layout);


var trace1 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [167, 148, 143, 114, 117, 100, 99, 122, 111, 118, 108, 125],
  type: 'bar',
  name: 'Total Calls',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7,
  }
};

var trace2 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [0, 0, 35, 43, 64, 34, 29, 23, 28, 23, 19, 30],
  type: 'bar',
  name: 'Covid Suspect',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.7,
  }
};

var trace3 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [0, 0, 22, 21, 16, 4, 3, 0, 1, 1, 9, 11],
  type: 'bar',
  name: 'Covid Positive',
  marker: {
    color: 'red',
    opacity: 0.7,
  }
};

var data2 = [trace1, trace2, trace3];

var layout2 = {
  title: '2020 Calls',
  xaxis: {
    tickangle: -45,
    title: "2020"
  },
  yaxis: {
    title: "Number of Calls"
  },
  barmode: 'group'
};

Plotly.newPlot('bar-plot', data2, layout2);