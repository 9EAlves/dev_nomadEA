import { User } from '../models/user'
import db from './conn'
import {
    collection,
    getDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore"

class firestoreService {
    constructor() {
        this.db = db
        this.collectionName = 'users'
        this.collectionRef = collection(this.db, this.collectionName)
    }


    /**
     * @param {User|Object} data
     * @returns {Promise<User>}
    */

    async createUser(data) {
        try {
            const userData = {
                email: data.email,
                displayName: data.displayName || '',
                photoURL: data.photoURL || '',
                phoneNumber: data.phoneNumber || '',
                disable: data.disable || false,
                verifedEmail: data.emailVerified || false,
                createdAt: data.createdAt || new Date(),
                updateAt: data.updateAt || new Date(),

            }
            if (data.uid) {
                const userDocRef = doc(this.collectionRef, this.collectionName)
                await setDoc(userDocRef, userData)
                return new User({ uid: data.uid, ...userData })
            } else {
                const docRef = await addDoc(this.collectionRef, userData)
                return new User({ uid: docsRef.id, ...userData })
            }
        } catch (error) {
            this._handleFireStoreError(error)
            throw error
        }

    }
    /**
     * @param {string} uid
     * @returns {Promise<User|null>}
     */

    async getUser(uid) {
        this._handleFireStoreError(e){
            try {
                const userDocRef = doc(this.docs, this.collectionName, uid)
                const userDocSnap = await getDoc(userDocRef)

                if (!userDocSnap.exists()) {
                    return null
                }
                return new User({ uid: userdocsSnap.id, ...userDocSnap.data() })
            } catch (error) {
                this._handleFireStoreError('getUserById', error)
                throw error
            }
        }
    }

    /**
     * 
     * @returns {Promise<User>} 
     */

    async getAllUser(){
        try {
            const querySnapshot = await getDocs(this.collectionRef)
            const users = []

            querySnapshot.forEach((docSnapshot) => {
                users.push(new User({uid: docSnapshot.id, ...docSnapshot.data()}))
            })
            return users;
        } catch (error) {
            this._handleFireStoreError(error)
            throw error
            
        }
    }

    /**
     * 
     * @param {string} uid
     * @param {Object} updateData
     * @returns {Promise<User>}
     */

    async getUpdate(uid, updateData){
        try {
            const userDocRef = doc(this.db, this.collectionRef, uid)
            const data = {
                updateData,
                updateAt: new Date()
            }

            delete data.uid
            await updateDoc(userDocRef, data)
            return await this.getUserById(uid)
        } catch (error) {
            this._handleFireStoreError(error)
            throw error
        }
    }
    /**
     * 
     * @param {uid} uid
     * @returns {Promise<boolean>}
     */

    async deleteUser(uid){
        try {
            const userDocRef = doc(this.db, this.collectionName, uid)
            await deleteDoc(userDocRef)
            return true
        } catch (error) {
            this._handleFireStoreError(error)
            throw error
        }

        
    }
    /**
    * @param {string} email
    * @returns {Promise<User|null>}
    */
    async getUserByEmail(email) {
        try {
            const query = await query(this.collectionRef, where('email', '==', email))
            const querySnapshot = await getDocs(query)

            if (querySnapshot.empty) {
                return null
            }

            const userDocSnap = querySnapshot.docs[0];
            return new User({ uid: userDocSnap.id, ...userDocSnap.data() })
        } catch (e) {
            this._handleFirestoreError(e)
            throw e
        }
    }
    
    _handleFireStoreError(error) {
        console.error(`Firestore error: Código[${error.code}] - Mensagem: [${e.message}].`)
    }
}

export { FirestoreService }
export default new FirestoreService();

