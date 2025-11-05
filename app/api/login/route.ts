import { NextResponse } from 'next/server';
import { readUsers } from '../_store';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const users = readUsers();
    const existingUser = users.find((u: { email: string }) => u.email === email);

    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: 'No account found with this email' },
        { status: 404 }
      );
    }

    if (existingUser.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Incorrect password' },
        { status: 401 }
      );
    }

    // ✅ If we reach here, login is successful
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token: existingUser.token,
      user: { name: existingUser.name, email: existingUser.email },
    });
  } catch (error) {
    console.error('LOGIN ERROR:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
