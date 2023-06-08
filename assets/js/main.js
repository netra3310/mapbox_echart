// handle mapbox
///////////////////////////////////////////////////////////////
// do something to get maximum concentrated position

let lng = -74.0059; // fixme set longitude as you need
let lat = 40.7128; // fixme set latitude as you need 
///////////////////////////////////////////////////////////////

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94bGVyb3kiLCJhIjoiY2xoNGl1NDRjMDZpajNybnc5dGFmOHhuaCJ9.RmA3pAOiiM3Se5sMF2A6mw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [lng, lat], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
map.on('load', () => {
    map.addLayer({
        id: 'collisions',
        type: 'circle',
        source: {
            type: 'geojson',
            data: './collision_origin.geojson'
        },
        paint: {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['number', ['get', 'Casualty']],
                0,
                4,
                8,
                16
            ],
            'circle-color': [
                'interpolate',
                ['linear'],
                ['number', ['get', 'Casualty']],
                0,
                '#2DC4B2',
                1,
                '#3BB3C3',
                2,
                '#669EC4',
                3,
                '#8B88B6',
                4,
                '#A2719B',
                5,
                '#AA5E79'
            ],
            'circle-opacity': 0.8
        }
    });
});
map.on('click', 'collisions', (e) => {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(e.features[0].properties.Casualty)
        .addTo(map);
})

// handle simple bar chart
var echartBarEle = document.getElementById("echart-bar");
var barChart = echarts.init(echartBarEle);
var barOption = {
    "dataset": {
    },
    "xAxis": {
        "type": "category",
    },
    "yAxis": {
        "type": "category",
    },
    "series": [{
        "type": "bar",
        "data": [1, 2, 4, 3, 5]
    }]
}
barChart.setOption(barOption);

// handle punch-card echart
var echartPunchCardEle = document.getElementById("echart-punch-card");
var punchCardChart = echarts.init(echartPunchCardEle);

var source = [
    { "week" : "12am", "yAxis" : "05-Apr", "value" : 35 },
    { "week" : "1am", "yAxis" : "05-Apr", "value" : 50 },
    { "week" : "2am", "yAxis" : "05-Apr", "value" : 37 },
    { "week" : "3am", "yAxis" : "05-Apr", "value" : 43 },
    { "week" : "4am", "yAxis" : "05-Apr", "value" : 36 },
    { "week" : "5am", "yAxis" : "05-Apr", "value" : 18 },
    { "week" : "6am", "yAxis" : "05-Apr", "value" : 47 },
    { "week" : "7am", "yAxis" : "05-Apr", "value" : 6 },
    { "week" : "8am", "yAxis" : "05-Apr", "value" : 22 },
    { "week" : "9am", "yAxis" : "05-Apr", "value" : 45 },
    { "week" : "10am", "yAxis" : "05-Apr", "value" : 15 },
    { "week" : "11am", "yAxis" : "05-Apr", "value" : 4 },
    { "week" : "12pm", "yAxis" : "05-Apr", "value" : 4 },
    { "week" : "1pm", "yAxis" : "05-Apr", "value" : 3 },
    { "week" : "2pm", "yAxis" : "05-Apr", "value" : 50 },
    { "week" : "3pm", "yAxis" : "05-Apr", "value" : 3 },
    { "week" : "4pm", "yAxis" : "05-Apr", "value" : 37 },
    { "week" : "5pm", "yAxis" : "05-Apr", "value" : 50 },
    { "week" : "6pm", "yAxis" : "05-Apr", "value" : 17 },
    { "week" : "7pm", "yAxis" : "05-Apr", "value" : 15 },
    { "week" : "8pm", "yAxis" : "05-Apr", "value" : 49 },
    { "week" : "9pm", "yAxis" : "05-Apr", "value" : 44 },
    { "week" : "10pm", "yAxis" : "05-Apr", "value" : 44 },
    { "week" : "11pm", "yAxis" : "05-Apr", "value" : 21 },
    
    { "week" : "12am", "yAxis" : "06-Apr", "value" : 27 },
    { "week" : "1am", "yAxis" : "06-Apr", "value" : 33 },
    { "week" : "2am", "yAxis" : "06-Apr", "value" : 3 },
    { "week" : "3am", "yAxis" : "06-Apr", "value" : 49 },
    { "week" : "4am", "yAxis" : "06-Apr", "value" : 1 },
    { "week" : "5am", "yAxis" : "06-Apr", "value" : 41 },
    { "week" : "6am", "yAxis" : "06-Apr", "value" : 22 },
    { "week" : "7am", "yAxis" : "06-Apr", "value" : 47 },
    { "week" : "8am", "yAxis" : "06-Apr", "value" : 25 },
    { "week" : "9am", "yAxis" : "06-Apr", "value" : 38 },
    { "week" : "10am", "yAxis" : "06-Apr", "value" : 23 },
    { "week" : "11am", "yAxis" : "06-Apr", "value" : 46 },
    { "week" : "12pm", "yAxis" : "06-Apr", "value" : 18 },
    { "week" : "1pm", "yAxis" : "06-Apr", "value" : 43 },
    { "week" : "2pm", "yAxis" : "06-Apr", "value" : 28 },
    { "week" : "3pm", "yAxis" : "06-Apr", "value" : 4 },
    { "week" : "4pm", "yAxis" : "06-Apr", "value" : 13 },
    { "week" : "5pm", "yAxis" : "06-Apr", "value" : 13 },
    { "week" : "6pm", "yAxis" : "06-Apr", "value" : 28 },
    { "week" : "7pm", "yAxis" : "06-Apr", "value" : 10 },
    { "week" : "8pm", "yAxis" : "06-Apr", "value" : 36 },
    { "week" : "9pm", "yAxis" : "06-Apr", "value" : 3 },
    { "week" : "10pm", "yAxis" : "06-Apr", "value" : 46 },
    { "week" : "11pm", "yAxis" : "06-Apr", "value" : 0 },
    
    { "week" : "12am", "yAxis" : "07-Apr", "value" : 16 },
    { "week" : "1am", "yAxis" : "07-Apr", "value" : 16 },
    { "week" : "2am", "yAxis" : "07-Apr", "value" : 17 },
    { "week" : "3am", "yAxis" : "07-Apr", "value" : 22 },
    { "week" : "4am", "yAxis" : "07-Apr", "value" : 13 },
    { "week" : "5am", "yAxis" : "07-Apr", "value" : 27 },
    { "week" : "6am", "yAxis" : "07-Apr", "value" : 45 },
    { "week" : "7am", "yAxis" : "07-Apr", "value" : 37 },
    { "week" : "8am", "yAxis" : "07-Apr", "value" : 0 },
    { "week" : "9am", "yAxis" : "07-Apr", "value" : 41 },
    { "week" : "10am", "yAxis" : "07-Apr", "value" : 37 },
    { "week" : "11am", "yAxis" : "07-Apr", "value" : 15 },
    { "week" : "12pm", "yAxis" : "07-Apr", "value" : 36 },
    { "week" : "1pm", "yAxis" : "07-Apr", "value" : 50 },
    { "week" : "2pm", "yAxis" : "07-Apr", "value" : 28 },
    { "week" : "3pm", "yAxis" : "07-Apr", "value" : 19 },
    { "week" : "4pm", "yAxis" : "07-Apr", "value" : 12 },
    { "week" : "5pm", "yAxis" : "07-Apr", "value" : 3 },
    { "week" : "6pm", "yAxis" : "07-Apr", "value" : 18 },
    { "week" : "7pm", "yAxis" : "07-Apr", "value" : 46 },
    { "week" : "8pm", "yAxis" : "07-Apr", "value" : 9 },
    { "week" : "9pm", "yAxis" : "07-Apr", "value" : 39 },
    { "week" : "10pm", "yAxis" : "07-Apr", "value" : 43 },
    { "week" : "11pm", "yAxis" : "07-Apr", "value" : 45 },

    { "week" : "12am", "yAxis" : "08-Apr", "value" : 49 },
    { "week" : "1am", "yAxis" : "08-Apr", "value" : 49 },
    { "week" : "2am", "yAxis" : "08-Apr", "value" : 1 },
    { "week" : "3am", "yAxis" : "08-Apr", "value" : 50 },
    { "week" : "4am", "yAxis" : "08-Apr", "value" : 8 },
    { "week" : "5am", "yAxis" : "08-Apr", "value" : 38 },
    { "week" : "6am", "yAxis" : "08-Apr", "value" : 3 },
    { "week" : "7am", "yAxis" : "08-Apr", "value" : 33 },
    { "week" : "8am", "yAxis" : "08-Apr", "value" : 45 },
    { "week" : "9am", "yAxis" : "08-Apr", "value" : 49 },
    { "week" : "10am", "yAxis" : "08-Apr", "value" : 1 },
    { "week" : "11am", "yAxis" : "08-Apr", "value" : 20 },
    { "week" : "12pm", "yAxis" : "08-Apr", "value" : 32 },
    { "week" : "1pm", "yAxis" : "08-Apr", "value" : 19 },
    { "week" : "2pm", "yAxis" : "08-Apr", "value" : 5 },
    { "week" : "3pm", "yAxis" : "08-Apr", "value" : 16 },
    { "week" : "4pm", "yAxis" : "08-Apr", "value" : 14 },
    { "week" : "5pm", "yAxis" : "08-Apr", "value" : 16 },
    { "week" : "6pm", "yAxis" : "08-Apr", "value" : 43 },
    { "week" : "7pm", "yAxis" : "08-Apr", "value" : 15 },
    { "week" : "8pm", "yAxis" : "08-Apr", "value" : 34 },
    { "week" : "9pm", "yAxis" : "08-Apr", "value" : 25 },
    { "week" : "10pm", "yAxis" : "08-Apr", "value" : 18 },
    { "week" : "11pm", "yAxis" : "08-Apr", "value" : 8 },
    
    { "week" : "12am", "yAxis" : "09-Apr", "value" : 38 },
    { "week" : "1am", "yAxis" : "09-Apr", "value" : 5 },
    { "week" : "2am", "yAxis" : "09-Apr", "value" : 34 },
    { "week" : "3am", "yAxis" : "09-Apr", "value" : 18 },
    { "week" : "4am", "yAxis" : "09-Apr", "value" : 18 },
    { "week" : "5am", "yAxis" : "09-Apr", "value" : 49 },
    { "week" : "6am", "yAxis" : "09-Apr", "value" : 22 },
    { "week" : "7am", "yAxis" : "09-Apr", "value" : 9 },
    { "week" : "8am", "yAxis" : "09-Apr", "value" : 39 },
    { "week" : "9am", "yAxis" : "09-Apr", "value" : 42 },
    { "week" : "10am", "yAxis" : "09-Apr", "value" : 47 },
    { "week" : "11am", "yAxis" : "09-Apr", "value" : 17 },
    { "week" : "12pm", "yAxis" : "09-Apr", "value" : 38 },
    { "week" : "1pm", "yAxis" : "09-Apr", "value" : 0 },
    { "week" : "2pm", "yAxis" : "09-Apr", "value" : 6 },
    { "week" : "3pm", "yAxis" : "09-Apr", "value" : 33 },
    { "week" : "4pm", "yAxis" : "09-Apr", "value" : 6 },
    { "week" : "5pm", "yAxis" : "09-Apr", "value" : 0 },
    { "week" : "6pm", "yAxis" : "09-Apr", "value" : 0 },
    { "week" : "7pm", "yAxis" : "09-Apr", "value" : 5 },
    { "week" : "8pm", "yAxis" : "09-Apr", "value" : 14 },
    { "week" : "9pm", "yAxis" : "09-Apr", "value" : 43 },
    { "week" : "10pm", "yAxis" : "09-Apr", "value" : 44 },
    { "week" : "11pm", "yAxis" : "09-Apr", "value" : 39 },
    
    { "week" : "12am", "yAxis" : "10-Apr", "value" : 35 },
    { "week" : "1am", "yAxis" : "10-Apr", "value" : 6 },
    { "week" : "2am", "yAxis" : "10-Apr", "value" : 36 },
    { "week" : "3am", "yAxis" : "10-Apr", "value" : 1 },
    { "week" : "4am", "yAxis" : "10-Apr", "value" : 37 },
    { "week" : "5am", "yAxis" : "10-Apr", "value" : 46 },
    { "week" : "6am", "yAxis" : "10-Apr", "value" : 30 },
    { "week" : "7am", "yAxis" : "10-Apr", "value" : 48 },
    { "week" : "8am", "yAxis" : "10-Apr", "value" : 42 },
    { "week" : "9am", "yAxis" : "10-Apr", "value" : 35 },
    { "week" : "10am", "yAxis" : "10-Apr", "value" : 9 },
    { "week" : "11am", "yAxis" : "10-Apr", "value" : 35 },
    { "week" : "12pm", "yAxis" : "10-Apr", "value" : 26 },
    { "week" : "1pm", "yAxis" : "10-Apr", "value" : 1 },
    { "week" : "2pm", "yAxis" : "10-Apr", "value" : 16 },
    { "week" : "3pm", "yAxis" : "10-Apr", "value" : 38 },
    { "week" : "4pm", "yAxis" : "10-Apr", "value" : 42 },
    { "week" : "5pm", "yAxis" : "10-Apr", "value" : 39 },
    { "week" : "6pm", "yAxis" : "10-Apr", "value" : 21 },
    { "week" : "7pm", "yAxis" : "10-Apr", "value" : 7 },
    { "week" : "8pm", "yAxis" : "10-Apr", "value" : 4 },
    { "week" : "9pm", "yAxis" : "10-Apr", "value" : 36 },
    { "week" : "10pm", "yAxis" : "10-Apr", "value" : 6 },
    { "week" : "11pm", "yAxis" : "10-Apr", "value" : 3 },
    
    { "week" : "12am", "yAxis" : "11-Apr", "value" : 34 },
    { "week" : "1am", "yAxis" : "11-Apr", "value" : 11 },
    { "week" : "2am", "yAxis" : "11-Apr", "value" : 5 },
    { "week" : "3am", "yAxis" : "11-Apr", "value" : 33 },
    { "week" : "4am", "yAxis" : "11-Apr", "value" : 36 },
    { "week" : "5am", "yAxis" : "11-Apr", "value" : 9 },
    { "week" : "6am", "yAxis" : "11-Apr", "value" : 29 },
    { "week" : "7am", "yAxis" : "11-Apr", "value" : 32 },
    { "week" : "8am", "yAxis" : "11-Apr", "value" : 49 },
    { "week" : "9am", "yAxis" : "11-Apr", "value" : 44 },
    { "week" : "10am", "yAxis" : "11-Apr", "value" : 27 },
    { "week" : "11am", "yAxis" : "11-Apr", "value" : 27 },
    { "week" : "12pm", "yAxis" : "11-Apr", "value" : 21 },
    { "week" : "1pm", "yAxis" : "11-Apr", "value" : 30 },
    { "week" : "2pm", "yAxis" : "11-Apr", "value" : 26 },
    { "week" : "3pm", "yAxis" : "11-Apr", "value" : 20 },
    { "week" : "4pm", "yAxis" : "11-Apr", "value" : 8 },
    { "week" : "5pm", "yAxis" : "11-Apr", "value" : 45 },
    { "week" : "6pm", "yAxis" : "11-Apr", "value" : 16 },
    { "week" : "7pm", "yAxis" : "11-Apr", "value" : 27 },
    { "week" : "8pm", "yAxis" : "11-Apr", "value" : 43 },
    { "week" : "9pm", "yAxis" : "11-Apr", "value" : 8 },
    { "week" : "10pm", "yAxis" : "11-Apr", "value" : 22 },
    { "week" : "11pm", "yAxis" : "11-Apr", "value" : 19 },
    
    { "week" : "12am", "yAxis" : "12-Apr", "value" : 45 },
    { "week" : "1am", "yAxis" : "12-Apr", "value" : 3 },
    { "week" : "2am", "yAxis" : "12-Apr", "value" : 15 },
    { "week" : "3am", "yAxis" : "12-Apr", "value" : 19 },
    { "week" : "4am", "yAxis" : "12-Apr", "value" : 1 },
    { "week" : "5am", "yAxis" : "12-Apr", "value" : 13 },
    { "week" : "6am", "yAxis" : "12-Apr", "value" : 40 },
    { "week" : "7am", "yAxis" : "12-Apr", "value" : 45 },
    { "week" : "8am", "yAxis" : "12-Apr", "value" : 47 },
    { "week" : "9am", "yAxis" : "12-Apr", "value" : 21 },
    { "week" : "10am", "yAxis" : "12-Apr", "value" : 9 },
    { "week" : "11am", "yAxis" : "12-Apr", "value" : 18 },
    { "week" : "12pm", "yAxis" : "12-Apr", "value" : 10 },
    { "week" : "1pm", "yAxis" : "12-Apr", "value" : 17 },
    { "week" : "2pm", "yAxis" : "12-Apr", "value" : 26 },
    { "week" : "3pm", "yAxis" : "12-Apr", "value" : 29 },
    { "week" : "4pm", "yAxis" : "12-Apr", "value" : 42 },
    { "week" : "5pm", "yAxis" : "12-Apr", "value" : 46 },
    { "week" : "6pm", "yAxis" : "12-Apr", "value" : 23 },
    { "week" : "7pm", "yAxis" : "12-Apr", "value" : 21 },
    { "week" : "8pm", "yAxis" : "12-Apr", "value" : 10 },
    { "week" : "9pm", "yAxis" : "12-Apr", "value" : 46 },
    { "week" : "10pm", "yAxis" : "12-Apr", "value" : 38 },
    { "week" : "11pm", "yAxis" : "12-Apr", "value" : 32 },
    
    { "week" : "12am", "yAxis" : "13-Apr", "value" : 39 },
    { "week" : "1am", "yAxis" : "13-Apr", "value" : 31 },
    { "week" : "2am", "yAxis" : "13-Apr", "value" : 48 },
    { "week" : "3am", "yAxis" : "13-Apr", "value" : 4 },
    { "week" : "4am", "yAxis" : "13-Apr", "value" : 20 },
    { "week" : "5am", "yAxis" : "13-Apr", "value" : 48 },
    { "week" : "6am", "yAxis" : "13-Apr", "value" : 50 },
    { "week" : "7am", "yAxis" : "13-Apr", "value" : 16 },
    { "week" : "8am", "yAxis" : "13-Apr", "value" : 38 },
    { "week" : "9am", "yAxis" : "13-Apr", "value" : 26 },
    { "week" : "10am", "yAxis" : "13-Apr", "value" : 29 },
    { "week" : "11am", "yAxis" : "13-Apr", "value" : 18 },
    { "week" : "12pm", "yAxis" : "13-Apr", "value" : 44 },
    { "week" : "1pm", "yAxis" : "13-Apr", "value" : 27 },
    { "week" : "2pm", "yAxis" : "13-Apr", "value" : 21 },
    { "week" : "3pm", "yAxis" : "13-Apr", "value" : 40 },
    { "week" : "4pm", "yAxis" : "13-Apr", "value" : 47 },
    { "week" : "5pm", "yAxis" : "13-Apr", "value" : 28 },
    { "week" : "6pm", "yAxis" : "13-Apr", "value" : 34 },
    { "week" : "7pm", "yAxis" : "13-Apr", "value" : 48 },
    { "week" : "8pm", "yAxis" : "13-Apr", "value" : 21 },
    { "week" : "9pm", "yAxis" : "13-Apr", "value" : 39 },
    { "week" : "10pm", "yAxis" : "13-Apr", "value" : 34 },
    { "week" : "11pm", "yAxis" : "13-Apr", "value" : 14 },
    
    { "week" : "12am", "yAxis" : "14-Apr", "value" : 34 },
    { "week" : "1am", "yAxis" : "14-Apr", "value" : 17 },
    { "week" : "2am", "yAxis" : "14-Apr", "value" : 37 },
    { "week" : "3am", "yAxis" : "14-Apr", "value" : 50 },
    { "week" : "4am", "yAxis" : "14-Apr", "value" : 48 },
    { "week" : "5am", "yAxis" : "14-Apr", "value" : 14 },
    { "week" : "6am", "yAxis" : "14-Apr", "value" : 44 },
    { "week" : "7am", "yAxis" : "14-Apr", "value" : 48 },
    { "week" : "8am", "yAxis" : "14-Apr", "value" : 9 },
    { "week" : "9am", "yAxis" : "14-Apr", "value" : 17 },
    { "week" : "10am", "yAxis" : "14-Apr", "value" : 36 },
    { "week" : "11am", "yAxis" : "14-Apr", "value" : 49 },
    { "week" : "12pm", "yAxis" : "14-Apr", "value" : 7 },
    { "week" : "1pm", "yAxis" : "14-Apr", "value" : 18 },
    { "week" : "2pm", "yAxis" : "14-Apr", "value" : 12 },
    { "week" : "3pm", "yAxis" : "14-Apr", "value" : 30 },
    { "week" : "4pm", "yAxis" : "14-Apr", "value" : 35 },
    { "week" : "5pm", "yAxis" : "14-Apr", "value" : 0 },
    { "week" : "6pm", "yAxis" : "14-Apr", "value" : 33 },
    { "week" : "7pm", "yAxis" : "14-Apr", "value" : 47 },
    { "week" : "8pm", "yAxis" : "14-Apr", "value" : 25 },
    { "week" : "9pm", "yAxis" : "14-Apr", "value" : 39 },
    { "week" : "10pm", "yAxis" : "14-Apr", "value" : 6 },
    { "week" : "11pm", "yAxis" : "14-Apr", "value" : 33 },
    
    { "week" : "12am", "yAxis" : "15-Apr", "value" : 16 },
    { "week" : "1am", "yAxis" : "15-Apr", "value" : 29 },
    { "week" : "2am", "yAxis" : "15-Apr", "value" : 19 },
    { "week" : "3am", "yAxis" : "15-Apr", "value" : 4 },
    { "week" : "4am", "yAxis" : "15-Apr", "value" : 40 },
    { "week" : "5am", "yAxis" : "15-Apr", "value" : 19 },
    { "week" : "6am", "yAxis" : "15-Apr", "value" : 9 },
    { "week" : "7am", "yAxis" : "15-Apr", "value" : 29 },
    { "week" : "8am", "yAxis" : "15-Apr", "value" : 7 },
    { "week" : "9am", "yAxis" : "15-Apr", "value" : 44 },
    { "week" : "10am", "yAxis" : "15-Apr", "value" : 31 },
    { "week" : "11am", "yAxis" : "15-Apr", "value" : 20 },
    { "week" : "12pm", "yAxis" : "15-Apr", "value" : 5 },
    { "week" : "1pm", "yAxis" : "15-Apr", "value" : 16 },
    { "week" : "2pm", "yAxis" : "15-Apr", "value" : 1 },
    { "week" : "3pm", "yAxis" : "15-Apr", "value" : 17 },
    { "week" : "4pm", "yAxis" : "15-Apr", "value" : 27 },
    { "week" : "5pm", "yAxis" : "15-Apr", "value" : 3 },
    { "week" : "6pm", "yAxis" : "15-Apr", "value" : 24 },
    { "week" : "7pm", "yAxis" : "15-Apr", "value" : 13 },
    { "week" : "8pm", "yAxis" : "15-Apr", "value" : 5 },
    { "week" : "9pm", "yAxis" : "15-Apr", "value" : 1 },
    { "week" : "10pm", "yAxis" : "15-Apr", "value" : 30 },
    { "week" : "11pm", "yAxis" : "15-Apr", "value" : 28 },
    
    { "week" : "12am", "yAxis" : "16-Apr", "value" : 9 },
    { "week" : "1am", "yAxis" : "16-Apr", "value" : 11 },
    { "week" : "2am", "yAxis" : "16-Apr", "value" : 0 },
    { "week" : "3am", "yAxis" : "16-Apr", "value" : 21 },
    { "week" : "4am", "yAxis" : "16-Apr", "value" : 29 },
    { "week" : "5am", "yAxis" : "16-Apr", "value" : 38 },
    { "week" : "6am", "yAxis" : "16-Apr", "value" : 40 },
    { "week" : "7am", "yAxis" : "16-Apr", "value" : 14 },
    { "week" : "8am", "yAxis" : "16-Apr", "value" : 40 },
    { "week" : "9am", "yAxis" : "16-Apr", "value" : 30 },
    { "week" : "10am", "yAxis" : "16-Apr", "value" : 21 },
    { "week" : "11am", "yAxis" : "16-Apr", "value" : 28 },
    { "week" : "12pm", "yAxis" : "16-Apr", "value" : 9 },
    { "week" : "1pm", "yAxis" : "16-Apr", "value" : 20 },
    { "week" : "2pm", "yAxis" : "16-Apr", "value" : 33 },
    { "week" : "3pm", "yAxis" : "16-Apr", "value" : 19 },
    { "week" : "4pm", "yAxis" : "16-Apr", "value" : 40 },
    { "week" : "5pm", "yAxis" : "16-Apr", "value" : 36 },
    { "week" : "6pm", "yAxis" : "16-Apr", "value" : 25 },
    { "week" : "7pm", "yAxis" : "16-Apr", "value" : 50 },
    { "week" : "8pm", "yAxis" : "16-Apr", "value" : 47 },
    { "week" : "9pm", "yAxis" : "16-Apr", "value" : 14 },
    { "week" : "10pm", "yAxis" : "16-Apr", "value" : 46 },
    { "week" : "11pm", "yAxis" : "16-Apr", "value" : 19 },
    
    { "week" : "12am", "yAxis" : "17-Apr", "value" : 33 },
    { "week" : "1am", "yAxis" : "17-Apr", "value" : 45 },
    { "week" : "2am", "yAxis" : "17-Apr", "value" : 17 },
    { "week" : "3am", "yAxis" : "17-Apr", "value" : 43 },
    { "week" : "4am", "yAxis" : "17-Apr", "value" : 23 },
    { "week" : "5am", "yAxis" : "17-Apr", "value" : 15 },
    { "week" : "6am", "yAxis" : "17-Apr", "value" : 4 },
    { "week" : "7am", "yAxis" : "17-Apr", "value" : 10 },
    { "week" : "8am", "yAxis" : "17-Apr", "value" : 25 },
    { "week" : "9am", "yAxis" : "17-Apr", "value" : 2 },
    { "week" : "10am", "yAxis" : "17-Apr", "value" : 8 },
    { "week" : "11am", "yAxis" : "17-Apr", "value" : 39 },
    { "week" : "12pm", "yAxis" : "17-Apr", "value" : 24 },
    { "week" : "1pm", "yAxis" : "17-Apr", "value" : 6 },
    { "week" : "2pm", "yAxis" : "17-Apr", "value" : 19 },
    { "week" : "3pm", "yAxis" : "17-Apr", "value" : 29 },
    { "week" : "4pm", "yAxis" : "17-Apr", "value" : 36 },
    { "week" : "5pm", "yAxis" : "17-Apr", "value" : 8 },
    { "week" : "6pm", "yAxis" : "17-Apr", "value" : 40 },
    { "week" : "7pm", "yAxis" : "17-Apr", "value" : 3 },
    { "week" : "8pm", "yAxis" : "17-Apr", "value" : 36 },
    { "week" : "9pm", "yAxis" : "17-Apr", "value" : 24 },
    { "week" : "10pm", "yAxis" : "17-Apr", "value" : 44 },
    { "week" : "11pm", "yAxis" : "17-Apr", "value" : 17 },
    
    { "week" : "12am", "yAxis" : "18-Apr", "value" : 20 },
    { "week" : "1am", "yAxis" : "18-Apr", "value" : 42 },
    { "week" : "2am", "yAxis" : "18-Apr", "value" : 40 },
    { "week" : "3am", "yAxis" : "18-Apr", "value" : 8 },
    { "week" : "4am", "yAxis" : "18-Apr", "value" : 20 },
    { "week" : "5am", "yAxis" : "18-Apr", "value" : 48 },
    { "week" : "6am", "yAxis" : "18-Apr", "value" : 9 },
    { "week" : "7am", "yAxis" : "18-Apr", "value" : 28 },
    { "week" : "8am", "yAxis" : "18-Apr", "value" : 31 },
    { "week" : "9am", "yAxis" : "18-Apr", "value" : 38 },
    { "week" : "10am", "yAxis" : "18-Apr", "value" : 12 },
    { "week" : "11am", "yAxis" : "18-Apr", "value" : 10 },
    { "week" : "12pm", "yAxis" : "18-Apr", "value" : 32 },
    { "week" : "1pm", "yAxis" : "18-Apr", "value" : 0 },
    { "week" : "2pm", "yAxis" : "18-Apr", "value" : 33 },
    { "week" : "3pm", "yAxis" : "18-Apr", "value" : 43 },
    { "week" : "4pm", "yAxis" : "18-Apr", "value" : 14 },
    { "week" : "5pm", "yAxis" : "18-Apr", "value" : 39 },
    { "week" : "6pm", "yAxis" : "18-Apr", "value" : 16 },
    { "week" : "7pm", "yAxis" : "18-Apr", "value" : 15 },
    { "week" : "8pm", "yAxis" : "18-Apr", "value" : 32 },
    { "week" : "9pm", "yAxis" : "18-Apr", "value" : 28 },
    { "week" : "10pm", "yAxis" : "18-Apr", "value" : 15 },
    { "week" : "11pm", "yAxis" : "18-Apr", "value" : 8 },
    
    { "week" : "12am", "yAxis" : "20-Apr", "value" : 48 },
    { "week" : "1am", "yAxis" : "20-Apr", "value" : 3 },
    { "week" : "2am", "yAxis" : "20-Apr", "value" : 41 },
    { "week" : "3am", "yAxis" : "20-Apr", "value" : 35 },
    { "week" : "4am", "yAxis" : "20-Apr", "value" : 10 },
    { "week" : "5am", "yAxis" : "20-Apr", "value" : 6 },
    { "week" : "6am", "yAxis" : "20-Apr", "value" : 33 },
    { "week" : "7am", "yAxis" : "20-Apr", "value" : 45 },
    { "week" : "8am", "yAxis" : "20-Apr", "value" : 1 },
    { "week" : "9am", "yAxis" : "20-Apr", "value" : 9 },
    { "week" : "10am", "yAxis" : "20-Apr", "value" : 10 },
    { "week" : "11am", "yAxis" : "20-Apr", "value" : 17 },
    { "week" : "12pm", "yAxis" : "20-Apr", "value" : 10 },
    { "week" : "1pm", "yAxis" : "20-Apr", "value" : 2 },
    { "week" : "2pm", "yAxis" : "20-Apr", "value" : 24 },
    { "week" : "3pm", "yAxis" : "20-Apr", "value" : 42 },
    { "week" : "4pm", "yAxis" : "20-Apr", "value" : 16 },
    { "week" : "5pm", "yAxis" : "20-Apr", "value" : 29 },
    { "week" : "6pm", "yAxis" : "20-Apr", "value" : 39 },
    { "week" : "7pm", "yAxis" : "20-Apr", "value" : 19 },
    { "week" : "8pm", "yAxis" : "20-Apr", "value" : 38 },
    { "week" : "9pm", "yAxis" : "20-Apr", "value" : 6 },
    { "week" : "10pm", "yAxis" : "20-Apr", "value" : 7 },
    { "week" : "11pm", "yAxis" : "20-Apr", "value" : 9 },
    
    { "week" : "12am", "yAxis" : "21-Apr", "value" : 29 },
    { "week" : "1am", "yAxis" : "21-Apr", "value" : 49 },
    { "week" : "2am", "yAxis" : "21-Apr", "value" : 40 },
    { "week" : "3am", "yAxis" : "21-Apr", "value" : 2 },
    { "week" : "4am", "yAxis" : "21-Apr", "value" : 16 },
    { "week" : "5am", "yAxis" : "21-Apr", "value" : 45 },
    { "week" : "6am", "yAxis" : "21-Apr", "value" : 47 },
    { "week" : "7am", "yAxis" : "21-Apr", "value" : 7 },
    { "week" : "8am", "yAxis" : "21-Apr", "value" : 50 },
    { "week" : "9am", "yAxis" : "21-Apr", "value" : 2 },
    { "week" : "10am", "yAxis" : "21-Apr", "value" : 17 },
    { "week" : "11am", "yAxis" : "21-Apr", "value" : 6 },
    { "week" : "12pm", "yAxis" : "21-Apr", "value" : 49 },
    { "week" : "1pm", "yAxis" : "21-Apr", "value" : 17 },
    { "week" : "2pm", "yAxis" : "21-Apr", "value" : 41 },
    { "week" : "3pm", "yAxis" : "21-Apr", "value" : 17 },
    { "week" : "4pm", "yAxis" : "21-Apr", "value" : 5 },
    { "week" : "5pm", "yAxis" : "21-Apr", "value" : 48 },
    { "week" : "6pm", "yAxis" : "21-Apr", "value" : 11 },
    { "week" : "7pm", "yAxis" : "21-Apr", "value" : 49 },
    { "week" : "8pm", "yAxis" : "21-Apr", "value" : 22 },
    { "week" : "9pm", "yAxis" : "21-Apr", "value" : 0 },
    { "week" : "10pm", "yAxis" : "21-Apr", "value" : 0 },
    { "week" : "11pm", "yAxis" : "21-Apr", "value" : 17 },

    { "week" : "12am", "yAxis" : "22-Apr", "value" : 36 },
    { "week" : "1am", "yAxis" : "22-Apr", "value" : 5 },
    { "week" : "2am", "yAxis" : "22-Apr", "value" : 8 },
    { "week" : "3am", "yAxis" : "22-Apr", "value" : 17 },
    { "week" : "4am", "yAxis" : "22-Apr", "value" : 37 },
    { "week" : "5am", "yAxis" : "22-Apr", "value" : 42 },
    { "week" : "6am", "yAxis" : "22-Apr", "value" : 12 },
    { "week" : "7am", "yAxis" : "22-Apr", "value" : 25 },
    { "week" : "8am", "yAxis" : "22-Apr", "value" : 14 },
    { "week" : "9am", "yAxis" : "22-Apr", "value" : 48 },
    { "week" : "10am", "yAxis" : "22-Apr", "value" : 23 },
    { "week" : "11am", "yAxis" : "22-Apr", "value" : 8 },
    { "week" : "12pm", "yAxis" : "22-Apr", "value" : 26 },
    { "week" : "1pm", "yAxis" : "22-Apr", "value" : 41 },
    { "week" : "2pm", "yAxis" : "22-Apr", "value" : 20 },
    { "week" : "3pm", "yAxis" : "22-Apr", "value" : 48 },
    { "week" : "4pm", "yAxis" : "22-Apr", "value" : 28 },
    { "week" : "5pm", "yAxis" : "22-Apr", "value" : 27 },
    { "week" : "6pm", "yAxis" : "22-Apr", "value" : 29 },
    { "week" : "7pm", "yAxis" : "22-Apr", "value" : 21 },
    { "week" : "8pm", "yAxis" : "22-Apr", "value" : 27 },
    { "week" : "9pm", "yAxis" : "22-Apr", "value" : 17 },
    { "week" : "10pm", "yAxis" : "22-Apr", "value" : 45 },
    { "week" : "11pm", "yAxis" : "22-Apr", "value" : 15 },
    
    { "week" : "12am", "yAxis" : "23-Apr", "value" : 12 },
    { "week" : "1am", "yAxis" : "23-Apr", "value" : 19 },
    { "week" : "2am", "yAxis" : "23-Apr", "value" : 17 },
    { "week" : "3am", "yAxis" : "23-Apr", "value" : 39 },
    { "week" : "4am", "yAxis" : "23-Apr", "value" : 19 },
    { "week" : "5am", "yAxis" : "23-Apr", "value" : 29 },
    { "week" : "6am", "yAxis" : "23-Apr", "value" : 8 },
    { "week" : "7am", "yAxis" : "23-Apr", "value" : 39 },
    { "week" : "8am", "yAxis" : "23-Apr", "value" : 2 },
    { "week" : "9am", "yAxis" : "23-Apr", "value" : 9 },
    { "week" : "10am", "yAxis" : "23-Apr", "value" : 16 },
    { "week" : "11am", "yAxis" : "23-Apr", "value" : 13 },
    { "week" : "12pm", "yAxis" : "23-Apr", "value" : 41 },
    { "week" : "1pm", "yAxis" : "23-Apr", "value" : 47 },
    { "week" : "2pm", "yAxis" : "23-Apr", "value" : 49 },
    { "week" : "3pm", "yAxis" : "23-Apr", "value" : 25 },
    { "week" : "4pm", "yAxis" : "23-Apr", "value" : 13 },
    { "week" : "5pm", "yAxis" : "23-Apr", "value" : 1 },
    { "week" : "6pm", "yAxis" : "23-Apr", "value" : 11 },
    { "week" : "7pm", "yAxis" : "23-Apr", "value" : 34 },
    { "week" : "8pm", "yAxis" : "23-Apr", "value" : 13 },
    { "week" : "9pm", "yAxis" : "23-Apr", "value" : 39 },
    { "week" : "10pm", "yAxis" : "23-Apr", "value" : 32 },
    { "week" : "11pm", "yAxis" : "23-Apr", "value" : 13 },
    
    { "week" : "12am", "yAxis" : "24-Apr", "value" : 5 },
    { "week" : "1am", "yAxis" : "24-Apr", "value" : 40 },
    { "week" : "2am", "yAxis" : "24-Apr", "value" : 13 },
    { "week" : "3am", "yAxis" : "24-Apr", "value" : 44 },
    { "week" : "4am", "yAxis" : "24-Apr", "value" : 0 },
    { "week" : "5am", "yAxis" : "24-Apr", "value" : 46 },
    { "week" : "6am", "yAxis" : "24-Apr", "value" : 0 },
    { "week" : "7am", "yAxis" : "24-Apr", "value" : 45 },
    { "week" : "8am", "yAxis" : "24-Apr", "value" : 50 },
    { "week" : "9am", "yAxis" : "24-Apr", "value" : 4 },
    { "week" : "10am", "yAxis" : "24-Apr", "value" : 18 },
    { "week" : "11am", "yAxis" : "24-Apr", "value" : 34 },
    { "week" : "12pm", "yAxis" : "24-Apr", "value" : 44 },
    { "week" : "1pm", "yAxis" : "24-Apr", "value" : 38 },
    { "week" : "2pm", "yAxis" : "24-Apr", "value" : 7 },
    { "week" : "3pm", "yAxis" : "24-Apr", "value" : 48 },
    { "week" : "4pm", "yAxis" : "24-Apr", "value" : 17 },
    { "week" : "5pm", "yAxis" : "24-Apr", "value" : 48 },
    { "week" : "6pm", "yAxis" : "24-Apr", "value" : 10 },
    { "week" : "7pm", "yAxis" : "24-Apr", "value" : 31 },
    { "week" : "8pm", "yAxis" : "24-Apr", "value" : 49 },
    { "week" : "9pm", "yAxis" : "24-Apr", "value" : 32 },
    { "week" : "10pm", "yAxis" : "24-Apr", "value" : 30 },
    { "week" : "11pm", "yAxis" : "24-Apr", "value" : 30 },
    
    { "week" : "12am", "yAxis" : "25-Apr", "value" : 8 },
    { "week" : "1am", "yAxis" : "25-Apr", "value" : 6 },
    { "week" : "2am", "yAxis" : "25-Apr", "value" : 9 },
    { "week" : "3am", "yAxis" : "25-Apr", "value" : 23 },
    { "week" : "4am", "yAxis" : "25-Apr", "value" : 25 },
    { "week" : "5am", "yAxis" : "25-Apr", "value" : 3 },
    { "week" : "6am", "yAxis" : "25-Apr", "value" : 28 },
    { "week" : "7am", "yAxis" : "25-Apr", "value" : 14 },
    { "week" : "8am", "yAxis" : "25-Apr", "value" : 49 },
    { "week" : "9am", "yAxis" : "25-Apr", "value" : 42 },
    { "week" : "10am", "yAxis" : "25-Apr", "value" : 30 },
    { "week" : "11am", "yAxis" : "25-Apr", "value" : 0 },
    { "week" : "12pm", "yAxis" : "25-Apr", "value" : 8 },
    { "week" : "1pm", "yAxis" : "25-Apr", "value" : 19 },
    { "week" : "2pm", "yAxis" : "25-Apr", "value" : 41 },
    { "week" : "3pm", "yAxis" : "25-Apr", "value" : 28 },
    { "week" : "4pm", "yAxis" : "25-Apr", "value" : 19 },
    { "week" : "5pm", "yAxis" : "25-Apr", "value" : 12 },
    { "week" : "6pm", "yAxis" : "25-Apr", "value" : 22 },
    { "week" : "7pm", "yAxis" : "25-Apr", "value" : 24 },
    { "week" : "8pm", "yAxis" : "25-Apr", "value" : 50 },
    { "week" : "9pm", "yAxis" : "25-Apr", "value" : 3 },
    { "week" : "10pm", "yAxis" : "25-Apr", "value" : 16 },
    { "week" : "11pm", "yAxis" : "25-Apr", "value" : 43 }	
];

var punchOption = {
    "tooltip": {
		trigger: "item",
        formatter: function(params) {
            return `
                ${params.data.yAxis} : ${params.data.week} <br/>
                value: ${params.data.value}
            `;
        }
	},
    "dataset": {
        "source": source,
        "dimensions": ["week", "yAxis", "value"]
    },

    "xAxis": {
        "type": "category"
    },

    "yAxis": {
        "type": "category"
    },

    "series": [{
        "type": "scatter",
        symbolSize: function (val) {
            return val.value / 3;
        }
    }]
};

punchOption && punchCardChart.setOption(punchOption);

punchCardChart.on('click', { seriesIndex: 0 }, function(event) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var rowDate = event.data.yAxis;
    var rowHour = event.data.week;

    var selectedDatetime = document.getElementById("selected-datetime");
    selectedDatetime.innerHTML = rowDate + "::" + rowHour;


    var ampm = rowHour.slice(-2);
    var onlyDay = rowDate.slice(0, 2);
    var day = "";
    var hour = 0;
    if (ampm === "am") {
        hour = parseInt(rowHour.substr(0, rowHour.length - 2));
    } else {
        hour = parseInt(rowHour.substr(0, rowHour.length - 2)) + 12;
    }
    day = days[parseInt(onlyDay) % 7];

    var filterDate = ['==', ['string', ['get', 'Day']], day];
    var filterHour = ["==", ["number", ["get", "Hour"]], hour];
    map.setFilter("collisions", ["all", filterDate, filterHour]);

    /*
    map.flyTo({
        // do something to calculate moving position
        center: [lng + (event.data.value - 50) / 5 , lat - (event.data.value - 50) / 5],
        essential: false
    });
    */
});

function toggleDashboard(type) {
	switch (type) {
		case "left":
			$("#container-map").animate({ "marginLeft": "+=100%" }, 500, function() {
				$(this).hide();
				$(this).css("marginLeft", "0");
			  });
			$("#container-echarts").css("marginLeft", "-100%").show().animate({ "marginLeft": "0" }, 500);
			break;
		case "right":
			$("#container-echarts").animate({ "marginRight": "+=100%" }, 500, function() {
				$(this).hide();
				$(this).css("marginRight", "0");
			  });
			$("#container-map").css("marginLeft", "100%").show().animate({ "marginLeft": "0" }, 500);
			break;
		case "top":
			$("#container-punch-card").slideDown(500, function() {
				$(this).hide();
			});
			$("#container-map").slideDown(500);
			break;
		case "bottom":
			$("#container-punch-card").slideUp(500, function() {
				$(this).show();
			});
			$("#container-map").slideUp(500, function() {
				$(this).hide();
			});
			break;
	}

}
