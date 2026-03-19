const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
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
