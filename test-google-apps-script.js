function writeToSheet() {
  var sheetId = "[Sheet ID here]";  // Replace with your actual Sheet ID
  var maxTimeMinutes = 20;  // Maximum time in minutes to run the function
  var maxTimeMilliseconds = maxTimeMinutes * 60 * 1000;

  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheets()[0];
  var startTime = new Date().getTime();
  var currentTime = startTime;
  var cellIndex = 1;

  Logger.log("Function started at: %s", startTime);

  while (currentTime - startTime < maxTimeMilliseconds) {
    var cell = 'A' + cellIndex;
    sheet.getRange(cell).setValue(new Date()); // Write current time to the next cell
    Logger.log(`Value ${cellIndex} written`);

    const {minutes, seconds} = calculateExecutionTime(startTime);
    Logger.log("Total execution time so far: %s minutes and %s seconds", minutes, seconds);

    cellIndex++;
    Utilities.sleep(30000); // Wait for 30 seconds
    currentTime = new Date().getTime();
  }
}

function calculateExecutionTime(startTime) {
  const totalExecutionTime = new Date() - startTime;
  const minutes = Math.floor(totalExecutionTime / (1000 * 60));
  const seconds = ((totalExecutionTime % (1000 * 60)) / 1000).toFixed(2);
  return {minutes,seconds}
}
