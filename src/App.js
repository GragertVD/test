import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Persik_ts from './panels/Error';
import Error from './panels/Error';
import Wait from './panels/Wait';

const App = () => {
  const [activePanel, setActivePanel] = useState(['home']);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  useEffect(() => {
    async function fetchData() {
      console.log('start');
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
      console.log(user);
    }
    fetchData();
  }, []);

  const go = e => {
    const to = e.currentTarget.dataset.to;
    if (to === 'back')
      setActivePanel(activePanel.slice(0, -1));
    else
      setActivePanel([...activePanel, to]);
  };


  return (
    <ConfigProvider appearance='light' transitionMotionEnabled='true'>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol animate='true'>
              <View activePanel={activePanel[activePanel.length - 1]}>
                <Home id='home' fetchedUser={fetchedUser} go={go} />
                <Persik id='persik' go={go} />
                <Error id='error' go={go} text='Error text' />
                <Wait id='wait' go={go}/>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
