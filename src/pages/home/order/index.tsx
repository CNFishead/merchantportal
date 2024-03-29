import { navigation } from '@/data/navigation';
import PageLayout from '@/layout/page/Page.layout';
import OrderList from '@/views/home/order/OrderList.view';
import Head from 'next/head';

const Order = () => {
  return (
    <PageLayout pages={[navigation().home.links.order]} largeSideBar={true}>
      <OrderList />
    </PageLayout>
  );
};

export default Order;
