import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class LEDs extends DomObject {

    async leds() {

        await this.click(behindTheMakeCodeHardware.leds,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();

        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - LEDs on micro:bit');
        console.debug(`The header of the sidedocs is "${videoTitle}"`);

        await this.catchScreenShot('videoOfLEDs');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "LEDs"', async () => {
            return await this.leds();
        });
    }

}
export let leds = new LEDs();