export default class {
    static get toolbox() {
        return {
            title: "Checkbox",
            icon: '<i class="far fa-check-square"></i>'
        };
    }

    render() {
        let div = document.createElement('div');
        div.append("[Checkbox] Question: ");
        div.append(document.createElement('input'));

        let button = document.createElement("button");
        button.append("Add Option");
        let d = document.createElement("div");
        d.append(button);
        div.append(d);


        button.addEventListener("click", () => {

            let d = document.createElement("div");
            let option = document.createElement("input");
            d.append(option);
            div.append(d);
        });

        return div;
    }

    save(blockContent) {

        return {
            type: "rating",
            data: {
                question: blockContent.querySelector('input').value,
            }
        };
    }
}

