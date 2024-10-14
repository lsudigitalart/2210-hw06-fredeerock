let jack, pump, rand, m, d, s, lorem, myIP;

function preload() {
  jack = loadImage("https://png.pngtree.com/png-clipart/20230417/ourmid/pngtree-halloween-glowing-jack-o-lantern-png-image_6707380.png")
  pump = loadImage("https://cdn.pixabay.com/photo/2014/04/03/09/58/pumpkin-309453_640.png")
  lorem = loadImage("https://picsum.photos/200")
}

function setup() {
  createCanvas(400, 400);
  rand = round(random());
}

function draw() {

  m = month();
  d = day();
  s = second();

  background(220);
  
  if (myIP == "167.96.61.244") {
    image(jack, 0, 0)

  } else {

    image(lorem, 0, 0)

    // image(pump, 0, 0, 300, 300)
  }

  print(myIP)
}

document.addEventListener("DOMContentLoaded", function() {
  // Fetch the IP address from the API
  fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
          // Display the IP address on the screen
          myIP = data.ip;
      })
      .catch(error => {
          console.error("Error fetching IP address:", error);
      });
});
