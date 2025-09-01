const images = [
      "52215.jpg",
      "Everest_kalapatthar_crop.jpg",
      "gimalai1.webp",
      "himalayas_002.jpg",
      "gimalai-04.jpg",
      "1_IMG_5142.jpg",
      "fk-sredi-vershin19-top50-38-1024x768.jpg",
      "gimalai.jpg",
      "Depositphotos_8593244_s-2019.jpg"
    ];
    const index = Math.floor(Math.random() * images.length);
    document.getElementById("pic").src = images[index];