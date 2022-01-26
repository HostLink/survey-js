import Vue from 'vue';
import Text from './Text.vue';

export default class {
    static get toolbox() {
        return {
            title: "Text",
            icon: '<i class="fa fa-edit"></i>'
        };
    }

    constructor({ data }) {
        this.data = data;
        this.text = data.text || "";
    }

    render() {

        this.div = document.createElement('div');

        let self = this;


        setTimeout(() => {
            this.v = new Vue({
                render: h => {
                    return h(Text, {
                        props: {
                            value: self.text
                        },
                        on: {
                            input(event) {
                                console.log(event);
                                self.value = event;
                            }
                        }
                    });
                }
            }).$mount(this.div);
        }, 0);

        return this.div;

    }

    save() {
        return {
            text: this.value
        };
    }
}

