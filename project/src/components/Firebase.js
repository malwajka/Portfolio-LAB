import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAc7vs7-UKOR2EkBgxog0AQeinzOqvwg7c",
    authDomain: "malwajka-project.firebaseapp.com",
    databaseURL: "https://malwajka-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "malwajka-project",
    storageBucket: "malwajka-project.appspot.com",
    messagingSenderId: "612252752903",
    appId: "1:612252752903:web:caec3c1877e405d7d95ea2",
    measurementId: "G-DBQT2PK8YR"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);
    fundations = (fundation) => this.db.ref(fundation);

}

export default Firebase;