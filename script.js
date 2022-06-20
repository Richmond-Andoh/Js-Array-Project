"use strict"
const DATA = [
    {name: "Albert Einstein",
     image: "./images/Albert.png",
     discovery: "<h4>He Discoverd:</h4> Photoelectric Effect",
     about: "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics",
     video: "https://www.youtube.com/embed/0oGEaBiphFs"
     
    },

    {
        name: "Isaac Newton",
        image: "./images/newton.jpg",
        discovery: "<h4>He Discoverd:</h4>The laws of gravity and motion",
        about: "Sir Isaac Newton PRS was an English mathematician, physicist, astronomer, alchemist, theologian, and author widely recognised as one of the greatest mathematicians and physicists of all time and among the most influential scientists. He was a key figure in the philosophical revolution known as the Enlightenment"
       , video: "https://www.youtube.com/embed/RZ1Extuvcsw"
      },

    {
        name: "JJ Thompson",
        image: "./images/thompson.jpg",
        discovery: "<h4>He Discoverd:</h4> Isotopes of Stable Elements",
        about: "Sir Joseph John Thomson OM PRS was a British physicist and Nobel Laureate in Physics, credited with the discovery of the electron, the first subatomic particle to be discovered"
   ,    video: "https://www.youtube.com/embed/B_Z4IIIGIsU",
        discoverVideo: "https://www.youtube.com/embed/n3c77C-69wg",
        how: "In 1897, JJ Thomson discovered the electron in his famous cathode ray tube experiment.  How did it work and why did Thomson do the experiment in the first place?  Watch the video and find out!"
      }
]

let cardDetails = document.getElementById("cardDetails");

for (let cardDetail of DATA) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "20rem";
    cardDiv.style.margin = "1rem";

    let img = document.createElement("img");
    img.src = cardDetail.image;
    img.className = "card-img-top";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body"

    let cardTittle = document.createElement("h3");
    cardTittle.className = "card-title";
    cardTittle.innerHTML = cardDetail.name;
    cardTittle.style.color = "red";

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = cardDetail.about

    let cardText2 = document.createElement("p");
    cardText2.className = "card-text-2";
    cardText2.innerHTML = cardDetail.discovery;

    let cardVideo = document.createElement("div");
    cardVideo.className = "embed-responsive embed-responsive-16by9";
    
    let CardIframe = document.createElement("iframe");
    CardIframe.className = "embed-responsive-item"
    CardIframe.src = cardDetail.video;
  
    cardDiv.appendChild(img);
     cardDiv.appendChild(cardTittle);
     cardDiv.appendChild(cardText);
     cardDiv.appendChild(cardText2);
     cardDiv.appendChild(cardVideo);
     cardVideo.appendChild(CardIframe);
     cardDetails.appendChild(cardDiv);
};

