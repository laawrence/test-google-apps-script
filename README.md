# test-google-apps-script
Testing the timeout in Google Apps Script

Google Apps Script documentation says that the maximum execution time allowed is 6 minutes. The true timeout limit seems to be dependent upon your account, potentially whether you have an enterprise Google Workspace account, or other factors. 

* This function can be used to test the max timeout in your own Google Apps Script space. 
* Every 30 seconds function will log the time, and write it to the next cell in a given Google Sheet

## Usage 
* Create a new Google Apps Script project (script.google.com)
* Copy and paste code from test-google-apps-script.js file
* Replace the Spreadsheet ID with your own blank spreadsheet
* Set the maximum execution time you want to test under maxTimeMinutes 
