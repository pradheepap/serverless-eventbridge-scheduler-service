'use strict';

module.exports.hello = async event => {

  console.log('EVENT: Lambda scheduler with EventBridge Events');
  console.log('EVENT DETAILS:', JSON.stringify(event));

  return { message: ' EventBridge Event Triggered', event };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
