import axiosInstance from '@/lib/axios/axiosInstance';
import { CategoryType } from '@/lib/types/categoriesType';

const getCategories = async () => {
  const response = await axiosInstance.get<CategoryType[]>('/categories');

  return response.data;
};

export default getCategories;
