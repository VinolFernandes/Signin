
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions=require('firebase-functions')
const admin =require('firebase-admin');
const { UserRecord } = require('firebase-admin/lib/auth/user-record');

admin.initializeApp();

const authh=admin.auth();

const getAllUsers=(req,res)=> {
    authh.listUsers().then((userRecords) =>{
        userRecords.users.forEach((user)=>console.log(user.toJSON()));
        res.end("Retrieved users list successfully");
    }).catch((error)=> console.log(error));
};

module.exports={
    api: functions.https.onRequest(getAllUsers)
};