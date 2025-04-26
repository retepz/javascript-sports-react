const sportTypes = ['football', 'basketball'] as const;
type SportTypes = typeof sportTypes[number];