class PlantsBuilder {
	constructor() {
		this.plant = {};
	}

	addAttribute(attrName) {
		this[attrName] = value => {
			if (value) {
				this.plant[attrName] = value;
				return this.plant;
			}
		};
	}
}

export default PlantsBuilder;
