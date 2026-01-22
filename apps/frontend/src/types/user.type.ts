import type { selectItem } from "@/constant/user.constant";

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

export type TSelectItemValue = (typeof selectItem)[number]["value"];

export type TSortOrder = 'asc' | 'desc' | null;