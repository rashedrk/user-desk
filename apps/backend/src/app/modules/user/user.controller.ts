import catchAsync from "@/app/utils/catchAsync";
import { UserServices } from "./user.services";
import sendResponse from "@/app/utils/sendResponse";
import httpStatus from "http-status";
import pick from "@/app/utils/pick";


const getAllUsers = catchAsync(async (req, res) => {
    const query = pick(req.query, ['search', 'role', 'sort']);

    const result = await UserServices.getAllUsers(query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All users were successfully retrieved',
        data: result
    })
});

const getUserById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserServices.getUserById(id as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User information successfully retrieved',
        data: result
    })
});

const updateStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserServices.updateStatus(id as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User status successfully updated',
        data: result
    })
});

export const UserController = {
    getAllUsers,
    getUserById,
    updateStatus
};