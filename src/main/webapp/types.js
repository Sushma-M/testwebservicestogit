wm.types = {
	"types": {
		"boolean": {
			"primitiveType": "Boolean",
			"internal": true
		},
		"byte": {
			"primitiveType": "Number",
			"internal": true
		},
		"char": {
			"primitiveType": "String",
			"internal": true
		},
		"double": {
			"primitiveType": "Number",
			"internal": true
		},
		"float": {
			"primitiveType": "Number",
			"internal": true
		},
		"googleapis.DirectionsResponse": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"route": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.route",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"status": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.bounds": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"northeast": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.northeast",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"southwest": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.southwest",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.distance": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"text": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.duration": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"text": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"value": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.end_location": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.leg": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"distance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.distance",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"duration": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.duration",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"end_address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"end_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.end_location",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"start_address": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"start_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.start_location",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"step": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.stepEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.northeast": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.route": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"bounds": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.bounds",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"copyrights": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"leg": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.leg",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"overview_polyline": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"summary": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.southwest": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.start_location": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"lat": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"lng": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"googleapis.stepEntryItem": {
			"service": "googleapis",
			"liveService": false,
			"internal": false,
			"fields": {
				"distance": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.distance",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"duration": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.duration",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"end_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.end_location",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"html_instructions": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"maneuver": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"polyline": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"start_location": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "googleapis.start_location",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"travel_mode": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"int": {
			"primitiveType": "Number",
			"internal": true
		},
		"java.lang.Boolean": {
			"primitiveType": "Boolean",
			"internal": false
		},
		"java.lang.Byte": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Character": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.Double": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Float": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Integer": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Long": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Short": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.String": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.StringBuffer": {
			"primitiveType": "String",
			"internal": false
		},
		"java.math.BigDecimal": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.math.BigInteger": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.sql.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Time": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Timestamp": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.util.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"long": {
			"primitiveType": "Number",
			"internal": true
		},
		"short": {
			"primitiveType": "Number",
			"internal": true
		}
	}
};