// // utils/csrf.ts
// export function generateCSRFToken(): string {
//   // Generate a cryptographically secure random token
//   return crypto.randomBytes(32).toString('hex');
// }

// export function validateCSRFToken(token: string, storedToken: string): boolean {
//   // Use timing-safe comparison to prevent timing attacks
//   return crypto.timingSafeEqual(
//     Buffer.from(token),
//     Buffer.from(storedToken)
//   );
// }