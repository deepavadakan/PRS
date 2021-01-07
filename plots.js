// Pie Chart variables for font and colors
var pieFont = 'Helvetica, sans-serif';
var pieCovidColor = "#012076";
var pieNonCovidColor = "green";
var pieTextColor = "#377eb8";

var data1 = [{
  type: "sunburst",
  labels: ["Total<br>Calls", "Non-Covid<br>Calls", "Covid<br>Suspect", "Covid<br>Positive", "Covid<br>Negative", "Unknown<br>Not Tested"],
  parents: ["", "Total<br>Calls", "Total<br>Calls", "Covid<br>Suspect", "Covid<br>Suspect", "Covid<br>Suspect"],
  values:  [1472, 1144, 328, 88, 153, 78],
  textfont: {
    family: pieFont,
    size: 15
  },
  outsidetextfont: {
    size: 20, 
    color: pieTextColor,
    family: pieFont
  },
  //leaf: {opacity: 0.4},
  marker: {line: {width: 2}}
}];

var layout1 = {
  margin: {l: 0, r: 0, b: 0, t: 0},
  sunburstcolorway:[pieNonCovidColor, pieCovidColor],
  width: 500,
  height: 500
};

Plotly.newPlot('pie-plot', data1, layout1);

// Bar Chart variables for font and colors
var barFont = 'Helvetica, sans-serif';
var barCallsColor = 'rgb(49,130,189)';
var barCovidSColor = 'rgb(204,204,204)';
var barCovidPColor = 'red';

var trace21 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [167, 148, 143, 114, 117, 100, 99, 122, 111, 118, 108, 125],
  type: 'bar',
  name: 'Total Calls',
  marker: {
    color: barCallsColor,
    opacity: 0.7,
  }
};

var trace22 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [0, 0, 35, 43, 64, 34, 29, 23, 28, 23, 19, 30],
  type: 'bar',
  name: 'Covid Suspect',
  marker: {
    color: barCovidSColor,
    opacity: 0.7,
  }
};

var trace23 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  y: [0, 0, 22, 21, 16, 4, 3, 0, 1, 1, 9, 11],
  type: 'bar',
  name: 'Covid Positive',
  marker: {
    color: barCovidPColor,
    opacity: 0.7,
  }
};

var data2 = [trace21, trace22, trace23];

var layout2 = {
  title: {
    text: '2020 Calls',
    font: barFont,
    size: 16
  },
  xaxis: {
    tickangle: -45,
    title: {
      text: "2020",
      font: barFont,
      size: 16
    }
  },
  yaxis: {
    title: {
      text: "Number of Calls",
      font: barFont,
      size: 16
    }
  },
  barmode: 'group'
};

Plotly.newPlot('bar-plot', data2, layout2);

// Stacked Bar Chart variables for font and colors
var sBarFont = 'Helvetica, sans-serif';
var sBar2015 = 'rgb(49,130,189)';
var sBar2016 = 'rgb(204,204,204)';
var sBar2017 = 'red';
var sBar2018 = 'orange';
var sBar2019 = 'green';
var sBar2020 = 'purple';
var xValues = ["Sick Person/ Unknown problems" ,"Fall Victim" ,"Breathing/ Respiratory Issues" ,"Motor Vehicle Accident" ,"Cardiac" ,"Medical Alarm" ,"Abdominal Pain" ,"Fainting" ,"Altered Mental Status" ,"Psychiatric Problems" ,"Stand By (Fire, Police, EMS)" ,"Trauma" ,"Diabetic Emergency" ,"Seizures" ,"Intoxicated (ETOH)" ,"Blood Pressure Problems" ,"Hemorrhage/Laceration" ,"Back Pain" ,"Overdose (Opiod/Alchohol)" ,"Assist EMS" ,"Stroke/CVA" ,"Assault" ,"Flu-Like Symptoms" ,"Allergies" ,"Choking" ,"Headache" ,"Transport/Transfer" ,"Convulsions / Seizure" ,"Suicide (Attempt)" ,"Patient Assist" ,"Burns" ,"CO Alarm" ,"Animal Bite" ,"Heat/Cold Exposure" ,"Maternity" ,"Eye Problem" ,"Ingestion/Poisoning" ,"Stab/Gunshot Wound" ,"Industrial Accident"];

trace31 = {
  type: 'bar',
  x: xValues,
  y: [126,105,81,86,68,44,45,43,30,27,23,30,22,16,13,15,18,14,9,12,13,7,1,1,4,5,1,2,2,4,0,2,2,2,1,1,0,0,0],
  name: '2015',
  marker: {
    color: sBar2015
  }
};

trace32 = {
  type: 'bar',
  x: xValues,
  y: [97,99,76,105,60,63,29,43,21,28,27,18,19,12,12,16,15,14,5,22,7,9,6,8,5,2,1,4,2,1,1,1,1,2,1,1,1,0,1],
  name: '2016',
  marker: {
    color: sBar2016
  }
};

trace33 = {
  type: 'bar',
  x: xValues,
  y: [134,115,103,97,80,52,51,27,27,22,32,25,28,22,24,15,15,17,17,13,9,4,6,5,3,5,2,2,1,0,1,3,2,1,1,0,0,0,0],
  name: '2017',
  marker: {
    color: sBar2017
  }
};

trace34 = {
  type: 'bar',
  x: xValues,
  y: [143,140,79,98,69,75,31,31,33,33,20,36,16,22,17,20,8,11,15,9,13,4,5,8,5,3,4,4,1,3,6,0,2,0,0,2,2,0,0],
  name: '2018',
  marker: {
    color: sBar2018
  }
};

trace35 = {
  type: 'bar',
  x: xValues,
  y: [170,139,82,70,71,45,35,31,46,26,28,20,17,21,27,15,17,15,15,3,6,8,5,6,,3,1,2,3,0,2,2,1,1,3,1,1,0,0],
  name: '2019',
  marker: {
    color: sBar2019
  }
};

trace36 = {
  type: 'bar',
  x: xValues,
  y: [174,104,88,38,45,33,43,22,38,30,30,21,21,17,14,13,13,10,15,4,10,14,16,9,6,5,8,1,5,3,0,2,0,1,1,1,0,2,0],
  name: '2020',
  marker: {
    color: sBar2020
  }
};

var layout3 = {
  width: 1400,
  height: 500,
  barmode: 'stack',
  xaxis: {
    tickangle: -45,
    automargin: true,
    title: {
      text: "Type of Calls",
      font: sBarFont,
      size: 16
    }
  },
  yaxis: {
    title: {
      text: "Number of Calls",
      font: sBarFont,
      size: 16
    }
  },
};

var data3 = [trace31, trace32, trace33, trace34, trace35, trace36];

Plotly.newPlot('sBar-plot', data3, layout3);

// Stacked Bar2 Chart variables for font and colors
var sBarJan = 'rgb(49,130,189)';
var sBarFeb = 'rgb(204,204,204)';
var sBarMar = 'red';
var sBarApr = 'orange';
var sBarMay = 'green';
var sBarJun = 'blue';
var sBarJul = 'pink';
var sBarAug = 'yellow';
var sBarSep = 'brown';
var sBarOct = 'black';
var sBarNov = 'gray';
var sBarDec = 'indigo';
var xBar2Values = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

traceJan = {
  type: 'bar',
  x: xBar2Values,
  y: ["N/A",54,56,86,65,71,65,74,71,56,82,65,96],
  name: 'January',
  marker: {
    color: sBarJan
  }
};

traceFeb = {
  type: 'bar',
  x: xBar2Values,
  y: ["N/A",37,62,67,59,64,56,67,57,55,86,61,79],
  name: 'February',
  marker: {
    color: sBarFeb
  }
};

traceMar = {
  type: 'bar',
  x: xBar2Values,
  y: ["N/A",74,50,70,79,46,71,55,69,68,76,72,80],
  name: 'March',
  marker: {
    color: sBarMar
  }
};

traceApr = {
  type: 'bar',
  x: xBar2Values,
  y: [57,55,66,70,71,55,60,54,64,85,65,69,59],
  name: 'April',
  marker: {
    color: sBarApr
  }
};

traceMay = {
  type: 'bar',
  x: xBar2Values,
  y: [71,63,82,69,76,59,62,75,48,81,76,85,65],
  name: 'May',
  marker: {
    color: sBarMay
  }
};

traceJun = {
  type: 'bar',
  x: xBar2Values,
  y: [45,51,51,63,69,57,46,53,61,71,73,72,54],
  name: 'June',
  marker: {
    color: sBarJun
  }
};

traceJul = {
  type: 'bar',
  x: xBar2Values,
  y: [65,46,66,74,60,54,65,63,73,79,68,83,54],
  name: 'July',
  marker: {
    color: sBarJul
  }
};

traceAug = {
  type: 'bar',
  x: xBar2Values,
  y: [54,52,73,75,56,57,48,76,43,70,57,86,66],
  name: 'August',
  marker: {
    color: sBarAug
  }
};

traceSep = {
  type: 'bar',
  x: xBar2Values,
  y: [47,49,57,60,67,55,76,62,58,66,63,79,67],
  name: 'September',
  marker: {
    color: sBarSep
  }
};

traceOct = {
  type: 'bar',
  x: xBar2Values,
  y: [65,56,73,57,80,50,58,68,64,76,85,89,69],
  name: 'October',
  marker: {
    color: sBarOct
  }
};

traceNov = {
  type: 'bar',
  x: xBar2Values,
  y: [53,48,64,56,62,58,77,60,61,59,78,64,60],
  name: 'November',
  marker: {
    color: sBarNov
  }
};

traceDec = {
  type: 'bar',
  x: xBar2Values,
  y: [46,57,60,76,67,65,56,77,69,84,93,87,66],
  name: 'December',
  marker: {
    color: sBarDec
  }
};

var layout4 = {
  width: 1400,
  height: 500,
  title: {
    text: 'PRS Calls from 2008 - 2020',
    font: barFont,
    size: 16
  },
  barmode: 'stack',
  xaxis: {
    dtick: 1,
  },
  yaxis: {
    title: {
      text: "Number of Calls",
      font: sBarFont,
      size: 16
    }
  },
};

var data4 = [traceJan, traceFeb, traceMar, traceApr, traceMay, traceJun, traceJul, traceAug, traceSep, traceOct, traceNov, traceDec];

Plotly.newPlot('sBar2-plot', data4, layout4);