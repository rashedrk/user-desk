
import { prisma } from "@/app/lib/Prisma";
import type { TUserQueryRequest } from "./user.interface";
import type { Prisma, ROLE } from "@prisma/client";

const getAllUsers = async (query: TUserQueryRequest = {}) => {
    const { search, role, sort } = query;

    const where: Prisma.UserWhereInput = {};

    // Filter by search term
    if (search) {
        where.name = {
            contains: search,
            mode: 'insensitive',
        };
    }

    // Filter by role
    if (role) {
        where.role = role as ROLE;
    }

    return prisma.user.findMany({
        where,
        ...(sort && { orderBy: { name: sort } })
    });
}

export const UserServices = { getAllUsers };