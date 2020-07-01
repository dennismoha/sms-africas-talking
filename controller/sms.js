//define application constants
const message = 'I have nothing else to do with my life excpet eating and conding';

//login credentials
const shortCode = 6237;
const username = 'sandbox';
const apiKey = '7416b8144e8bd672c4d2d67c888629f87c0ea43a0e48396167821905dd43929d';

const options = {
    apiKey: apiKey,
    username:username
}

const AfricasTalking = require('africastalking')(options);
const sms = AfricasTalking.SMS

exports.received = (req,res)=> {
    var body = req.body;

    //respond to message if from appropriate shortcode
    if(body.to == '6237') {
        sendResponse(body.from,message)
    }else {
        console.log('something wrong with the incoming message');
    }
}

function sendResponse(recipient, message) {
    var opts = {
        from: shortCode,
        to : recipient,
        message: message
    }
    
    sms.send(opts).then(
        console.log('message sent successfully')
    ).catch(
        console.log('error sending the message something went wrong')
    )
}




