import App from '@src/components/App';
import * as icons from '@src/icons';
import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

describe('App', () => {
  //#region when light is on
  describe('when light is on', () => {
    //#region it renders LightbulbOutlineIcon
    it('renders LightbulbOutlineIcon', () => {
      const spyForLightbulbOutlineIcon = jest.spyOn(icons, 'LightbulbOutlineIcon');

      render(<App lightsOn={true} />);

      expect(spyForLightbulbOutlineIcon).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
    //#endregion
  });
  //#endregion
  //#region when light is off
  describe('when light is on', () => {
    //#region it renders LightbulbFullIcon
    it('renders LightbulbFullIcon', () => {
      const spyForLightbulbFullIcon = jest.spyOn(icons, 'LightbulbFullIcon');

      render(<App lightsOn={false} />);

      expect(spyForLightbulbFullIcon).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
    //#endregion
  });
  //#endregion
});
