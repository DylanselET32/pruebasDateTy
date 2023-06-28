import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyCVU0t9HCY2pLb4sfGzenlcvpAWk_KrV38",
  authDomain: "datety-3b55e.firebaseapp.com",
  projectId: "datety-3b55e",
  storageBucket: "datety-3b55e.appspot.com",
  messagingSenderId: "326913888715",
  appId: "1:326913888715:web:2b6dbac82a7116d886a64e",
  measurementId: "G-LJG61B29E6"
};

export default async function requestPermission() {
  console.log("Requesting permission...");
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    console.log("Notification permission granted.");
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    try {
      const tk = await getToken(messaging, {
        vapidKey: "BKhOE5x1xz5j3NxJA6oOVDC5Rx405OrRxjGXyigUFutZTnMe_sXbBDdoW5WhkKlcY3N16n1PJHUXw8BVvis6uPA",
      });

      console.log("Token:", tk);
      return tk;
    } catch (error) {
      console.log("Error getting token:", error);
      return null;
    }
  } else {
    console.log("Do not have permission!");
    return null;
  }
}


