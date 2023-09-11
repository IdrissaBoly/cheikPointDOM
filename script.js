let MyRoot = document.getElementById("root");

let MonTableau = [
    {
        name: "Mon premier produit",
        description: "Ma super description",
        price: 10,
        quantity: 1,
        couleurs: ["bleu", "white", "green"],
        image: "https://previews.123rf.com/images/ksushsh/ksushsh1706/ksushsh170600002/80596872-bouquet-de-trois-fleurs-roses-rouges-isol%C3%A9-sur-blanc.jpg" // Chemin de l'image pour l'article 1
    },
    {
        name: "Mon deuxième produit",
        description: "Ma super description",
        price: 10,
        quantity: 1,
        couleurs: ["bleu", "white", "green"],
        image: "https://c8.alamy.com/compfr/kyw4a8/bouquet-de-fleurs-rose-rouge-forme-coeur-kyw4a8.jpg" // Chemin de l'image pour l'article 1
    },

    {
        name: "Mon troisième produit",
        description: "Ma super description",
        price: 10,
        quantity: 1,
        couleurs: ["bleu", "white", "green"],
        image: "https://img.freepik.com/photos-gratuite/copie-espace-roses-fleurs_23-2148860032.jpg" // Chemin de l'image pour l'article 1
    },
    {
        name: "Mon quatrième produit",
        description: "Ma super description1",
        price: 20,
        quantity: 1,
        couleurs: ["bleu", "red", "purple"],
        image: "https://bergamotte.imgix.net/hbcni7qatpatmbahknsavaxp55m7?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=1%3A1" // Chemin de l'image pour l'article 1
    },
];

let totalPrice = 0;

MonTableau.forEach((produit) => {
    let Productdiv = document.createElement("div");
    Productdiv.setAttribute('class',  'MyProductDIv')

    let ProductName = document.createElement("h3");
    ProductName.innerHTML = produit.name;
    let ProductDescription = document.createElement("h3");
    ProductDescription.innerHTML = produit.description;
    let ProductPrice = document.createElement("p");
    ProductPrice.innerHTML = produit.price;
    let ProductColors = document.createElement("ul");

    let imageElement = document.createElement("img");
    imageElement.src = produit.image;

    Productdiv.appendChild(imageElement);



    produit.couleurs.forEach((couleur) => {
        let couleurItem = document.createElement("li");
        couleurItem.innerHTML = couleur;
        ProductColors.appendChild(couleurItem);
    });

    let likeButton = document.createElement("button");
    likeButton.innerHTML = "like";
    let isLiked = false;
    likeButton.addEventListener("click", function () {
        isLiked = !isLiked;
        if (isLiked) {
            likeButton.style.backgroundColor = "blue";
            likeButton.style.color = "white";
        } else {
            likeButton.style.backgroundColor = "gray";
            likeButton.style.color = "black";
        }
    });

    let incrementButton = document.createElement("button");
    incrementButton.innerHTML = "+";
    let decrementButton = document.createElement("button");
    decrementButton.innerHTML = "-";
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Supprimer";

    let likeButton1 = document.createElement("button");
    let heartIcon1 = document.createElement("i");
    heartIcon1.classList.add("fa", "fa-heart");
    likeButton1.appendChild(heartIcon1);

    let isLiked1 = false;
    likeButton1.addEventListener("click", function () {
        isLiked1 = !isLiked1;
        if (isLiked1) {
            heartIcon1.classList.add("liked");
        } else {
            heartIcon1.classList.remove("liked");
        }
    });



    let QuantityElement = document.createElement('span')
    QuantityElement.textContent = "Quantity " + produit.quantity

    // Ajoutez des gestionnaires d'événements pour les boutons d'incrémentation, de décrémentation et de suppression
    incrementButton.addEventListener("click", function () {
        produit.quantity++;
        QuantityElement.textContent = "Quantity " + produit.quantity
        updateTotalPrice();
    });

    decrementButton.addEventListener("click", function () {
        if (produit.quantity > 0) {
            produit.quantity--;
            QuantityElement.textContent = "Quantity " + produit.quantity
            updateTotalPrice();
        }
    });

    deleteButton.addEventListener("click", function () {
        if (MyRoot.contains(Productdiv)) {
            MyRoot.removeChild(Productdiv);
            // Après avoir supprimé le produit, mettez à jour le prix total
            MonTableau = MonTableau.filter((item) => item !== produit);
            updateTotalPrice();
        }
    });


    Productdiv.appendChild(ProductName);
    Productdiv.appendChild(ProductDescription);
    Productdiv.appendChild(ProductPrice);
    Productdiv.appendChild(ProductColors);
    Productdiv.appendChild(likeButton);
    Productdiv.appendChild(incrementButton);
    Productdiv.appendChild(QuantityElement);


    Productdiv.appendChild(decrementButton);
    Productdiv.appendChild(deleteButton);
    Productdiv.appendChild(likeButton1);


    MyRoot.appendChild(Productdiv);
    updateTotalPrice()
    //   totalPrice += produit.price * .produititemquantity;
});

// function updateTotalPrice() {
//     var totalPrice = MonTableau.reduce(function (total, produit) {
//         return total + produit.price * produit.quantity;
//     }, 0);
//     console.log(totalPrice);
//     let TotalPriceELement = document.getElementById('total-price')
//     TotalPriceELement.innerHTML = 'Prix Total ' + totalPrice

// }


// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    // Utilisez reduce pour calculer le prix total en fonction de la quantité de chaque produit
    var totalPrice = MonTableau.reduce(function (total, produit) {
        return total + produit.price * produit.quantity;
    }, 0);

    // Affichez le prix total dans un élément HTML
    let TotalPriceELement = document.getElementById('total-price')
    TotalPriceELement.innerHTML = 'Prix Total ' + totalPrice
}