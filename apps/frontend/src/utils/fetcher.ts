import { env } from '@user-desk/env/frontend';

interface IFetcherOptions extends RequestInit {
    headers?: Record<string, string>;
}

export const fetcher = async <T = any>(url: string, options: IFetcherOptions = {}): Promise<T> => {
    const response = await fetch(`${env.VITE_SERVER_URL}${url}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Something went wrong' }));
        throw new Error(error.message || 'Something went wrong');
    }

    return response.json();
};
