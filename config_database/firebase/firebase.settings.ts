import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqoFDGJcT4ek_FpBC848zTgMKG3KyGPqQ',
  authDomain: 'analise-b1333.firebaseapp.com',
  projectId: 'analise-b1333',
  storageBucket: 'analise-b1333.appspot.com',
  messagingSenderId: '183037040863',
  appId: '1:183037040863:web:bab206026a689fdb29f16a',
  measurementId: 'G-7PC0ZX3JTT',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
};

// const citiesCol = collection(db, 'teste');
// const citySnapshot = await getDocs(citiesCol);
// const cityList = citySnapshot.docs.map(doc => doc.data());










// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }