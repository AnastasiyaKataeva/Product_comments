init();

function init() {
    document.addEventListener("submit", addComment);
    displayProducts(storage.load());
}

function addComment(e) {
    e.preventDefault();

    const form = e.target;
    const product = form.elements.namedItem("product").value;
    const comment = form.elements.namedItem("comment").value;
    const items = storage.add(product, comment);

    displayProducts(items);
}

function displayProducts(items) {
    const products = document.getElementById("products");
    products.innerHTML = Object.keys(items)
        .map((name) => {
            return `
            <div class="product">
              Название: <a href="comments.html?product=${name}">${name}</a>
            </div>
          `;
        })
        .join("");
}
