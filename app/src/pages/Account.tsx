import React, { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { type ReactElement } from "react";

export const Account = () : ReactElement<any, any> => {
    return  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Account</IonTitle>
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
        account
      </div>
    </IonContent>
  </IonPage>
}