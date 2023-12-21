import SwipeableEdgeDrawer from '@/components/Popup';

export default function Modal({ children, clicked, setClicked }) {
  
  return (
    <SwipeableEdgeDrawer clicked={clicked} setClicked={setClicked}>
      {children}
    </SwipeableEdgeDrawer>
  )
}