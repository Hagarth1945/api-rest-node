import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../models/User.js';

export const register = async (req, res) => {
    const {email, password} = req.body;
    
    if (!email || !password) {
        return res
        .status(422)
        .json({ message: 'Email y contraseña son obligatorios' });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return res
        .status(409)
        .json({ message: 'El email ya está registrado' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = createUser(email, passwordHash);

    if (!user) {
        return res.sendStatus(500)
    }

    res.status(201).json({ id: user.id, email: user.email });
}