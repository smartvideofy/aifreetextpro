"""Assemble a multi-resolution favicon.ico (16/32/48) from the generated PNGs."""
import os
from PIL import Image

PUBLIC = os.path.join(os.path.dirname(__file__), "..", "..", "public")
base = Image.open(os.path.join(PUBLIC, "favicon-48.png")).convert("RGBA")
out = os.path.join(PUBLIC, "favicon.ico")
base.save(out, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print("wrote favicon.ico", os.path.getsize(out), "bytes")
