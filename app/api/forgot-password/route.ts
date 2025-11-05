import { NextResponse } from 'next/server';
import { readUsers, writeUsers } from '../_store';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    }

    const users = readUsers();
    const user = users.find((u: { email: string }) => u.email === email);

    if (!user) {
      return NextResponse.json({ success: false, message: 'No user found with this email' }, { status: 404 });
    }

    // Generate temporary reset token
    const resetToken = crypto.randomBytes(8).toString('hex');
    user.resetToken = resetToken;
    writeUsers(users);

    // Simulate sending email (in real case you'd send actual email)
    console.log(`🔗 Password reset link: http://localhost:3000/reset-password?token=${resetToken}`);

    return NextResponse.json({
      success: true,
      message: 'Password reset link generated. Check console for link.',
      token: resetToken, // for testing only
    });
  } catch (err) {
    console.error('FORGOT PASSWORD ERROR', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}