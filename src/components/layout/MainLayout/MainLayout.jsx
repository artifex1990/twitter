import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Messages from '../../Messages/Messages';
import Metrics from '../../Metrics/Metrics';
import NewMessage from '../../NewMessage/NewMessage';

export default function MainLayout() {
  return (
    <>
      <Banner />
      <Metrics />
      <Messages />
      <NewMessage />
      <Footer />
    </>
  );
}
