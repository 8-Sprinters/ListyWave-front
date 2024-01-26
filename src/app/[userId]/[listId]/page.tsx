import ListDetailBottomSheet from '@/components/ListDetailOuter/ListDetailBottomSheet';
import Header from '@/components/ListDetailOuter/Header/Header';
import ListInformation from '@/components/ListDetailOuter/ListInformation/ListInformation';

export default function ListDetail() {
  return (
    <>
      <div>
        <Header />
        <ListInformation />
        <ListDetailBottomSheet />
      </div>
    </>
  );
}
