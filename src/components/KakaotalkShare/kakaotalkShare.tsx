'use client';
import { UserProfileType } from '@/lib/types/userProfileType';

interface kakaotalkShareProps {
  title: string;
  description: string;
  image?: string;
  listItem?: { title: string }[];
  collaborators: UserProfileType[];
  userNickname: string;
  listId: number | null;
}
function kakaotalkShare({
  title,
  description,
  listItem = [],
  collaborators,
  userNickname,
  listId,
}: kakaotalkShareProps) {
  const itemTitle1 = listItem[0]?.title ?? '';
  const itemTitle2 = listItem[1]?.title ?? '';
  const itemTitle3 = listItem[2]?.title ?? '';
  let allWriter = '';

  if (collaborators) {
    const collaboratorsNickname = collaborators.map((collaborator) => collaborator.nickname);
    allWriter = [userNickname, ...collaboratorsNickname].join(',');
  } else {
    allWriter = userNickname;
  }

  window.Kakao.Share.sendCustom({
    templateId: 103935,
    templateArgs: {
      title: title,
      description: description,
      listId: listId,
      itemTitle1,
      itemTitle2,
      itemTitle3,
      allWriter,
    },
  });
}

export default kakaotalkShare;
