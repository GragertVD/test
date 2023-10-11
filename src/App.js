import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Persik_ts from './panels/Error';
import Error from './panels/Error';
import Wait from './panels/Wait';
import axios from 'axios';
import Navigator from './panels/Navigator';
import { useDispatch } from 'react-redux';
import { getUser } from './store/slices/server/user.slice';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';

const SERVER_PATH = 'https://play.gcapp.ru/server/';
const SECRET = 'npaP 2oA 6F:o5ma2w8*P4Aцxvk[ацpTы ф';

const query = (user_id, query, data, response, error = () => { }) => {
  axios.post(
    SERVER_PATH + 'capi.php',
    {
      query: query,
      data: data,
      secret: SECRET,
      uid: user_id,
      referer: document.location.href,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then(response).catch(error);

}

const App = () => {
  const [activePanel, setActivePanel] = useState(['home']);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  // const dispatch = useAppDispatch(getUser());
  // const state = useAppSelector();
// console.log(state);
  useEffect(() => {
    async function fetchData() {
      console.log('start');
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
      // console.log(user);

      // query(user.id, 'getUser', { ref: null }, (data) => {
      //   console.log('succes', data);
      // });
      
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
                <Wait id='wait' go={go} />
              </View>
              <View activePanel='navigator'>
                <Navigator id='navigator' go={go} />
              </View>
            </SplitCol>
            {/* <Navigator id='navigator' go={go} /> */}

          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
