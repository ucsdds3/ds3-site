
// To load company images
export async function load() {
    const imageGlob: Object = import.meta.glob("/static/images/company-logos/*.png");

    return {
        imagePaths:  Object.keys(imageGlob)
    }
}