import os
import shutil
import glob
from pathlib import Path
from pillow_heif import register_heif_opener
from PIL import Image, ExifTags

register_heif_opener()

SOURCE_DIR = r"E:\mugi-bday\Mugi Photos"
DEST_DIR = r"E:\mugi-bday\website\public\assets\images\all"

os.makedirs(DEST_DIR, exist_ok=True)

all_files = glob.glob(os.path.join(SOURCE_DIR, "*"))

for src_path in all_files:
    if not os.path.isfile(src_path) or src_path.endswith('.pdf'):
        continue
        
    filename = os.path.basename(src_path)
    base_name = Path(filename).stem
    clean_name = base_name.replace("(1)", "").strip()
    
    dest_name = clean_name + ".jpg"
    dest_path = os.path.join(DEST_DIR, dest_name)
    
    if os.path.exists(dest_path):
        continue
    
    print(f"Processing {filename} -> {dest_name}...")
        
    try:
        img = Image.open(src_path)
        try:
            for orientation in ExifTags.TAGS.keys():
                if ExifTags.TAGS[orientation] == 'Orientation':
                    break
            exif = dict(img._getexif().items())
            if exif[orientation] == 3:
                img = img.rotate(180, expand=True)
            elif exif[orientation] == 6:
                img = img.rotate(270, expand=True)
            elif exif[orientation] == 8:
                img = img.rotate(90, expand=True)
        except (AttributeError, KeyError, IndexError, TypeError):
            pass
            
        rgb_im = img.convert('RGB')
        MAX_SIZE = (1200, 1200) # Slightly smaller for bulk loading
        rgb_im.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        
        rgb_im.save(dest_path, "JPEG", quality=80, optimize=True)
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Done copying all images!")
