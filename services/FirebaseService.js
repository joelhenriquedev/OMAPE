import { firebaseFirestore } from '../lib/firebase'

export default class FirebaseService {

    static getDocData = (collection, doc, callback) => {

        let query = firebaseFirestore.collection(collection).doc(doc);

        query.get()
            .then(doc => {
                if (!doc.exists) {
                    return Error('No such document!');
                } else {
                    callback(doc.data())
                }
            })
            .catch(err => {
                return err
            })

        return query;
    }

    static getCollectionData = (collection, callback) => {
        
        var Ref = firebaseFirestore.collection(collection);
        var query = Ref.get()
            .then(snapshot => {
                return callback(snapshot)
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }

    static updateDoc = (collectionName, docName, data) => {
        const paginaInicio = firebaseFirestore.collection(collectionName).doc(docName);

        paginaInicio.update(data);
    }

}