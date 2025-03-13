export default async function handler(req, res) {
    const { url } = req.query; // User-supplied input

    if (!url) {
        return res.status(400).json({ error: "Missing URL parameter" });
    }

    try {
        const response = await fetch(url); // No validation on URL
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
