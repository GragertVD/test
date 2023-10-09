import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

interface PersikProps {
  id: string;
  go: React.MouseEventHandler<HTMLElement>;
};

const Persik_ts:React.FC<PersikProps> = props => (
  <Panel id={props.id}>
    <PanelHeader
      before={<PanelHeaderBack onClick={props.go} data-to="back" />}
    >
      Persik_ts
    </PanelHeader>
    <img className="Persik" src={persik} alt="Persik The Cat" />
  </Panel>
);

export default Persik_ts;
