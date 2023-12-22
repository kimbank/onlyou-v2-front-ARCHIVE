import DrawerFrame from "./DrawerFrame";
import DrawerButton from "./DrawerItem/DrawerButton";
import DrawerContent from "./DrawerItem/DrawerContent";
import DrawerTitle from "./DrawerItem/DrawerTitle";

export const Drawer = Object.assign(DrawerFrame, {
  Title: DrawerTitle,
  Content: DrawerContent,
  Buttons: DrawerButton,
});
