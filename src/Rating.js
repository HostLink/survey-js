import Vue from 'vue';
import Rating from './Rating.vue';
export default class {
	static get toolbox() {
		return {
			title: "Rating",
			icon: '<i class="fa fa-star"></i>'
		};
	}

	constructor({ data }) {
		this.data = data;
		this.value = data.value || "";
	}

	render() {

		this.div = document.createElement('div');

		let self = this;


		setTimeout(() => {
			this.v = new Vue({
				render: h => {
					return h(Rating, {
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
		return {
			value: this.value
		};
	}
}

