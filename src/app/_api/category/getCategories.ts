import axiosInstance from '@/lib/axios/axiosInstance';
import { CategoriesType } from '@/lib/types/categoriesType';

export const getCategories = async () => {
  const response = await axiosInstance.get<CategoriesType>('/categories');

  return response.data;
};
