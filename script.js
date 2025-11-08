// Random data for simulation
const skinTypes = ["Oily", "Dry", "Combination", "Normal", "Sensitive"];

const skinConcerns = [
    "Acne", "Dark Spots", "Redness", "Blackheads", 
    "Dull Skin", "Large Pores", "Fine Lines"
];

const productList = [
    {
        name: "Gentle Foaming Cleanser",
        img: "https://i.imgur.com/w5M8K2a.jpeg",
        desc: "Perfect for deep cleaning without irritation."
    },
    {
        name: "Vitamin C Glow Serum",
        img: "https://i.imgur.com/bO4Mn9E.jpeg",
        desc: "Brightens skin & reduces dark spots."
    },
    {
        name: "Hydro Boost Moisturizer",
        img: "https://i.imgur.com/y0o8aVd.jpeg",
        desc: "Deep hydration for glowing, smooth skin."
    }
];

const upload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");

// show uploaded image
upload.addEventListener("change", function () {
    let file = this.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.classList.remove("hidden");
        analyzeBtn.classList.remove("hidden");
    }
});

function startAnalysis() {
    document.getElementById("upload-box").classList.add("hidden");
    document.getElementById("loading-box").classList.remove("hidden");

    // fake AI delay
    setTimeout(showResult, 2500);
}

function showResult() {
    document.getElementById("loading-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");

    // random skin type
    const type = skinTypes[Math.floor(Math.random() * skinTypes.length)];
    document.getElementById("skinType").textContent = type;

    // 2 random concerns
    const randomConcerns = [...skinConcerns]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    document.getElementById("concerns").textContent =
        randomConcerns.join(", ");

    // load product cards
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    productList.forEach(p => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${p.img}">
                <h4>${p.name}</h4>
                <p>${p.desc}</p>
            </div>
        `;
    });
}

function restart() {
    location.reload();
}
