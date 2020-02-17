import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.fbApiKey,
    authDomain: process.env.fbAuthDomain,
    databaseURL: process.env.fbDatabaseURL,
    projectId: process.env.fbProjectId,
    storageBucket: process.env.fbStorageBucket,
    messagingSenderId: process.env.fbMessagingSenderId,
    appId: process.env.fbAppId,
  })
}

export default firebase
