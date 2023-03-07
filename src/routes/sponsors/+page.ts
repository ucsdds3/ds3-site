
// Loader
export async function load() {
    const imageGlob: Object = import.meta.glob("/static/images/sponsors/*.png");

    return {
        imageURLs: Object.keys(imageGlob) 
    }
}