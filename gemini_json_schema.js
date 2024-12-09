module.exports = {
  schemaShort: {
    "description": "JSONize wiki persion contents in short format",
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "content_id": {
          "type": "string"
        },
        "additional_info": {
          "type": "object",
          "properties": {
            "이름": {
              "type": "string"
            },
            "출생": {
              "type": "string"
            },
            "나이": {
              "type": "number"
            }
          },
          "required": ["이름", "출생", "나이"]
        }
      },
      "required": ["content_id", "additional_info"]
    }
  },
  schemaLong: {
    "description": "JSONize wiki persion contents in short format",
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "content_id": {
          "type": "string"
        },
        "additional_info": {
          "type": "object",
          "properties": {
            "이름": {
              "type": "string"
            },
            "출생일": {
              "type": "string"
            },
            "아버지": {
              "type": "string"
            },
            "어머니": {
              "type": "string"
            },
            "배우자": {
              "type": "string"
            },
            "형": {
              "type": "string"
            },
            "누나": {
              "type": "string"
            },
            "나이": {
              "type": "number"
            },
          },
          "required": ["이름", "출생", "나이"]
        }
      },
      "required": ["content_id", "additional_info"]
    }
  }
}