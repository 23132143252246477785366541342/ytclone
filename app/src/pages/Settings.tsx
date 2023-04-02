import React, { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { type ReactElement } from "react";

export const Settings = () : ReactElement<any, any> => {
    return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Settings</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Settings
      </div>
    </IonContent>
  </IonPage>;
}