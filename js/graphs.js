var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
	min: -100,
	max: 100,
	count: 8,
	decimals: 2,
	continuity: 1
};


function generateLabels(config) {
	return utils.months(Chart.helpers.merge({
		count: inputs.count,
		section: 3
	}, config || {}));
}

var options = {
	maintainAspectRatio: false,
	spanGaps: false,
	elements: {
		line: {
			tension: 0.000001
		}
	},
	plugins: {
		filler: {
			propagate: false
		}
	},
	scales: {
		xAxes: [{

			ticks: {
				autoSkip: false,
				maxRotation: 0,
				fontColor: "#e0e9f0"
			},
			gridLines: {
				color: 'rgba(57,72,87,1)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			display: true,
			ticks: {
				beginAtZero:true,
				stepSize: 25,
				fontColor: "#e0e9f0",
				max: 100,
				callback: function(value) {
					return value + "%"
				}
			},
			gridLines: {
				offsetGridLines : true,
				color: 'rgba(57,72,87,1)',
				lineWidth: 1
			}
		}]

	}
};
var ctx = document.getElementById("chart-2").getContext("2d"); 

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(180,206,227,0.8)');   
gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

['start'].forEach(function(boundary, index) {

			// reset the random seed to generate the same data for all charts
			utils.srand(8);

			new Chart('chart-' + 2, {
				type: 'line',
				data: {
					labels: ["","01.10", "02.10", "03.10", "04.10", "05.10", "06.10", "07.10"],
					datasets: [{
						backgroundColor: gradient,
						borderColor: "rgba(0,0,0, 0)",
						data: [25, 36, 60, 40, 50, 45, 70, 65],
						label: 'My Second dataset',
						fill: boundary
					}]
				},
				options: Chart.helpers.merge(options, {
					title: {
						text: 'fill: ' + boundary,
						display: false
					},
					legend: {
						display: false
					}
				})
			});
		});