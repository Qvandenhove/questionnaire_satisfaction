import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel } from '@ionic/react'
import React, { Fragment } from 'react'
import Header from '../components/Header'
import './thanks.css'

const Thanks:React.FC = () => {
    return (
        <Fragment>
            <IonHeader>
                <Header title=""/>
            </IonHeader>
            <IonContent>
                <IonCard color="primary">
                    <IonCardTitle>
                        Merci d'avoir rempli ce formulaire.
                    </IonCardTitle>
                    <IonCardContent color="secondary" className="BackHome">
                        <IonItem color="secondary">
                            <IonCheckbox/>
                            <IonLabel>Recevoir vos réponses par mail</IonLabel>
                        </IonItem>
                        <IonButton color="secondary" href="/home" >Revenir à l'accueil</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </Fragment>
    )
}

export default Thanks