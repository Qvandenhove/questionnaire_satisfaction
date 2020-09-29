import { IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Menu from '../components/Menu'
import helpers from '../helpers/helpers'
import Header from '../components/Header'
import './resultats.css'

helpers.getDatas()

const Resultats:React.FC = () => {
    return (  
        <IonPage>
            <Header title="Resultats"/>
            <IonContent fullscreen>
                    <Menu/>
                    <IonTitle><h2>Découvrez ce que nos clients pensent de nous.</h2></IonTitle>
                    <IonItem className='avis'>
                        <canvas className="avis"/>
                    </IonItem>
            </IonContent>
            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        </IonPage>
    )
}

export default Resultats