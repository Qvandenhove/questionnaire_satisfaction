import { IonContent, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonRouterOutlet } from '@ionic/react';
import {home, happy, statsChart} from 'ionicons/icons'
import React, { Fragment } from 'react';
import './Menu.css';

interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
  return (
    <Fragment>
      <IonMenu color="dark" side="start" menuId="main" contentId="mainMenu">
        <IonContent>
          <IonList>
            <IonItem key="1" href="#"><IonIcon icon={home}/>Accueil</IonItem>
            <IonItem key="2" href="#"><IonIcon icon={statsChart}/>Résultats</IonItem>
            <IonItem key="3" href="#"><IonIcon icon={happy}/>Questionnaire de satisfaction</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </Fragment>
  );
};

export default Menu;
