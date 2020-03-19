import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class LightSensor extends DomObject {

    async lightSensor() {

        console.log('Start test lightSensor()');

        await this.click(behindTheMakeCodeHardware.lightSensor,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Light Sensor on micro:bit');
        console.debug(`The video title of LightSensor is "${videoTitle}"`);

        await this.catchScreenShot('videoOfLightSensor');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "LightSensor"', async () => {
            return await this.lightSensor();
        });
    }

}
export let lightSensor = new LightSensor();