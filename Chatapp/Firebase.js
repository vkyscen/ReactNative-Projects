import firebase from "firebase";

class Firebase {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyCvNg2kpWB1DVGgcF0_d2kWvvtCeNBZQrA",
      authDomain: "fir-955f9.firebaseapp.com",
      databaseURL: "https://fir-955f9.firebaseio.com",
      projectId: "fir-955f9",
      storageBucket: "fir-955f9.appspot.com",
      messagingSenderId: "240557261861",
      appId: "1:240557261861:web:b403c52ff2cdb2c7"
    });
  };

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {}
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("message");
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user
    };
    return message;
  };

  on = callback => {
    this.ref
      .limitToLast(50)
      .on("child_added", snapshot => callback(this.parse(snapshot)));
  };

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

Firebase.shared = new Firebase();
export default Firebase;
