import HomeDrawer from "./drawer";
import ModalProvider from "./modal";


export default function HomeProvider() {
  return (
    <>
      <HomeDrawer />
      <ModalProvider />
    </>
  );
}
