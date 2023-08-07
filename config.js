const plantsQuestions = {
	placement_question: {
		inside_indirect: {
			yes: {
				nonToxicPlant: 'Boston Fern',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692070/samples/plants/plant-fern_cgsdit.png',
			},
			no: {
				toxicPlant: 'Sansevieria',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/plant-sansevieria_mnhug8.png',
			},
		},
		inside_lot_indirect: {
			yes: {
				nonToxicPlant: 'Monstera',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-monstera_zbntgh.png',
			},
			no: {
				toxicPlant: 'Aglaonema',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-aglaonema_gpsqr7.png',
			},
		},
		outside: {
			yes: {
				nonToxicPlant: 'Cactus',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-cactus_gntwe7.png',
			},
			no: {
				toxicPlant: 'Aloe Vera',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-aloe_p4dp47.png',
			},
		},
	},
	sunlight_question: {
		yes: {
			soil: 'Composted soil',
			image:
				'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/soil-composted_qgfr4w.png',
		},
		no: {
			soil: 'Fertilized soil',
			image:
				'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/soil-fertilized_mb43lu.png',
		},
	},
	watering_question: {
		overwater: {
			minimalism: {
				pot: 'Simple clay pot',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-clay-pot_tqarrp.png',
			},
			simple_colors: {
				pot: 'Simple clay pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-clay-pot-decorated_zj9vij.png',
			},
			bright_colors: {
				pot: 'Painted clay pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/painted-clay-pot-decorated_eu1czn.png',
			},
		},
		underwater: {
			minimalism: {
				pot: 'Simple ceramic pot',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot_dbvcsf.png',
			},
			simple_colors: {
				pot: 'Simple pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot-decorated_na2fre.png',
			},
			bright_colors: {
				pot: 'Painted pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/painted-ceramic-pot-decorated_ntqod0.png',
			},
		},
		neither: {
			minimalism: {
				pot: 'Simple ceramic pot',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot_dbvcsf.png',
			},
			simple_colors: {
				pot: 'Simple pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot-decorated_na2fre.png',
			},
			bright_colors: {
				pot: 'Painted pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/painted-ceramic-pot-decorated_ntqod0.png',
			},
		},
	},
	extra_elements: {
		moss_pole: {
			extra: 'Moss pole',
			image:
				'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/moss-pole_h3iy1x.png',
		},
		pebbles: {
			extra: 'Pebbles',
			image:
				'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/pebbles_jz4rql.png',
		},
		smaller_plants: {
			extra: 'Mini Plants',
			image:
				'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/mini-plants_iytquu.png',
		},
	},
};

export default plantsQuestions;
