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
    "description": "JSONize wiki persion contents in long format",
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
            "영문이름": {
              "type": "string"
            },
            "한자이름": {
              "type": "string"
            },
            "출생일": {
              "type": "string"
            },
            "사망일": {
              "type": "string"
            },
            "나이": {
              "type": "number"
            },
            "국적": {
              "type": "string"
            },
            "키": {
              "type": "string"
            },
            "몸무게": {
              "type": "string"
            },
            "혈액형": {
              "type": "string"
            },
            "학력": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            // "아버지": {
            //   "type": "string"
            // },
            // "어머니": {
            //   "type": "string"
            // },
            // "배우자": {
            //   "type": "string"
            // },
            // "형": {
            //   "type": "string"
            // },
            // "누나": {
            //   "type": "string"
            // },
            "가족": {
              "type": "string"
            },
            "자녀": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "이름": {
                    "type": "string"
                  },
                  "출생년도": {
                    "type": "string"
                  }
                }
              }
            },
            "병력": {
              "type": "string"
            },
            "종교": {
              "type": "string"
            },
            "취미": {
              "type": "string"
            },
            "소속사": {
              "type": "string"
            },
            "데뷔정보": {
              "type": "string"
            },
            "좌우명": {
              "type": "string",
            },
            "별명": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": ["이름", "출생일", "나이"]
        }
      },
      "required": ["content_id", "additional_info"]
    }
  }
}