Highcharts.chart('hcContainer', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '13lFAbt8YSEJZp-4KEhLpKS785mXsuw2JfiOWrD6nAwE',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      zoomType: 'x',
      type: 'column'
    },
    // Chart Title and Subtitle
    title: {
      text: "Interactive Title"
    },
    subtitle: {
      text: "Click and drag to zoom in"
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
        text: "Y Axis Title"
      },
    },
    // Additional Plot Options
    plotOptions:
    {
      column: {
        stacking: null, // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
            enabled: false,
        }
      }
    }
  })
