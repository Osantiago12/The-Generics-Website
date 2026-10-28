function addToCart(add) {
    const thing = add.closest(".shop-item")
    const title = thing.querySelector(".shop-item-title").textContent
    const price = thing.querySelector(".shop-item-price").textContent
    const image = thing.querySelector(".shop-item-image").src

    const row = document.createElement("div")
    row.classList.add("cart-row")
    
    //Didn't know i was able to write the entire html in here to create the item's properties...
    row.innerHTML = `<div class="cart-item cart-column"><img class="cart-item-image" src="${image}" width="100" height="100"><span class="cart-item-title">${title}</span></div><span class="cart-price cart-column">${price}</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" type="button" onclick="deleted(this)">REMOVE</button></div>`

    document.querySelector(".cart-items").append(row)
}

function deleted(remove) {
    remove.closest(".cart-row").remove()
}

