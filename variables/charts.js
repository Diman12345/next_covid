if (typeof window === "undefined") {
  global.window = {};
}
if (typeof document === "undefined") {
  global.document = {};
}
// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["Sembuh", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 38], ],
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0,
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  // for animation
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};

// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      "DKI Jakarta","Jawa Timur",
      "Jawa Barat","Jawa Tengah",
      "Sulawesi Selatan","Sumatera Barat",
      "Kalimantan Timur","Riau",
      "Sumatera Utara","Bali",
      "Kalimantan Selatan","Banten",
      "Papua","Sumatera Selatan",
      "Aceh","Sulawesi Utara",
      "Sulawesi Tenggara","Kalimantan Tengah",
      "Kepulauan Riau","Papua Barat",
      "DIY Yogyakarta","NTB",
      "Bangka Belitung","Maluku",
      "Gorontalo","Lampung",
      "Maluku Utara","Kalimantan Barat",
      "Jambi","Bengkulu",
      "Sulawesi Barat","Sulawwsi Tengah",
      "Kalimantan Utara","NTT",
      
    ],
    datasets: [{
      label: 'Kasus',
      fill: false,
      backgroundColor: "#36A2EB",
      borderColor: "#36A2EB",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "#36A2EB",
      hoverBorderColor: "#36A2EB",
      data: [
        "117462","56070",
        "44182","42372",
        "19260","17142",
        "16870","16446",
        "14209","12631",
        "12447","10831",
        "9732","8666",
        "7862","5911",
        "5673","4926",
        "4735","4671",
        "4511","4389",
        "4277","4115",
        "3045","2669",
        "2290","2060",
        "1438","1392",
        "1307","1156",
        "985","830",
      ],
      fill: false,
    }, {
      label: 'Sembuh',
      fill: false,
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "#FF6384",
      hoverBorderColor: "#FF6384",
      data: [
        "108116","49995",
        "32901","32491",
        "17172","13663",
        "14081","13961",
        "11640","11530",
        "11320","8153",
        "4930","7010",
        "6265", "4897",
        "4396","4149",
        "3254","3970",
        "3620","3540",
        "3588","3538",
        "2893","1327",
        "1946","1507",
        "934","1046",
        "925","859",
        "829","593",
      ],
    }, {
      label: 'Meninggal',
      backgroundColor: "#52D726",
      borderColor: "#52D726",
      borderWidth: 1,
      //stack: 1,
      hoverBackgroundColor: "#52D726",
      hoverBorderColor: "#52D726",
      data: [
        "2440","4007",
        "804","1990",
        "474","311",
        "528","382",
        "578","403",
        "502","298",
        "137","467",
        "282","225",
        "90","168",
        "117","71",
        "111","229",
        "79","53",
        "88","105",
        "76","22",
        "30","60",
        "17","48",
        "11","14",
      ],
    }]
  },
  
  options: {
    axisX: {
      showGrid: false,
      labelAngle: -45,
    },
    low: 0,
    high: 150000,
    height:400,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 5,
    },
    responsive: true,
      legend: {
        display: false
      },
      type: "bar"
  },
  // responsiveOptions: [
  //   [
  //     "screen and (max-width: 640px)",
  //     {
  //       seriesBarDistance: 5,
  //       axisX: {
  //         labelInterpolationFnc: function (value) {
  //           return value[0];
  //         },
  //       },
  //     },
  //   ],
  // ],
  animation: {
    draw: function (data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    },
  },
};

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {

  type: 'pie',
  data: {
    datasets :[{
      label: ["Data Covid 19"],
      data: [230, 750, 450, 300, 280],
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: true,
  },
};


module.exports = {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
};
