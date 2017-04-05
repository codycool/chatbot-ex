var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1506641103,
  channelSecret: bf85b30866f47338100f664c7a296d75,
  channelAccessToken: vZi+lMGhLUidaHAZsilvzEXzSFfRQaJXDiBScXGZA6RX
                      tozRlz2c8Knt2q+lsAV/U6al2N0fEAGGucT5PnWi9wPO
                      y4Xr+T2p5ZkwqbYkG6mdS1duTOgvncy8P/XIbxYFTh/V
                      kTfHob1nZJkl0YhF9QdB04t89/1O/w1cDnyilFU=
});


bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
