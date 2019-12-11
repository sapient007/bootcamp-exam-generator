/**
 * Removes duplicate questions from the current sheet.
 */

function removeDuplicates() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName =  sheets.getName() + "_" + sheets.getActiveSheet().getName();
  var data = sheets.getDataRange().getValues();
  Logger.log("removing dupes from:  " + sheetName);
  //iterate through all the rows and see if anything is replicated
  for (var i = 1; i < data.length; i++){
    var question = data[i][0];
    for (var j = i + 1  ;  j < data.length; j++ ){
      var nextQuestion = data[j][0];
      if (question === nextQuestion){ 
        Logger.log( "deleting row: " + i );
        sheets.deleteRow(i);
      }
    }
  }

}
