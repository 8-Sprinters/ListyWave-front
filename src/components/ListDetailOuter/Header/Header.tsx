import * as S from './Header.css';

function Header() {
  return (
    <div className={S.Wrapper}>
      <button>{`<`}</button>
      <div className={S.Title}>리스트</div>
      <button>|</button>
    </div>
  );
}

export default Header;
