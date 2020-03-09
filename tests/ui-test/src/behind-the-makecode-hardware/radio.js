import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class Radio extends DomObject {

    async radio() {

        await this.click(behindTheMakeCodeHardware.radio,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Radio in micro:bit');
        console.debug(`The video title of Radio is "${videoTitle}"`);

        await this.catchScreenShot('videoOfRadio');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Radio"', async () => {
            return await this.radio();
        });
    }

}
export let radio = new Radio();