var host = 'http://127.0.0.1:8000';

var active_users_echarts = echarts.init(document.getElementById('active_users'), 'light', {renderer: 'canvas'});
var active_users_option = {
    "title": [
        {
            "text": "活跃用户",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 1457440,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "bar",
            "name": "\u53d1\u5f39\u5e55\u6570Top5\u7528\u6237",
            "data": [
                486.0,
                463.0,
                440.0,
                330.0,
                322.0
            ],
            "barCategoryGap": "20%",
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 1457440
        }
    ],
    "legend": [
        {
            "data": [
                "\u53d1\u5f39\u5e55\u6570Top5\u7528\u6237"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                "5ff19abd",
                "f3b9d465",
                "d6621cef",
                "bde87c65",
                "21d98af1"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#c23531",
    ]
};

var plot_changes_echarts = echarts.init(document.getElementById('plot_changes'), 'light', {renderer: 'canvas'});
var plot_changes_option = {
    "title": [
        {
            "text": "视频情节起伏",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 6018137,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "line",
            "name": "响应度",
            "symbol": "emptyCircle",
            "symbolSize": 4,
            "smooth": false,
            "step": false,
            "showSymbol": true,
            "data": [],
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "areaStyle": {
                "opacity": 0,
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "silent": true,
                "data": [{
                    "yAxis": 300
                }, {
                    "yAxis": 500
                }]
            },
            "seriesId": 6018137
        }
    ],
    "legend": [
        {
            "data": [
                "响应度"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12,
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": []
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "visualMap": {
        "top": 10,
        "right": 10,
        "pieces": [{
            "gt": 0,
            "lte": 300,
            "color": '#995230'
        },{
            "gt": 300,
            "lte": 500,
            "color": '#ffde33'
        },{
            "gt": 500,
            "color": '#ff0a1b'
        }],
        "outOfRange": {
            "color": '#999'
        }
    },
    "color": [
        "#1d953f"
    ]
};

var classic_barrage_echarts = echarts.init(document.getElementById('classic_barrage'), 'light', {renderer: 'canvas'});
var classic_barrage_option = {
    "title": [
        {
            "text": "视频经典弹幕",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 8388522,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "wordCloud",
            "shape": "circle",
            "rotationRange": [
                -90,
                90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
                12,
                60
            ],
            "data": []
        }
    ],
    "legend": [
        {
            "data": [],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
};

var emotional_changes_echarts = echarts.init(document.getElementById('emotional_changes'), 'light', {renderer: 'canvas'});
var emotional_changes_option = {
    title: {
        text: '观众情感分析'
    },
    tooltip: {},
    legend: {
        data: ['情感强度']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor:  "#00BFFF",
                borderRadius: 50,
                padding: [3, 5]
            }
        },
        indicator: []
    },
    series: [{
        type: 'radar',
        areaStyle: {normal: {opacity: 0.5}},
        data : [
            {
                name : '情感强度'
            }
        ]
    }],
    toolbox: {
        show: true,
        orient: "vertical",
        left: "95%",
        top: "center",
        feature: {
            saveAsImage: {
                show: true,
                title: "save as image"
            },
            restore: {
                show: true,
                title: "restore"
            },
            dataView: {
                show: true,
                title: "data view"
            }
        }
    }
};

var overall_evaluation_echarts = echarts.init(document.getElementById('overall_evaluation'), 'light', {renderer: 'canvas'});
var overall_evaluation_option = {
    title : {
        text: '视频总体评价',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        data:[]
    },
    toolbox: {
        show: true,
        orient: "vertical",
        left: "95%",
        top: "center",
        feature: {
            saveAsImage: {
                show: true,
                title: "save as image"
            },
            restore: {
                show: true,
                title: "restore"
            },
            dataView: {
                show: true,
                title: "data view"
            }
        }
    },
    calculable : true,
    series : [
        {
            name: '',
            type:'pie',
            radius : [30, 110],
            // center : ['75%', '50%'],
            roseType : 'area',
            data:[]
        }
    ]
};

var feature_changes_echarts = echarts.init(document.getElementById('feature_changes'), 'light', {renderer: 'canvas'});
var feature_changes_option = {
    title : {
        text: '视频情感线分析'
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                    + params.value[0] + ' : '
                    + params.value[1];
            }
            else {
                return params.seriesName + ' :<br/>'
                    + params.name + ' : '
                    + params.value;
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            }
        }
    },
    brush: {
    },
    legend: {
        data: ['弹幕'],
        left: 'center'
    },
    xAxis : [
        {
            name: '时间',
            type : 'value',
            scale: true,
            // axisLabel : {
            //     formatter: '第 {value} 天'
            // },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            name: '情感积极度',
            type : 'value',
            scale:true,
            // axisLabel : {
            //     formatter: '{value} kg'
            // },
            splitLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'弹幕',
            type:'scatter',
            data: [],
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    }
                }
            },
            itemStyle:{
                normal: {
                    color: "green"
                }
            }
        }
    ]
};

var colors = [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3",
    "#f05b72",
    "#ef5b9c",
    "#f47920",
    "#905a3d",
    "#fab27b",
    "#2a5caa",
    "#444693",
    "#726930",
    "#b2d235",
    "#6d8346",
    "#ac6767",
    "#1d953f",
    "#6950a1",
    "#918597"];

//处理爬取请求
function startCrawl() {
    var videoLink = document.getElementsByTagName('input')[0].value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', host + '/result/?' + encodeURIComponent('input_url') + '=' + encodeURIComponent(videoLink));
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function () {
        if(4 === xhr.readyState && 200 === xhr.status){
            // if(xhr.responseText === 'ok')
            update_charts();
        }
    };
}

//处理图表请求
function request(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if(4 === xhr.readyState && 200 === xhr.status){
            callback(JSON.parse(xhr.responseText));
        }
    }
}

//更新弹幕活跃用户部分排名
function active_users_update(data) {
    var users = [];
    var counts = [];
    data.forEach(function (value) {
        users.push(value[0]);
        counts.push(value[1]);
    });
    active_users_option.series[0].name = '活跃用户Top' + data.length;
    active_users_option.series[0].data = counts;
    active_users_option.legend[0].data = ['活跃用户Top' + data.length];
    active_users_option.xAxis[0].data = users;
    active_users_echarts.setOption(active_users_option);
}

//更新视频情节起伏曲线
function plot_changes_update(data) {
    var max = 0;
    var line1, line2;
    plot_changes_option.series[0].data = data;
    plot_changes_option.xAxis[0].data = data.map(function (value) {
        max = (value[1] > max)?(value[1]):max;
        return value[0];
    });
    line1 = Math.floor(max / 3);
    line2 = Math.floor(max / 3) * 2;
    plot_changes_option.series[0].markLine.data[0].yAxis = line1;
    plot_changes_option.series[0].markLine.data[1].yAxis = line2;
    plot_changes_option.visualMap.pieces[0].lte = line1;
    plot_changes_option.visualMap.pieces[1].gt = line1;
    plot_changes_option.visualMap.pieces[1].lte = line2;
    plot_changes_option.visualMap.pieces[2].gt = line2;
    plot_changes_echarts.setOption(plot_changes_option);
}

//更新视频经典弹幕
function classic_barrage_update(data) {
    var barrages = [];
    var random = Math.floor(Math.random() * colors.length);
    data.forEach(function (value, index) {
        barrages.push({
            name: value[0],
            value: value[1],
            textStyle: {
                normal:{
                    color: colors[(index + random) % colors.length]
                }
            }
        })
    });
    classic_barrage_option.series[0].data = barrages;
    classic_barrage_echarts.setOption(classic_barrage_option);
}

//更新观众情感分析
function emotional_changes_update(data) {
    var indicator = [];
    var count = [];
    var max = 0;
    data.forEach(function (value) {
        max = (value[1] > max)?(value[1]):max;
        count.push(value[1]);
    });
    data.forEach(function (value) {
        indicator.push({
            name: value[0],
            max: max
        });
    });
    emotional_changes_option.radar.indicator = indicator;
    emotional_changes_option.series[0].data[0].value = count;
    emotional_changes_echarts.setOption(emotional_changes_option);
}

//更新视频总体评价
function overall_evaluation_update(data) {
    data.forEach(function (value) {
        overall_evaluation_option.legend.data.push(value[0]);
        overall_evaluation_option.series[0].data.push({
            value: value[1],
            name: value[0]
        });
    });
    overall_evaluation_echarts.setOption(overall_evaluation_option);
}

//更新视频情感线
function feature_changes_update(data) {
    feature_changes_option.series[0].data = data;
    feature_changes_echarts.setOption(feature_changes_option);
}

//更新全部表格
function update_charts() {
    request(host + '/active-users/?level=5',active_users_update);
    request(host + '/plot-changes', plot_changes_update);
    request(host + '/classic-barrage', classic_barrage_update);
    request(host + '/emotion-changes', emotional_changes_update);
    request(host + '/overall-evaluation', overall_evaluation_update);
    request(host + '/feature-changes', feature_changes_update);
}

