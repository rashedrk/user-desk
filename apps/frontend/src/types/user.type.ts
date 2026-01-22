export type TUser = {
    id: string;
    name: string;
    role: 'admin' | 'editor' | 'viewer';
    active: boolean;
}

export type TQueryParams = {
    search?: string;
    role?: string;
    sort?: 'asc' | 'desc';
}

export type TUserInfo = TUser & {
    email: string;
}