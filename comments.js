const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get("product");
const products = storage.load();
const comments = products[product];

init();

function init() {
    if (comments === undefined) {
        location.href = "index.html";
        return;
    }

    displayComments(comments);
}

function removeComment(idx) {
    products[product] = comments.filter((_, index) => idx !== index);

    if (products[product].length === 0) {
        delete products[product];
        location.href = "index.html";
    }

    storage.save(products);

    document.getElementById("comment-" + idx).remove();
}

function displayComments(items) {
    document.getElementById("product").innerHTML = product;
    document.getElementById("comments").innerHTML = items
        .map(
            (c, idx) => `
            <div class="comment" id="comment-${idx}">
              ${c}
              <button class="comment-delete" onclick="removeComment(${idx})">
                Удалить
              </button>
            </div>
          `,
        )
        .join("");
}
