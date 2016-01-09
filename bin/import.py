#!/usr/bin/env python
import config
import boto3
from boto3.session import Session

def import_data(term, definition):
    session = Session(
        aws_access_key_id=config.ACCESS_KEY,
        aws_secret_access_key=config.SECRET_KEY,
        region_name=config.REGION,
    )
    dynamo = session.resource('dynamodb')
    table = dynamo.Table('perl_glossary')
    if term and definition:
        response = table.put_item(
            Item={
                'term': term,
                'definition': definition,
            },
        )
        print "Success\n"

def read_data():
    count = 1
    term = None
    definition = None
    with open('glossary.txt', 'r') as infile:
        for line in infile:
            if count == 1:
                term = line.rstrip()
            if count == 2:
                definition = line.rstrip()
            if count == 3:
                import_data(term, definition)
                count = 0
            count += 1

if __name__ == '__main__':
    read_data()

