import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhCKbFyqZXR2DmD-6Shs8vu6EKrkiMnYc',
  authDomain: 'gyg-page.firebaseapp.com',
  projectId: 'gyg-page',
  storageBucket: 'gyg-page.appspot.com',
  messagingSenderId: '774690346494',
  appId: '1:774690346494:web:fa9457bc9ec2fe419fdcaf',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
