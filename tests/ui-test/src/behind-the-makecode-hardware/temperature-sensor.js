import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class TemperatureSensor extends DomObject {

    async temperatureSensor() {

        console.log('Start test temperatureSensor()');

        await this.click(behindTheMakeCodeHardware.temperatureSensor,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Temperature Sensor on micro:bit');
        console.debug(`The video title of TemperatureSensor is "${videoTitle}"`);

        await this.catchScreenShot('videoOfTemperatureSensor');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "TemperatureSensor"', async () => {
            return await this.temperatureSensor();
        });
    }

}
export let temperatureSensor = new TemperatureSensor();