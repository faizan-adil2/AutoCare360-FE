import { NextResponse } from 'next/server';
import { readUsers, writeUsers } from '../_store';

export async function POST(request: Request) {
  try {
    const { token, newPassword, confirmPassword } = await request.json();

    if (!token || !newPassword || !confirmPassword) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json({ success: false, message: 'Passwords do not match' }, { status: 400 });
    }

    const users = readUsers();
    const user = users.find((u: { resetToken?: string }) => u.resetToken === token);

    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid or expired token' }, { status: 400 });
    }

    // Update password & remove reset token
    user.password = newPassword;
    delete user.resetToken;
    writeUsers(users);

    return NextResponse.json({ success: true, message: 'Password reset successfully' });
  } catch (err) {
    console.error('RESET PASSWORD ERROR', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}