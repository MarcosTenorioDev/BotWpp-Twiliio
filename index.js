require('dotenv').config();

callInitSendMessage();

async function callInitSendMessage(messageDraft, mobileNumber){
    const accountSid = process.env.ACCOUNT_SID; //Sua chave de API
    const  authToken = process.env.AUTH_TOKEN;  //Seu token de autenticação

    const client = require('twilio') (accountSid, authToken);

    return new Promise((resolve, reject) =>{
        client.messages
            .create({
                body: "olá, vindo do node.js",
                from: "whatsapp:+14155238886",
                to: "whatsapp:+558183062703"
            })
            .then((message) =>{
                console.log(message.sid);
                resolve(message.sid)
                response();
            })
            .catch((err) => console.error("aaaaaaaa" + err));
    })

    
}   
