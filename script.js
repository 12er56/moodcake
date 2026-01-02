function selectMood(mood) {
  let cakeName = document.getElementById("cakeName");
  let cakeDesc = document.getElementById("cakeDesc");
  let body = document.body;

  if (mood === "happy") {
    cakeName.innerText = "Vanilla Fun Cake 🎂";
    cakeDesc.innerText = "Bright, soft and full of happiness!";
    body.style.background = "#fff7ae";
  }
  else if (mood === "love") {
    cakeName.innerText = "Red Velvet Love Cake ❤️";
    cakeDesc.innerText = "Perfect for romantic moments.";
    body.style.background = "#ffd6e0";
  }
  else if (mood === "sad") {
    cakeName.innerText = "Chocolate Comfort Cake 🍫";
    cakeDesc.innerText = "Because chocolate heals everything.";
    body.style.background = "#d5c6e0";
  }
  else if (mood === "party") {
    cakeName.innerText = "Rainbow Celebration Cake 🎉";
    cakeDesc.innerText = "Colorful, loud and full of joy!";
    body.style.background = "#caffbf";
  }
}
