import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { companyService } from './company.service';

// Create Company (Fixed spelling from "createCompnay" to "createCompany")
const createCompany = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const file = req.file as Express.Multer.File | undefined;

  const result = await companyService.createCompany(
    file,
    req.body,
    userId
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Company created successfully",
    data: result,
  });
});
// Get All Companies
const getAllCompanies = catchAsync(async (req, res) => {
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Companies retrieved successfully',
    data: result,
  });
});

// Get Single Company by ID
const getSingleCompany = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Company retrieved successfully',
    data: result,
  });
});

// Update Company
const updateCompany = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Company updated successfully',
    data: result,
  });
});

// Delete Company
const deleteCompany = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = ''; // Your service logic here
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Company deleted successfully',
    data: result,
  });
});

// Export all company controllers
export const companyController = {
  createCompany,
  getAllCompanies,
  getSingleCompany,
  updateCompany,
  deleteCompany,
};
