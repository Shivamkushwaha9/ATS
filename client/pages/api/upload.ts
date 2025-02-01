import { NextApiRequest, NextApiResponse } from 'next';
import FormData from 'form-data';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const formData = new FormData();
            formData.append('resume', req.body.resume);
            const backendResponse = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });
            const data: { score: number } = await backendResponse.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error forwarding file to backend:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}