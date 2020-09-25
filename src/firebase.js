import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAcQ6Ai477JJhclWvU9H05Co5Qe3oU4uIc',
  authDomain: 'tinderclone-34960.firebaseapp.com',
  databaseURL: 'https://tinderclone-34960.firebaseio.com',
  projectId: 'tinderclone-34960',
  storageBucket: 'tinderclone-34960.appspot.com',
  messagingSenderId: '687946603638',
  appId: '1:687946603638:web:39fbe26e9f32e1340f5357',
  measurementId: 'G-ZKH54BNZG7'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database