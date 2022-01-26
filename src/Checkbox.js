import Vue from 'vue';
import Checkbox from './Checkbox.vue';
export default class {
    static get toolbox() {
        return {
            title: "Checkbox",
            icon: '<i class="far fa-check-square"></i>'
        };
    }

    constructor({ data }) {
        this.value = data;
    }


    render() {
        this.div = document.createElement('div');

        let self = this;
        setTimeout(() => {
            this.v = new Vue({
                render: h => {
                    return h(Checkbox, {
                        props: {
                            value: self.value
                        },
                        on: {
                            input(event) {
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
        return this.value;
    }

}

