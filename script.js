function uploadPhoto() {
  const file = document.getElementById("file").files[0];

  if (!file) {
    alert("Please select file");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "uploadpictures123"); // 👈 exact name

  fetch("https://api.cloudinary.com/v1_1/dwqz24s5hf/image/upload", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);

    if (data.secure_url) {
      const img = document.createElement("img");
      img.src = data.secure_url;
      img.style.width = "150px";

      document.getElementById("photos").appendChild(img);

      alert("Upload success ✅");
    } else {
      alert("Upload failed ❌");
    }
  })
  .catch(err => {
    console.log(err);
    alert("Error ❌");
  });
}
