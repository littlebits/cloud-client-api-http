
// Generated from scripts/download-routes.js on Thu Feb 12 2015 15:31:06 GMT-0500 (EST)

module.exports = [
  {
    "path": "/ping",
    "method": "GET",
    "auth": false,
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": null
  },
  {
    "path": "/cloudbits/{device_id}/subscriptions",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/cloudbits/{device_id}/subscriptions",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_events",
          "type": "alternatives",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null,
          "alternatives": [
            {
              "type": "any",
              "required": false,
              "allowedValues": [
                "amplitude",
                "amplitude:delta:sustain",
                "amplitude:delta:ignite",
                "amplitude:delta:release",
                "amplitude:delta:nap",
                "amplitude:level:active",
                "amplitude:level:idle"
              ],
              "disallowedValues": null
            },
            {
              "type": "array",
              "required": null,
              "allowedValues": null,
              "disallowedValues": null,
              "rules": {
                "Includes": [
                  {
                    "type": "any",
                    "required": false,
                    "allowedValues": [
                      "amplitude",
                      "amplitude:delta:sustain",
                      "amplitude:delta:ignite",
                      "amplitude:delta:release",
                      "amplitude:delta:nap",
                      "amplitude:level:active",
                      "amplitude:level:idle"
                    ],
                    "disallowedValues": null
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "subscriber_type",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/cloudbits/{device_id}/subscriptions",
    "method": "DELETE",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "subscriber_type",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "device_hash",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "update",
          "type": "object",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null,
          "children": [
            {
              "name": "label",
              "type": "string",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            },
            {
              "name": "input_interval_ms",
              "type": "number",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            }
          ]
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "PUT",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}",
    "method": "DELETE",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}/input",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}/light",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "mode",
          "type": "string",
          "required": false,
          "allowedValues": [
            "blink",
            "hold"
          ],
          "disallowedValues": null
        },
        {
          "name": "color",
          "type": "string",
          "required": false,
          "allowedValues": [
            "green",
            "yellow",
            "red",
            "blue",
            "purple",
            "white",
            "cyan",
            "clownbarf"
          ],
          "disallowedValues": null
        },
        {
          "name": "duration_ms",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices/{device_id}/output",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "percent",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "duration_ms",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/subscriptions",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "publisher_id",
          "type": "string",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "subscriber_id",
          "type": "string",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/subscriptions",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_events",
          "type": "alternatives",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null,
          "alternatives": [
            {
              "type": "any",
              "required": false,
              "allowedValues": [
                "amplitude",
                "amplitude:delta:sustain",
                "amplitude:delta:ignite",
                "amplitude:delta:release",
                "amplitude:delta:nap",
                "amplitude:level:active",
                "amplitude:level:idle"
              ],
              "disallowedValues": null
            },
            {
              "type": "array",
              "required": null,
              "allowedValues": null,
              "disallowedValues": null,
              "rules": {
                "Includes": [
                  {
                    "type": "any",
                    "required": false,
                    "allowedValues": [
                      "amplitude",
                      "amplitude:delta:sustain",
                      "amplitude:delta:ignite",
                      "amplitude:delta:release",
                      "amplitude:delta:nap",
                      "amplitude:level:active",
                      "amplitude:level:idle"
                    ],
                    "disallowedValues": null
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/subscriptions",
    "method": "DELETE",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "publisher_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "2"
  },
  {
    "path": "/devices",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "device_hash",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "update",
          "type": "object",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null,
          "children": [
            {
              "name": "label",
              "type": "string",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            },
            {
              "name": "input_interval_ms",
              "type": "number",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            }
          ]
        }
      ]
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}",
    "method": "PUT",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}",
    "method": "DELETE",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}/input",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}/light",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "mode",
          "type": "string",
          "required": false,
          "allowedValues": [
            "blink",
            "hold"
          ],
          "disallowedValues": null
        },
        {
          "name": "color",
          "type": "string",
          "required": false,
          "allowedValues": [
            "green",
            "yellow",
            "red",
            "blue",
            "purple",
            "white",
            "cyan",
            "clownbarf"
          ],
          "disallowedValues": null
        },
        {
          "name": "duration_ms",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/devices/{device_id}/output",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "percent",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "duration_ms",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/subscriptions",
    "method": "GET",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/subscriptions",
    "method": "POST",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "object",
      "required": null,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "subscriber_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_id",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "publisher_events",
          "type": "any",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null,
    "version": "3"
  },
  {
    "path": "/subscriptions",
    "method": "DELETE",
    "auth": [
      "simple"
    ],
    "pathParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "queryParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "payloadParams": {
      "type": "any",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null
    },
    "responseParams": null,
    "version": "3"
  }
];