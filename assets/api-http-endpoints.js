module.exports = [
  {
    "path": "/cloudbits",
    "method": "GET",
    "auth": [
      "oauth"
    ],
    "pathParams": null,
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}",
    "method": "GET",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}",
    "method": "POST",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}",
    "method": "PUT",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "update",
          "type": "object",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null,
          "children": [
            {
              "name": "label",
              "type": "string",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            }
          ]
        }
      ]
    },
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}",
    "method": "DELETE",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}/output",
    "method": "POST",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "amount",
          "type": "alternatives",
          "required": null,
          "allowedValues": null,
          "disallowedValues": null,
          "alternatives": [
            {
              "type": "any",
              "required": false,
              "allowedValues": [
                "idle",
                "active"
              ],
              "disallowedValues": null
            },
            {
              "type": "string",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            },
            {
              "type": "number",
              "required": false,
              "allowedValues": null,
              "disallowedValues": null
            }
          ]
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
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}/subscriptions",
    "method": "GET",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}/subscriptions",
    "method": "POST",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": {
      "type": "object",
      "required": false,
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
          "type": "array",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null,
          "rules": {
            "includes": [
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
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}/subscriptions",
    "method": "DELETE",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": {
      "type": "object",
      "required": false,
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
    "responseParams": null
  },
  {
    "path": "/cloudbits/{bit_id}/wifi",
    "method": "POST",
    "auth": [
      "oauth"
    ],
    "pathParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "bit_id",
          "type": "string",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "queryParams": null,
    "payloadParams": {
      "type": "object",
      "required": false,
      "allowedValues": null,
      "disallowedValues": null,
      "children": [
        {
          "name": "ssid",
          "type": "string",
          "required": true,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "lat",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        },
        {
          "name": "lon",
          "type": "number",
          "required": false,
          "allowedValues": null,
          "disallowedValues": null
        }
      ]
    },
    "responseParams": null
  },
  {
    "path": "/options",
    "method": "GET",
    "auth": false,
    "pathParams": null,
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  },
  {
    "path": "/ping",
    "method": "GET",
    "auth": false,
    "pathParams": null,
    "queryParams": null,
    "payloadParams": null,
    "responseParams": null
  }
];