const plantsConfig = {
	boston_fern: {
		plant: 'Boston Fern',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692070/samples/plants/plant-fern_cgsdit.png',
	},
	sansevieria: {
		plant: 'Sansevieria',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/plant-sansevieria_mnhug8.png',
	},
	monstera: {
		plant: 'Monstera',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-monstera_zbntgh.png',
	},
	aglaonema: {
		plant: 'Aglaonema',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-aglaonema_gpsqr7.png',
	},
	cactus: {
		plant: 'Cactus',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-cactus_gntwe7.png',
	},
	aloe_vera: {
		plant: 'Aloe Vera',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-aloe_p4dp47.png',
	},
}

const potsConfig = {
	clay: {
		unpainted: {
			basic: {
				pot: 'Simple clay pot',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-clay-pot_tqarrp.png'
			},
			decorated: {
				pot: 'Simple clay pot decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-clay-pot-decorated_zj9vij.png'
			},
		},
		purple: {
			basic: {
				pot: 'Clay simple pot purple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427982/samples/plants/clay-simple-purple_qemxax.png'
			},
			decorated: {
				pot: 'Clay decorated pot purple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427981/samples/plants/clay-decorated-purple_muvi8o.png'
			}
		},
		pink: {
			basic: '',
			decorated: ''
		},
		green: {
			basic: '',
			decorated: ''
		},
		blue: {
			basic: '',
			decorated: ''
		}
	},

	ceramic: {
		unpainted: {
			basic: {
				pot: 'Simple ceramic pot',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot_dbvcsf.png',
			},
			decorated: {
				pot: 'Simple ceramic pot decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot-decorated_na2fre.png',
			}
		},
		purple: {
			basic: {
				pot: 'Purple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427981/samples/plants/ceramic-simple-purple_niwofz.png',
			},
			decorated: {
				pot: 'Purple decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427984/samples/plants/ceramic-decorated-purple_ym6sum.png'
			}
		},
		pink: {
			basic: '',
			decorated: ''
		},
		green: {
			basic: '',
			decorated: ''
		},
		blue: {
			basic: '',
			decorated: ''
		}
	}
}

const soilConfig = {
	composed_soil: {
		soil: 'Composed Soil',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692431156/samples/plants/soil-composted_s3w3gf.png'

	},
	premium_soli: {
		soil: 'Premium Soil',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692431156/samples/plants/soil-fertilized_bthvfn.png'
	},
	drainage_soil: {
		soil: 'Drainage Soil',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692431156/samples/plants/soil-drainage_ffxxsh.png'

	}
}

const plantsQuestions = {
	placement_question: {
		inside_indirect: {
			yes: {
				plant: 'Boston Fern',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692070/samples/plants/plant-fern_cgsdit.png',
			},
			no: {
				plant: 'Sansevieria',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/plant-sansevieria_mnhug8.png',
			},
		},
		inside_lot_indirect: {
			yes: {
				plant: 'Monstera',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-monstera_zbntgh.png',
			},
			no: {
				plant: 'Aglaonema',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-aglaonema_gpsqr7.png',
			},
		},
		outside: {
			yes: {
				plant: 'Cactus',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-cactus_gntwe7.png',
			},
			no: {
				plant: 'Aloe Vera',
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

export { plantsQuestions, plantsConfig, potsConfig, soilConfig };
