import React from 'react';
import PropTypes from 'prop-types';

import { Button, Panel, PanelHeader, PanelHeaderBack, Placeholder, View } from '@vkontakte/vkui';

import './Persik.css';
import { Icon56HideOutline, Icon28ArrowLeftOutline } from '@vkontakte/icons';

interface WaitProps {
  text: string;
  go: React.MouseEventHandler<HTMLElement>;
};

const Wait: React.FC<WaitProps> = props => (
  <View activePanel='wait'>
    <Panel id='wait'>
      {/* <PanelHeaderSimple separator={false} /> */}
      <Placeholder
        icon={<Icon56HideOutline style={{ color: '#FF9800' }} />}
        header={"Не сворачивайте приложение!"}
        action={<Button size="l" before={<Icon28ArrowLeftOutline width={16} height={16} />} onClick={props.go} data-to="home">Вернуться</Button>}
        stretched
      >
        Приложение не работает в фоновом режиме
      </Placeholder>
    </Panel>
  </View>
);

export default Wait;
