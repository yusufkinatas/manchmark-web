import React, { useState } from 'react';
import logo from './assets/logo.png';
import appStore from './assets/app-store.png';
import googlePlay from './assets/google-play.png';
import yusufPhoto from './assets/yusuf.jpeg';
import yagizPhoto from './assets/yagiz.jpeg';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import './App.css';
import './initialize';

const appStoreURL = 'https://play.google.com/store/apps/details?id=com.manchmark&hl=en';
const googlePlayURL = 'https://play.google.com/store/apps/details?id=com.manchmark&hl=en';

function App() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div className="App">
      <div className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="title">Manchmark</div>
        <div className="subtitle">A Skill Test</div>

        <p>Push your skills to the limit and compare yourself to other people.</p>
        <p>Download it now and see how skilled you are!</p>

        <div className="download-buttons">
          <a href={appStoreURL}>
            <img src={appStore} className="download-button" alt="app-store" />
          </a>
          <a href={googlePlayURL}>
            <img src={googlePlay} className="download-button" alt="google-play" />
          </a>
        </div>
      </div>

      <div className="developers-btn" onClick={show}>ABOUT</div>

      <Rodal
        measure="em"
        width={18}
        height={16}
        showCloseButton={false}
        visible={visible}
        onClose={hide}>
        <h1 className="modal-title">Developers</h1>
        <div className="links">
          <a href="https://www.linkedin.com/in/yusuf-kinatas">
            <img src={yusufPhoto} className="" alt="yusuf-kinatas" />
            <div>Yusuf Kınataş</div>
          </a>
          <a href="https://www.linkedin.com/in/yagiz-akyuz">
            <img src={yagizPhoto} className="" alt="yagiz-akyuz" />
            <div>Yağız Akyüz</div>
          </a>
        </div>

        <div className="btn" onClick={hide}>
          Go Back
        </div>
      </Rodal>
    </div>
  );
}

export default App;
