from pathlib import Path
from PIL import Image

# Supported input formats
extensions = {".webp", ".webp", ".webp"}

for file_path in Path(".").rglob("*"):
    if file_path.is_file() and file_path.suffix.lower() in extensions:
        webp_path = file_path.with_suffix(".webp")

        try:
            with Image.open(file_path) as img:
                img.save(webp_path, "WEBP", quality=80)

            file_path.unlink()  # Delete original file
            print(f"Converted: {file_path.name} -> {webp_path.name}")

        except Exception as e:
            print(f"Failed to convert {file_path.name}: {e}")