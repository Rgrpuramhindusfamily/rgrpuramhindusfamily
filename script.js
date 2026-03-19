const firebaseConfig = {
  apiKey: "AIzaSyADJL_wvtVpwoaRgy0Mr_QTm-O-p0pwJ04",
  authDomain: "rgrpuram-family.firebaseapp.com",
  projectId: "rgrpuram-family",
  storageBucket: "rgrpuram-family.firebasestorage.app",
  messagingSenderId: "204335215270",
  appId: "1:204335215270:web:603e5f4eb431411f703a67"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

function uploadPhoto() {
  const file = document.getElementById("file").files[0];

  const ref = storage.ref("photos/" + file.name);

  ref.put(file).then(() => {
    ref.getDownloadURL().then(url => {
      const img = document.createElement("img");
      img.src = url;
      img.width = 150;
      document.getElementById("photos").appendChild(img);
    });
  });
}
