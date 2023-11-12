const xArray = ["UK", "Germany", "US", "Canada", "Japan"];
const yArray = [55, 49, 44, 24, 15];

const data = [{labels:xArray, values:yArray, type:"pie"}];

const layout = {title:"World Wide Glass Production"};

Plotly.newPlot("myPlot", data, layout);


const xArray2 = ["UK", "Germany", "US", "Canada", "Japan"];
const yArray2 = [55, 49, 44, 24, 15];

const data2 = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "v",
    marker: {color:"rgba(255,0,255,0.6)"}
  }];

const layout2 = {title:"World Wide Glass Production"};
Plotly.newPlot("myPlot2", data2, layout2);



const xArray3 = ["UK", "Germany", "US", "Canada", "Japan"];
const yArray3 = [55, 49, 44, 24, 15];

const data3 = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "h",
    marker: {color:"rgba(0,0,255,0.6)"}
  }];

const layout3 = {title:"World Wide Glass Production"};

Plotly.newPlot("myPlot3", data3, layout3);



const xArray4 = [50,60,70,80,90,100,110,120,130,140,150];
const yArray4 = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const data4 = [{
  x: xArray4,
  y: yArray4,
  mode:"lines"
}];

const layout4 = {
  xaxis: {range: [40, 160], title: "Size in CM3"},
  yaxis: {range: [5, 16], title: "Temperature C"},  
  title: "Temperature vs. Size"
};

Plotly.newPlot("myPlot4", data4, layout4);