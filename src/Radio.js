import Vue from 'vue';
import Radio from './Radio.vue';
export default class {
    static get toolbox() {
        return {
            title: "Radio",
            icon: '<i class="far fa-check-circle"></i>'
        };
    }

    constructor({ data }) {
        console.log("radio construct", data);
        this.data = data;
        this.value = Object.assign({}, data);
    }


    render() {
        this.div = document.createElement('div');

        let self = this;
        setTimeout(() => {
            this.v = new Vue({
                render: h => {
                    return h(Radio, {
                        props: {
                            value: self.data
                        },
                        on: {
                            input(event) {
                                console.log("radio input");
                                console.log(event);
                                self.data = event;
                            }
                        }
                    });
                }
            }).$mount(this.div);
        }, 0);

        return this.div;
    }


    save() {
        console.log("radio save");
        return {
            value: this.value.value,
            answers: this.value.answers
        }
    }

}

