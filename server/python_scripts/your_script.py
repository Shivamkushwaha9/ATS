import sys
import json

def process_file(file_path):
    # Your file processing logic here
    # This is just a sample that returns 10 strings
    result = [f"Processed string {i}" for i in range(10)]
    return result

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No file path provided"}))
        sys.exit(1)

    file_path = sys.argv[1]
    try:
        result = process_file(file_path)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)