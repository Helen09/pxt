import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class Speakers extends DomObject {

    async speakers() {

        await this.click(behindTheMakeCodeHardware.speakers,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Speakers with the micro:bit');
        console.debug(`The video title of Speakers is "${videoTitle}"`);

        await this.catchScreenShot('videoOfSpeakers');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Speakers"', async () => {
            return await this.speakers();
        });
    }

}
export let speakers = new Speakers();