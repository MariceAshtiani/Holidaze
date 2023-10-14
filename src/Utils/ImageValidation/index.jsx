export async function isValidImageUrl(url) {
    try {
        const response = await fetch(url, {
            method: "HEAD",
        });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}