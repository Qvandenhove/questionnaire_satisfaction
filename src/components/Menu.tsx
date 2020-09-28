import { IonContent, IonItem, IonList, IonMenu, IonMenuButton, IonRouterOutlet } from '@ionic/react';
import React, { Fragment } from 'react';
import './Menu.css';

interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
  return (
    <Fragment>
      <IonMenu color="dark" side="start" menuId="main" contentId="mainMenu">
        <IonContent>
          <IonList>
            <IonItem href="#">Entrée 1</IonItem>
            <IonItem href="#">Entrée 2</IonItem>
            <IonItem href="#">Entrée 3</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </Fragment>
  );
};

export default Menu;
