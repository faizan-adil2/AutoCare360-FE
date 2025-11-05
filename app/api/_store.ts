import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'data', 'users.json');

// Ensure file exists
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, '[]');
}

export function readUsers() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

export function writeUsers(users: any[]) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// Shared in-memory user store
// export const users: any[] = [];
export const users: { name?: string; email: string; password: string; token: string }[] = [];
