#!/bin/bash

# Script to convert PF.heic to PF.jpg for web use
# This script uses the built-in macOS 'sips' command

echo "Converting PF.heic to PF.jpg for web use..."

# Check if PF.heic exists
if [ ! -f "img/PF.heic" ]; then
    echo "Error: PF.heic not found in img/ folder"
    exit 1
fi

# Convert HEIC to JPG using sips (macOS built-in tool)
sips -s format jpeg img/PF.heic --out img/PF.jpg

# Check if conversion was successful
if [ -f "img/PF.jpg" ]; then
    echo "✅ Successfully converted to PF.jpg"
    echo "📁 File saved: img/PF.jpg"
    
    # Get file size
    size=$(stat -f%z img/PF.jpg)
    echo "📏 File size: $size bytes"
    
    echo ""
    echo "🚀 Your website is now ready with your profile picture!"
    echo "   Open index.html in your browser to see the result."
else
    echo "❌ Conversion failed"
    echo "💡 Alternative: Open PF.heic in Preview app and export as JPG"
fi
