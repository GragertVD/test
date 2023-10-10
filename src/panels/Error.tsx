import React from 'react';
import PropTypes from 'prop-types';

import { Button, Panel, PanelHeader, PanelHeaderBack,  Placeholder,  View } from '@vkontakte/vkui';

import './Persik.css';
import { Icon56ErrorOutline } from '@vkontakte/icons';

interface ErrorProps {
  text: string;
  go: React.MouseEventHandler<HTMLElement>;
};

const Error: React.FC<ErrorProps> = props => (
  <View activePanel='error'>
    <Panel id='error'>
      {/* <PanelHeaderSimple separator={false} /> */}
      <Placeholder
        icon={<Icon56ErrorOutline style={{ color: '#ef5350' }} />}
        header={"Ошибка"}
        action={<Button size="l" mode="tertiary" onClick={props.go} data-to="home">Повторить попытку</Button>}
        stretched
      >
        {props.text}
      </Placeholder>
    </Panel>
  </View>
);

export default Error;
