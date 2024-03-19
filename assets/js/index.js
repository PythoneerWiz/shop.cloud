import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyABLSChzy8X3bwkG2yyqVaPjnxFXaficpo",
    authDomain: "shoplane-6ebe5.firebaseapp.com",
    projectId: "shoplane-6ebe5",
    storageBucket: "shoplane-6ebe5.appspot.com",
    messagingSenderId: "303639898778",
    appId: "1:303639898778:web:958b8e8c33e742a42d4d23",
    measurementId: "G-7SG21YVH2D"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);