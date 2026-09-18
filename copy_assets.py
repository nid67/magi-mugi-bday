import os
import shutil
import glob
from pathlib import Path
from pillow_heif import register_heif_opener
from PIL import Image, ExifTags

register_heif_opener()

SOURCE_DIR = r"E:\mugi-bday\Mugi Photos"
DEST_DIR = r"E:\mugi-bday\website\public\assets\images"
SONG_SOURCE = r"E:\mugi-bday\song\SawanoHiroyuki_nZk_XAI_-_DARK_ARIA_LV2_(mp3.pm).mp3"
SONG_DEST = r"E:\mugi-bday\website\public\assets\audio"

os.makedirs(DEST_DIR, exist_ok=True)
os.makedirs(SONG_DEST, exist_ok=True)

# Important photos to copy based on our plan
photos_to_copy = [
    "1000029645(1).jpg", # Hero/Yoriichi
    "1000045257(1).heic", # Boxing gloves
    "1000048866(1).jpg", # Jeep
    "1000047998(1).heic", # Car top
    "1000048426(1).jpg", # Mountains cinematic
    "1000047965(1).heic", # Naruto mountains
    "1000019961(1).jpg", # Box on head
    "1000054404(1).heic", # Sunglasses
    "1000085851(1).heic", # Towel turban
    "1000024778(1).jpg", # Brother
    "1000085852(1).heic", # Brother 2
    "1000049381(1).jpg", # Family hill
    "1000017800(1).jpg", # Cap mask
    "1000085872(1).heic", # Blindfold
    "1000051297(1).heic", # Artist/candid 1
    "1000075432(1).heic", # Artist/candid 2
]

for filename in photos_to_copy:
    src_path = os.path.join(SOURCE_DIR, filename)
    
    # Handle filename parsing - we want to save them as clean names
    base_name = Path(filename).stem
    # Remove the (1) from filename if it exists
    clean_name = base_name.replace("(1)", "").strip()
    
    dest_name = clean_name + ".jpg" # Output is always jpg
    dest_path = os.path.join(DEST_DIR, dest_name)
    
    print(f"Processing {filename} -> {dest_name}...")
    
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        continue
        
    try:
        # Read with Pillow (HEIF opener is registered)
        img = Image.open(src_path)
        
        # Handle EXIF orientation
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
        except (AttributeError, KeyError, IndexError):
            # No EXIF, or no orientation tag
            pass
            
        # Convert to RGB (to drop alpha if HEIC has it) and save as JPG
        rgb_im = img.convert('RGB')
        
        # Resize if width is massive (keep it under 1920px for web performance)
        MAX_SIZE = (1920, 1920)
        rgb_im.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        
        rgb_im.save(dest_path, "JPEG", quality=85, optimize=True)
        print(f"Saved {dest_path}")
        
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Copy song
song_dest_file = os.path.join(SONG_DEST, "bgm.mp3")
print(f"Copying song to {song_dest_file}")
shutil.copy2(SONG_SOURCE, song_dest_file)
print("Done!")
