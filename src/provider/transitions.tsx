import React from "react";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import "./transition.css";

type TransitionsProps = {
  transition: string;
  pageKey: string;
  children: React.ReactNode;
};


// const childFactoryCreator =
//   (props: { classNames: string }) => (child: React.ReactElement) =>
//     React.cloneElement(child, props);

const Transitions = ({ transition, pageKey, children }: TransitionsProps) => (
  <TransitionGroup className="transitions-group">
    <CSSTransition key={pageKey} timeout={500} classNames={transition}>
      {children}
    </CSSTransition>
  </TransitionGroup>
);

export default Transitions;