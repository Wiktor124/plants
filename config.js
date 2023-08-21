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
		plant: 'Monstera Delisiosa',
		image:
			'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/plant-monstera_zbntgh.png',
	},
	aglaonema_silver_bay: {
		plant: 'Aglaonema Silver Bay',
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
	peace_lily: {
		plant: 'Peace Lily',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692070/samples/plants/plant-peace-lily_hiofo5.png'
	}
}

const potsConfig = {
	clay: {
		unpainted: {
			basic: {
				pot: 'Simple clay',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-clay-pot_tqarrp.png'
			},
			decorated: {
				pot: 'Simple clay decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-clay-pot-decorated_zj9vij.png'
			},
		},
		purple: {
			basic: {
				pot: 'Clay simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427982/samples/plants/clay-simple-purple_qemxax.png'
			},
			decorated: {
				pot: 'Clay decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427981/samples/plants/clay-decorated-purple_muvi8o.png'
			}
		},
		pink: {
			basic: {
				pot: 'Clay simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427982/samples/plants/clay-simple-pink_ax38br.png'
			},
			decorated: {
				pot: 'c',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427981/samples/plants/clay-decorated-pink_ryys5w.png'
			}
		},
		green: {
			basic: {
				pot: 'Clay simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427985/samples/plants/clay-simple-green_hndtu4.png'
			},
			decorated: {
				pot: 'Clay decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427981/samples/plants/clay-decorated-green_bssmih.png'
			}
		},
		blue: {
			basic: {
				pot: 'Clay simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427982/samples/plants/clay-simple-blue_vnzfdv.png'
			},
			decorated: {
				pot: 'Clay decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/painted-clay-pot-decorated_eu1czn.png'
			}
		}
	},

	ceramic: {
		unpainted: {
			basic: {
				pot: 'Simple ceramic',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot_dbvcsf.png',
			},
			decorated: {
				pot: 'Simple ceramic decorated',
				image:
					'https://res.cloudinary.com/diplphrxm/image/upload/v1690692067/samples/plants/simple-ceramic-pot-decorated_na2fre.png',
			}
		},
		purple: {
			basic: {
				pot: 'Ceramic simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427981/samples/plants/ceramic-simple-purple_niwofz.png',
			},
			decorated: {
				pot: 'Ceramic decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427984/samples/plants/ceramic-decorated-purple_ym6sum.png'
			}
		},
		pink: {
			basic: {
				pot: 'Ceramic simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427983/samples/plants/ceramic-simple-pink_tprkgb.png'
			},
			decorated: {
				pot: 'Ceramic decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/painted-ceramic-pot-decorated_ntqod0.png'
			}
		},
		green: {
			basic: {
				pot: 'Ceramic simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427983/samples/plants/ceramic-simple-green_gzkdfg.png'
			},
			decorated: {
				pot: 'Ceramic decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427982/samples/plants/ceramic-decorated-green_kbkxcg.png'
			}
		},
		blue: {
			basic: {
				pot: 'Ceramic simple',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427983/samples/plants/ceramic-simple-blue_loxtam.png'
			},
			decorated: {
				pot: 'Ceramic decorated',
				image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1692427983/samples/plants/ceramic-decorated-blue_a3bhas.png'
			}
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

const extraConfig = {
	moss_pole: {
		extra: 'Moss pole',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/moss-pole_h3iy1x.png'
	},
	pebbles: {
		extra: 'Pebbles',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692069/samples/plants/pebbles_jz4rql.png'
	},
	smaller_plants: {
		extra: 'Smaller plants',
		image: 'https://res.cloudinary.com/diplphrxm/image/upload/v1690692068/samples/plants/mini-plants_iytquu.png'
	}
}

const plantsQuestions = {
	placement_question: {
		inside_indirect: {
			yes: plantsConfig.boston_fern,
			no: plantsConfig.sansevieria,
		},
		inside_lot_indirect: {
			yes: plantsConfig.monstera,
			no: plantsConfig.aglaonema_silver_bay
		},
		outside: {
			yes: plantsConfig.cactus,
			no: plantsConfig.aloe_vera,
		},
	},
	sunlight_question: {
		yes: soilConfig.composed_soil,
		no: soilConfig.drainage_soil,
	},
	watering_question: {
		overwater: {
			minimalism: potsConfig.clay.unpainted.basic,
			simple_colors: potsConfig.clay.unpainted.decorated,
			bright_colors: potsConfig.clay.pink.decorated,
		},
		underwater: {
			minimalism: potsConfig.ceramic.unpainted.basic,
			simple_colors: potsConfig.ceramic.unpainted.decorated,
			bright_colors: potsConfig.ceramic.pink.decorated,
		},
		neither: {
			minimalism: potsConfig.ceramic.unpainted.basic,
			simple_colors: potsConfig.ceramic.unpainted.decorated,
			bright_colors: potsConfig.ceramic.pink.decorated,
		},
	},
	extra_elements: {
		moss_pole: extraConfig.moss_pole,
		pebbles: extraConfig.pebbles,
		smaller_plants: extraConfig.smaller_plants,
	},
};

export { plantsQuestions, plantsConfig, potsConfig, soilConfig, extraConfig };
