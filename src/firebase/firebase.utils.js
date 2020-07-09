import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBiDY9z1q9j_4Sz4QlQlKDkhIydTAZjPTQ',
  authDomain: 'clothing-store-db-28739.firebaseapp.com',
  databaseURL: 'https://clothing-store-db-28739.firebaseio.com',
  projectId: 'clothing-store-db-28739',
  storageBucket: 'clothing-store-db-28739.appspot.com',
  messagingSenderId: '840535921941',
  appId: '1:840535921941:web:c361fae0a37585cf01051c',
  measurementId: 'G-88P72JJSSE'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
