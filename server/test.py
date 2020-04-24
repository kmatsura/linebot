import json
from linebot import LineBotApi
from linebot.models import TextSendMessage

filename = "personal.json"
with open(filename) as f:
    data = json.load(f)

CHANNEL_ACCESS_TOKEN = data["channel_token"]
line_bot_api = LineBotApi(CHANNEL_ACCESS_TOKEN)

user_id = data["my_id"]
group_id = data["group_id"]


def send_push_message(user_id, content=None):
    line_bot_api.push_message(
        to=user_id,
        messages=TextSendMessage(text=content)
    )


send_push_message(group_id, "とりあえず喋れるようになったぬん")
