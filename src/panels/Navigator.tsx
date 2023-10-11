import React from 'react';
import PropTypes from 'prop-types';

import { Button, Epic, Panel, PanelHeader, PanelHeaderBack, Placeholder, Tabbar, TabbarItem, View } from '@vkontakte/vkui';

import './Persik.css';
import { Icon56HideOutline, Icon28ArrowLeftOutline, Icon28UserCircleOutline, Icon28GlobeOutline, Icon28GameOutline, Icon28PollSquareOutline, Icon28Menu } from '@vkontakte/icons';

interface WaitProps {
  text: string;
  id: string;
  go: React.MouseEventHandler<HTMLElement>;
};

const Navigator: React.FC<WaitProps> = props => {
  console.log('Navigator render');
  
  return (
    <View activePanel='navigator'>
      <Panel id='navigator'>
        <Epic className='mainBottomPanel' activeStory={'false'} tabbar={
          <Tabbar>
            <TabbarItem
              className={"profile"}
              onClick={() => {}}
              selected={true}
              data-story="profile"
              text="Профиль"
            ><Icon28UserCircleOutline /></TabbarItem>
            <TabbarItem
              className={"clans"}
              onClick={() => {}}
              selected={false}
              data-story="clans"
              text="Команды"
            ><Icon28GlobeOutline width={28} height={28} /></TabbarItem>
            <TabbarItem
              className={"games"}
              onClick={() => {}}
              selected={false}
              data-story="games"
              text="Играть"
            ><Icon28GameOutline /></TabbarItem>
            <TabbarItem
              className={"rating"}
              // onClick={this.onStoryChange}
              // selected={this.state.activeStory === 'rating'}
              data-story="rating"
              text="Рейтинг"
            ><Icon28PollSquareOutline /></TabbarItem>
            <TabbarItem
              className={"more"}
              // onClick={this.onStoryChange}
              // selected={this.state.activeStory === 'more'}
              data-story="more"
              text="Ещё"
            ><Icon28Menu /></TabbarItem>
          </Tabbar>
        }>
          {/* <Profile id="profile" changeStory={this.changeStory} go={this.state.go} theme={this.props.theme} />
        <Clans id="clans" changeStory={this.changeStory} go={this.state.go} />
        <Games id="games" changeStory={this.changeStory} go={this.state.go} />
        <Rating id="rating" changeStory={this.changeStory} go={this.state.go} />
        <More id="more" changeStory={this.changeStory} go={this.state.go} /> */}
          {
            (() => { console.log(132); return <></> })()

          }
        </Epic>
      </Panel>
    </View>
  );
}

export default Navigator;
