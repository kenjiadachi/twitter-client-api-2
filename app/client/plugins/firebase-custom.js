import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.fbApiKey,
  authDomain: process.env.fbAuthDomain,
  databaseURL: process.env.fbDatabaseURL,
  projectId: process.env.fbProjectId,
  storageBucket: process.env.fbStorageBucket,
  messagingSenderId: process.env.fbMessagingSenderId,
  appId: process.env.fbAppId
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const firestoreDb = firebase.firestore()
// const dbSettings = { timestampsInSnapshots: true }
// firestoreDb.settings(dbSettings)

// Firestoreの設定を適用するためfirebase.firestore()を読み替える
export { firestoreDb }
