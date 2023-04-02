import React, { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { type ReactElement } from "react";

export const Videos = () : ReactElement<any, any> => {
    return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Videos</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Videos
      </div>
    </IonContent>
  </IonPage>);
}