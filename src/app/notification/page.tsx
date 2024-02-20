import Header from '@/components/Header/Header';

export default function notificationPage() {
  return (
    <>
      <Header title="알림" left="back" right={<div />} /> {/** TODO: right 옵셔널 & 스타일 적용 후 right속성 지우기 */}
      <div>알림</div>
    </>
  );
}
