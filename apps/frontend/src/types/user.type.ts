export type TUser = {
    _id: string;
    name: string;
    role: 'admin' | 'editor' | 'viewer';
    active: boolean;
}

export type TQueryParams = {
    search?: string;
    role?: string;
    sort?: 'asc' | 'desc';
}