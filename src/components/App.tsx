import { LightbulbFullIcon, LightbulbOutlineIcon } from '@src/icons';
import React from 'react';

interface Props {
  lightsOn: boolean;
}

const App = (props: Props) => {
  return props.lightsOn
    ? <LightbulbOutlineIcon />
    : <LightbulbFullIcon />;
};

App.defaultProps = {};

export default App;
