import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, hospitalName, email, password } = req.body;

    // Validate required fields
    if (!name || !hospitalName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message: 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.'
        });
    }

    try {
        // Path to users.json file
        const filePath = path.join(process.cwd(), 'data', 'users.json');

        // Read existing users
        let users = { users: [] };
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            users = JSON.parse(fileData);
        }

        // Check if user already exists
        const existingUser = users.users.find(user => user.email === email);
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email already exists' });
        }

        // Create new user object
        const newUser = {
            id: Date.now().toString(),
            name,
            hospitalName,
            email,
            password, // WARNING: In production, hash this password!
            createdAt: new Date().toISOString()
        };

        // Add new user to array
        users.users.push(newUser);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

        // Return success (don't send password back)
        const { password: _, ...userWithoutPassword } = newUser;
        return res.status(201).json({
            message: 'User created successfully',
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
