function onOpen(e) {
  SpreadsheetApp.getUi()
    .createMenu('TITAN Statutory')
    .addItem('Run Batch Diagnostic', 'runBatchDiagnostic')
    .addSeparator()
    .addItem('Show Catalog', 'showCatalog')
    .addToUi();
}

function runBatchDiagnostic() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange('A2:C100');
  const values = range.getValues();
  
  const results = [];
  
  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    if (row[0] && row[1]) {
      const payload = {
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'check_eu_cbam_eudr_mandate',
          arguments: {
            regime: 'cbam',
            cn_or_hs_code: row[0],
            annual_mass_tonnes: row[1],
            query_note: 'Sheets batch'
          }
        },
        id: Date.now() + i
      };
      const result = callMcp(payload);
      results.push([JSON.stringify(result)]);
    }
  }
  
  if (results.length > 0) {
    const resultRange = sheet.getRange(2, 4, results.length, 1);
    resultRange.setValues(results);
  }
}

function showCatalog() {
  const payload = {
    jsonrpc: '2.0',
    method: 'tools/list',
    params: {},
    id: Date.now()
  };
  const result = callMcp(payload);
  const ui = SpreadsheetApp.getUi();
  ui.alert('Available Tools:\n' + JSON.stringify(result, null, 2));
}

function callMcp(payload) {
  const url = 'https://mcp.titancapitalforensics.com/mcp';
  const options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json'
    },
    'payload': JSON.stringify(payload)
  };
  const response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response.getContentText());
}