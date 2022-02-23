const data = {
  mainTitle: "Phool",
  cardContents: [
    {
      name: "Lily",
      imageLink:
        "https://images.unsplash.com/photo-1580596090683-f4711170117b?ixid=MnwzMDQzODh8MHwxfGFsbHx8fHx8fHx8fDE2NDU1NDQ4NzE&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    },
    {
      name: "Jasmine",
      imageLink:
        "https://images.unsplash.com/photo-1612380635121-411eda9ecbb9?ixid=MnwzMDQzODh8MHwxfGFsbHx8fHx8fHx8fDE2NDU1NDUzMTQ&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    },
    {
      name: "Rose",
      imageLink:
        "https://images.unsplash.com/photo-1515960655404-d10f8567cd36?ixid=MnwzMDQzODh8MHwxfGFsbHx8fHx8fHx8fDE2NDU1NDUxNjY&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Lotus",
      imageLink:
        "https://images.unsplash.com/photo-1592639252926-01f6628980f0?ixid=MnwzMDQzODh8MHwxfGFsbHx8fHx8fHx8fDE2NDU1NDU3NzI&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
    },
  ],
  userData: { name: "VaibhaviSita", tagLine: "Hotlinking Unsplash Images" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
