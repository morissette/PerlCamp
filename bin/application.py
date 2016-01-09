#!/usr/bin/env python
'''
Simple Flask Backend For
PerlCamp.tk - housed on ElasticBeanStalk
'''
import config, boto3, json
from flask import Flask
from boto3.session import Session

application = Flask(__name__)

@application.route("/")
def read_data():
    '''
    Return a JSON object 
    containing perl glossary
    from dynamodb
    '''
    session = Session(
        aws_access_key_id=config.ACCESS_KEY,
        aws_secret_access_key=config.SECRET_KEY,
        region_name=config.REGION,
    )
    dynamo = session.resource('dynamodb')
    table = dynamo.Table('perl_glossary')
    response = table.scan()
    items = response['Items']
    return json.dumps(items)

if __name__ == '__main__':
    application.run()

