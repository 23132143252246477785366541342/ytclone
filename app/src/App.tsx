/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./styles/index.css"

import { ComponentElement, useState } from 'react'
import { IonApp, IonContent, IonIcon, IonLabel, IonRoute, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, home, person, settings, square, triangle, videocam } from "ionicons/icons"
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { Account } from './pages/Account';
import { Videos } from './pages/Videos';
import { Settings } from './pages/Settings';

setupIonicReact();

const Router = ({ children }: React.PropsWithChildren) : ComponentElement<any, IonReactRouter> =>
  React.createElement(IonReactRouter, undefined, children);

function App() {
  const [count, setCount] = useState(0)

  return (
    <IonApp>
    <Router>
    <IonTabs>
      <IonRouterOutlet>
        <IonRoute path="/home" render={() => <Home />}/>
        <IonRoute path="/account" render={() => <Account />}/>
        <IonRoute path="/videos" render={() => <Videos />}/>
        <IonRoute path="/settings" render={() => <Settings />}/>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="videos" href="/videos">
          <IonIcon icon={videocam} />
          <IonLabel>Videos</IonLabel>
        </IonTabButton>
        <IonTabButton tab="account" href="/account">
          <IonIcon icon={person} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </Router>
  </IonApp>
  )
}

export default App
