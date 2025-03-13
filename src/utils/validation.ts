export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const getPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const score = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar]
    .filter(Boolean).length;
  
  if (password.length < 8) return 'weak';
  if (score < 3) return 'weak';
  if (score === 3) return 'medium';
  return 'strong';
};