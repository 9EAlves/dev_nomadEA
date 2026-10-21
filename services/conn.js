import firebase from '../firebase/firebase'
import { initializeApp } from 'firebase/app'
import { getFireStore } from "firebase/firebase"

const app = initializeApp(firebase)
const db = getFireStore(app)

const  getFirebaseConn = () => {
    try {
        return db = getFireStore(app)
    } catch (error) {
        console.error('Erro ao iniciar a Conexão com o Firestore', error)
        throw error
        return
    }
}

export default db