import firebase from "firebase"
import {Chart} from 'chart.js'
import { barChart } from "ionicons/icons";

var firebaseConfig = {
    apiKey: "AIzaSyAr2ARyw2PBu7i9l_dvRAgl3X4cgE0Voi4",
    authDomain: "satisfaction-7bbc4.firebaseapp.com",
    databaseURL: "https://satisfaction-7bbc4.firebaseio.com",
    projectId: "satisfaction-7bbc4",
    storageBucket: "satisfaction-7bbc4.appspot.com",
    messagingSenderId: "88882724595",
    appId: "1:88882724595:web:40b919b492d15f6a420186"
  };
firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()

const helpers = {
    async exportDatas(datas:any){
        let new_doc = db.collection("Avis").doc()
        await new_doc.set(datas)
        document.location.href = "/thanks"
    },
    async getDatas(){
        let ctx:any = document.querySelector("canvas")?.getContext("2d")
        console.log(ctx)
        if(ctx !== undefined){
            let documentsList = await db.collection('Avis').get()
            let SatisfactionDatas:any = []
            documentsList.forEach((documents:any) => {
                SatisfactionDatas.push(documents.data())
            })
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: "avis",
                        data: [0, 1, 2, 3, 4]
                    }]
                },
                options: {
                    scales:{
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })
        }
    }
}

export default helpers