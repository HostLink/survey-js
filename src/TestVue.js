import Vue from 'vue';
import TestVue from './TestVue.vue';


export default class {



    static get toolbox() {
        return {
            title: "Test Vue",
            icon: '<i class="fa fa-edit"></i>'
        };
    }

    render() {
        this.div = document.createElement('div');

        setTimeout(() => {
            this.v = new Vue({
                render: h => h(TestVue)
            }).$mount(this.div);
        }, 0);

        return this.div;
    }

    save() {
        return {
            type: "test",
            data: "test"
        };
    }
}

