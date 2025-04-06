// UserDashboardApp.js
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function UserDashboardApp() {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = `${uid}@ecoloop.com`;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const q = query(collection(db, "ecoData"), where("UniqueID", "==", uid));
      const querySnapshot = await getDocs(q);
      const result = querySnapshot.docs.map(doc => doc.data());
      setUserData(result);
    } catch (err) {
      console.error(err);
      setError("Invalid credentials or data fetch error.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">EcoLoop User Sign In</h2>
      <form onSubmit={handleSignIn} className="space-y-4">
        <input
          type="text"
          placeholder="Enter User ID (e.g., user_001)"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Sign In
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>

      {userData.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">User Activity Data</h3>
          <ul className="space-y-4">
            {userData.map((entry, idx) => (
              <li key={idx} className="border p-4 rounded bg-gray-50">
                <p><strong>Date:</strong> {entry.Date}</p>
                <p><strong>Mobility Points:</strong> {entry.Mobility?.Points}</p>
                <p><strong>Consumption Points:</strong> {entry.Consumption?.Points}</p>
                <p><strong>Waste Points:</strong> {entry.Waste?.["Points from Donation"] + entry.Waste?.["Points from Compost"]}</p>
                <p><strong>Energy Points:</strong> {entry.Energy?.Points}</p>
                <p><strong>Water Points:</strong> {entry.Water?.Points}</p>
                <p><strong>Community Points:</strong> {entry.Community?.Points}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
