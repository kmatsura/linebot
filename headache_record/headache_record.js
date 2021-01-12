var CHANNEL_ACCESS_TOKEN = 'YOUR_TOKEN'

function doPost(e) {
var reply_token= JSON.parse(e.postData.contents).events[0].replyToken;
if (typeof reply_token === 'undefined') {
return;
}
var user_message = JSON.parse(e.postData.contents).events[0].message.text;
var answer = ""
var check_head = ["あたま", "頭", "あったま", "アタマ"]
var check_pain = ["いた", "痛", "イタ", "イた", "いて", "イテ", "Ｉｔａ"]
var reply_list = ["ぬーん...", "元気出すだぬ..", "大丈夫？"]
for (var i=0; i<check_head.length; i++) {
  if (answer != "") {
    break;
  }
  if (user_message.indexOf(check_head[i]) != -1) {
    for (var j=0; j<check_pain.length; j++) {
      if (user_message.indexOf(check_pain[j]) != -1) {
        answer = reply_list[Math.floor(Math.random() * reply_list.length)];
        appendRecords(user_message)
        break;
      }
    }
  }
}
var url = 'https://api.line.me/v2/bot/message/reply';
var response = UrlFetchApp.fetch(url, {
'headers': {
'Content-Type': 'application/json; charset=UTF-8',
'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
},
'method': 'post',
'payload': JSON.stringify({
'replyToken': reply_token,
'messages': [{
'type': 'text',
'text': answer,
}],
}),
});
return response.getResponseCode();
}

function appendRecords(text){
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  var date = new Date();
  values.push([date, text]);
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}
