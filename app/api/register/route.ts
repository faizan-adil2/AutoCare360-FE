// app/api/register/route.ts
import { NextResponse } from 'next/server';
// import { users } from '../_store';
import { readUsers, writeUsers } from '../_store';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const { name, email, password, confirmPassword } = await request.json();

        if (!name || !email || !password || !confirmPassword)
            return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });

        if (password !== confirmPassword)
            return NextResponse.json({ success: false, message: 'Passwords do not match' }, { status: 400 });

        const users = readUsers();
        const existingUser = users.find((u: { email: string; }) => u.email === email);
        if (existingUser)
            return NextResponse.json({ success: false, message: 'Email already registered' }, { status: 409 });

        const token = crypto.randomBytes(8).toString('hex');
        const newUser = {
            name,
            email,
            password,
            token
        };

        users.push(newUser);
        writeUsers(users);
        return NextResponse.json({ success: true, message: 'User registered successfully', user: newUser, totalUsers: users.length, });
    } catch (err) {
        console.error('REGISTER ERROR', err);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

export function GET() {
    // For debugging only in dev — remove in production
    const users = readUsers();
    return NextResponse.json(users);
}
