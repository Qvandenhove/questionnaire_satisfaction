import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import DemandeNote from '../components/demandeNote'
import helpers from '../helpers/helpers'
import './Satisfaction.css';
import { closeCircleOutline } from 'ionicons/icons';

const Satisfaction: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
    const checkForm = (form:NodeList) => {
        let datas:any = {}
        let errors = []
        form.forEach((input:any) => {
            if((input.value === "" || input.value === undefined) && (input.classList.contains("sc-ion-textarea-md-h") === false)){
                errors.push(input)
            }else{
                datas[input.name] = input.value
            }
        })
        if (errors.length > 0){
            setIsOpen(true)
        }else{
            helpers.exportDatas(datas)
        }
    }
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
            <IonList color="primary" className="questionnaire">
                <DemandeNote nom="accueil" label="Que pensez vous de la qualité de l'accueil?"/>
                <DemandeNote nom="choix" label="Que pensez vous des choix proposés?"/>
                <DemandeNote nom="orientation" label="Que pensez vous de la qualité de l'orientation dans l'enceinte du bâtiment?"/>
                <IonItem color="secondary" key="prenom">
                    <IonLabel position="stacked">Votre Prénom : </IonLabel>
                    <IonInput name="prenom" type="text" placeholder="Prénom"></IonInput>
                </IonItem>
                <IonItem color="secondary" key="nom">
                    <IonLabel position="stacked">Votre Nom : </IonLabel>
                    <IonInput name="nom" type="text" placeholder="Nom"></IonInput>
                </IonItem>
                <IonItem color="secondary" key="email">
                    <IonLabel position="stacked">Votre email : </IonLabel>
                    <IonInput name="mail" type="email" placeholder="email"></IonInput>
                </IonItem>
                <IonItem key="Submit" color="secondary">
                    <IonButton size="default" onClick={() => {checkForm(document.querySelectorAll("ion-input, ion-radio-group, ion-textarea"))}} type="submit">Envoyer</IonButton>
                </IonItem>
            </IonList>
            <IonModal isOpen={isOpen}>
                <IonButton onClick={() => {setIsOpen(false)}}><IonIcon  className="closeModal" icon={closeCircleOutline}/></IonButton>
                Merci de remplir tout les champs s'il vous plaît.
            </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Satisfaction;
