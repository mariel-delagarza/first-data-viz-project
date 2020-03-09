Highcharts.chart('hcContainer', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1ave-zLnXNnHl7_f9Tv1h_o5zuAHSAVShFfETSKbKQbE',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'line',
      height: 900
    },
    // Chart Title and Subtitle
    title: {
      text: "UN Asia-Pacific Regional Group"
    },
    subtitle: {
      text: "Confirmed Cases of COVID-19 Through 3-5-20"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Project Name | Source: NAME"
    },
    // Chart Legend
    legend: {
      title: {
        text: 'Legend Title<br/><span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // Y Axis
    yAxis: {
      title: {
        text: "Number of Confirmed Cases"
      }
    },
    // Additional Plot Options
    plotOptions:
    {
      line: {
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 3
        },
        lineWidth: 3
      }
    }
  })
