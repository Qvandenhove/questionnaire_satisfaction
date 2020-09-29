import { IonContent, IonIcon, IonItem, IonList, IonMenu } from '@ionic/react';
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
            <IonItem key="2" href="resultats"><IonIcon icon={statsChart}/>Résultats</IonItem>
            <IonItem key="3" href="questionnaire"><IonIcon icon={happy}/>Questionnaire de satisfaction</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </Fragment>
  );
};

export default Menu;
