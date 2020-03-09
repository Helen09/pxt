import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class Accelerometer extends DomObject {

    async accelerometer() {

        await this.click(behindTheMakeCodeHardware.accelerometer,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Accelerometer on micro:bit');
        console.debug(`The video title of Accelerometer is "${videoTitle}"`);

        await this.catchScreenShot('videoOfAccelerometer');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Accelerometer"', async () => {
            return await this.accelerometer();
        });
    }

}
export let accelerometer = new Accelerometer();