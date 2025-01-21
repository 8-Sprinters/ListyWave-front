import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';

import { editAdminTopicType } from '@/lib/types/requestedTopicType';

const editAdminTopic = async ({ topicId, isExposed, categoryCode, title }: editAdminTopicType) => {
  await axiosInstanceForAdmin.put(`/admin/topics/${topicId}`, {
    isExposed,
    categoryCode,
    title,
  });
};

export default editAdminTopic;
