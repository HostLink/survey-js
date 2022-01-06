export default class {
    static get toolbox() {
        return {
            title: "Text",
            icon: '<i class="fa fa-edit"></i>'
        };
    }

    constructor({ data }) {
        this.data = data;
    }

    render() {
        let div = document.createElement('div');
        div.append("[Text] Question: ");
        let input = document.createElement('input');
        input.value = this.data.value || "";
        div.append(input);


        return div;
    }

    save(blockContent) {
        return {
            value: blockContent.querySelector('input').value,
        };
    }
}

