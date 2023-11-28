import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// className merge
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
