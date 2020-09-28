import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Menu from '../components/Menu';
import Questionnaire from '../components/Questionnaire'
import './Satisfaction.css';

const Satisfaction: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,700;1,400;1,700&display=swap" rel="stylesheet"/> 
        <IonToolbar>
            <IonMenuButton menu="main" color="primary" id="mainMenu" autoHide={false}></IonMenuButton>
          <IonTitle><h1>Questionnaire de satisfaction</h1></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <Menu />
            <Questionnaire/>
      </IonContent>
    </IonPage>
  );
};

export default Satisfaction;
