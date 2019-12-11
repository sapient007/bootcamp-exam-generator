function createExamForm() {

  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName =  sheets.getName() + "_" + sheets.getActiveSheet().getName();
  var data = sheets.getDataRange().getValues();
  Logger.log("Creating Form:  " + sheetName);
  var form = FormApp.create(sheetName);

  //generate questions for the form
  for (var i = 1; i < data.length; i++) {
    // Logger.log('Question: ' + data[i][0]);
    // Logger.log('Option1: ' + data[i][1]);
    var item = form.addMultipleChoiceItem();
    item.setTitle ( data[i][0] )
      .setChoices([
        item.createChoice(data[i][1]),
        item.createChoice(data[i][2]),
        item.createChoice(data[i][3]),
        item.createChoice(data[i][4])
      ]);
      //optional fields if there are more than 4 options
      if (data[i][5].toString != "") {
        item.createChoice(data[i][5]);
      }
      if (data[i][6].toString != "") {
        item.createChoice(data[i][6]);
      }
  }

}
