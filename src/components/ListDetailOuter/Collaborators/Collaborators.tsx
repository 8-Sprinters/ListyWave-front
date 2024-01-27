import * as S from './Collaborators.css';

interface Collaborators {
  id?: number;
  nickname: string;
  profileImageUrl: string;
}

interface CollaboratorsProps {
  collaborators: Collaborators[] | null;
}

function Collaborators({ collaborators }: CollaboratorsProps) {
  const collaboratorsList = collaborators && collaborators?.length >= 3 ? collaborators?.slice(0, 3) : collaborators;

  return (
    <div className={S.Wrapper}>
      <div className={S.ProfileImg}>
        <span>{`+${collaborators && collaborators?.length - 3}`}</span>
      </div>
      {collaboratorsList?.map((item, idx) => {
        return (
          <div className={S.ProfileImg}>
            <span>{`${item.nickname.charAt(0)}`}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Collaborators;
