import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyse3jjNhGjtsAOS1N7I_QWqHlM6QpY34",
  authDomain: "mini-blog-ff1f2.firebaseapp.com",
  projectId: "mini-blog-ff1f2",
  storageBucket: "mini-blog-ff1f2.appspot.com",
  messagingSenderId: "823476267478",
  appId: "1:823476267478:web:3d89c781395979719ddc77"
};

const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);