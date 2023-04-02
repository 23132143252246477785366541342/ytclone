import React, { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { type ReactElement } from "react";

export const Home = () : ReactElement<any, any> => {
    return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Homepage</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div
      >
        Home
      </div>
    </IonContent>
  </IonPage>;
}