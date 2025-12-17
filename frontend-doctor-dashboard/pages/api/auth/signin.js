import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Path to users.json file
        const filePath = path.join(process.cwd(), 'data', 'users.json');

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Read users from file
        const fileData = fs.readFileSync(filePath, 'utf8');
        const users = JSON.parse(fileData);

        // Find user by email
        const user = users.users.find(u => u.email === email);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check password (WARNING: In production, use bcrypt.compare!)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Return success (don't send password back)
        const { password: _, ...userWithoutPassword } = user;
        return res.status(200).json({
            message: 'Sign in successful',
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Signin error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
