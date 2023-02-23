function imageHoverYoutube() {
  let images = document.getElementById("img-youtube");
  images.onmouseover = () => {
    images.attributes.src.value = "../assets/img/youtube-white.png";
  };
  images.onmouseout = () => {
    images.attributes.src.value = "../assets/img/youtube-pink.png";
  };
}
function imageHoverSpotify() {
  let images = document.getElementById("img-spotify");
  images.onmouseover = () => {
    images.attributes.src.value = "../assets/img/spotify-white.png";
  };
  images.onmouseout = () => {
    images.attributes.src.value = "../assets/img/spotify-pink.png";
  };
}
function imageHoverInstagram() {
  let images = document.getElementById("img-instagram");
  images.onmouseover = () => {
    images.attributes.src.value = "../assets/img/instagram-white.png";
  };
  images.onmouseout = () => {
    images.attributes.src.value = "../assets/img/instagram-pink.png";
  };
}
function imageHoverTwitter() {
  let images = document.getElementById("img-twitter");
  images.onmouseover = () => {
    images.attributes.src.value = "../assets/img/twitter-white.png";
  };
  images.onmouseout = () => {
    images.attributes.src.value = "../assets/img/twitter-pink.png";
  };
}
imageHoverYoutube();
imageHoverSpotify();
imageHoverInstagram();
imageHoverTwitter();
