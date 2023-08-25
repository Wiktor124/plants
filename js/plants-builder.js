class PlantsBuilder {
	setPot(pot) {
		if (pot) {
			this.pot = pot;

			return this;
		}
	}

	setSoil(soil) {
		if (soil) {
			this.soil = soil;

			return this;
		}
	}

	setPlant(plant) {
		if (plant) {
			this.plant = plant;

			return this;
		}
	}

	setExtras(extras) {
		if (extras) {
			this.extras = extras;

			return this;
		}
	}
}

export default PlantsBuilder;
