import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { behindTheMakeCodeHardware} from '../lib/css-value';

class Buttons extends DomObject {

    async buttons() {

        console.log('Start test buttons()');

        await this.click(behindTheMakeCodeHardware.buttons,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Buttons on micro:bit');
        console.debug(`The video title of Buttons is "${videoTitle}"`);

        await this.catchScreenShot('videoOfButtons');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Buttons"', async () => {
            return await this.buttons();
        });
    }

}
export let buttons = new Buttons();