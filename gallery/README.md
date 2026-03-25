# Gallery Images

This folder contains images for the homepage carousel.

## How to Add Images

1. Place your images in this folder (Gaia-News/gallery/)
2. Supported formats: JPG, PNG, GIF, WebP
3. Recommended image size: 1920x1080 or similar aspect ratio (16:9)
4. Name your images: image1.jpg, image2.jpg, image3.jpg, etc.

## Update the Carousel

After adding images, update the `galleryImages` array in `js/script.js`:

```javascript
const galleryImages = [
    'gallery/image1.jpg',
    'gallery/image2.jpg',
    'gallery/image3.jpg',
    'gallery/image4.jpg',
    'gallery/image5.jpg'
    // ect, add more images here
];
```

## Tips

- Keep file sizes reasonable (under 2MB per image) for faster loading
- Images will be automatically cropped to fit the carousel dimensions
- Users can click any image to view it in full size