from flask import Flask, request, session, escape, jsonify
import json

# some bits of text for the page.
header_text = '''
    <html>\n<head> <title>Pocket Auto Chess</title> </head>\n<body>'''
instructions = '''
    <p><em>Hint</em>: This is a RESTful web service!</p>\n'''
home_link = '<p><a href="/">Back</a></p>\n'
footer_text = '</body>\n</html>'

# EB looks for an 'application' callable by default.
application = Flask(__name__)

@application.route('/')

@application.route('/genekey', methods=["GET"])
def get_key():
    return 1

# set the secret key.  keep this really secret:
application.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

@application.route("/test", methods=["GET"])
def push_test(url):

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = False
    application.run()
