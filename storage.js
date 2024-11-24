const storage = {
    load() {
        const items = localStorage.getItem("products");

        if (items === null) {
            return {};
        }

        return JSON.parse(items);
    },

    save(items) {
        localStorage.setItem("products", JSON.stringify(items));
    },

    add(product, comment) {
        const items = this.load();

        if (items[product] !== undefined) {
            items[product].push(comment);
        } else {
            items[product] = [comment];
        }

        this.save(items);

        return items;
    },

    remove(product, comment_idx) {
        const items = this.load();
        const comments = items[product];

        if (Array.isArray(comments)) {
            comments.remove(comment_idx);
        }
    },
};
