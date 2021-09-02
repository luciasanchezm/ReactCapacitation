import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBf2aNaL5xJ0Pa8qKMquyJnfUkazjlECtQ",
	authDomain: "reactcapacitation.firebaseapp.com",
	databaseURL: "https://reactcapacitation-default-rtdb.firebaseio.com",
	projectId: "reactcapacitation",
	storageBucket: "reactcapacitation.appspot.com",
	messagingSenderId: "808488153533",
	appId: "1:808488153533:web:da5b501e2461018a08e2d4",
	measurementId: "G-QHH2F0NJ5S",
};

const app = initializeApp(firebaseConfig);

export const DB = getDatabase(app);
