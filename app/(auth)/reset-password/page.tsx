// // 'use client';
// import { Suspense } from 'react';
// import ResetPasswordForm from './ResetPasswordForm';

// export const dynamic = 'force-dynamic';

// export default function ResetPasswordPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ResetPasswordForm />
//     </Suspense>
//   );
// }

'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ResetPasswordPage() {
    const params = useSearchParams();
    const token = params.get('token') || '';
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/reset-password',
            { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, newPassword, confirmPassword }), });
        const data = await res.json(); if (data.success) toast.success('Password reset successfully!'); else toast.error(data.message);
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h1 className="text-xl font-semibold mb-4">Reset Password</h1>
                <input type="password" className="border p-2 w-full mb-3" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <input type="password" className="border p-2 w-full mb-3" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded"> Reset Password </button>
            </form>
        </div>
    );
}