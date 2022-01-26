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
		this.text = data.text || "";
	}

	render() {

		this.div = document.createElement('div');

		let self = this;


		setTimeout(() => {
			this.v = new Vue({
				render: h => {
					return h(Rating, {
						props: {
							value: self.text
						},
						on: {
							input(event) {
								self.text = event;
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
			text: this.text
		};
	}
}

