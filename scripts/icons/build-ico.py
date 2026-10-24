"""Assemble a multi-resolution favicon.ico from the 16/32/48 PNGs (each drawn at its own size)."""
import os
from PIL import Image

PUBLIC = os.path.join(os.path.dirname(__file__), "..", "..", "public")
sizes = [16, 32, 48]
images = [Image.open(os.path.join(PUBLIC, f"favicon-{s}.png")).convert("RGBA") for s in sizes]
out = os.path.join(PUBLIC, "favicon.ico")
images[-1].save(out, format="ICO", sizes=[(s, s) for s in sizes], append_images=images[:-1])
print("wrote favicon.ico", os.path.getsize(out), "bytes")
