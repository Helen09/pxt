import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { behindTheMakeCodeHardware} from '../lib/css-value';

class PinPressed extends DomObject {

    async pinPressed() {

        console.log('Start test pinPressed()');

        await this.click(behindTheMakeCodeHardware.pinPressed,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Pin Pressed on micro:bit');
        console.debug(`The video title of PinPressed is "${videoTitle}"`);

        await this.catchScreenShot('videoOfPinPressed');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "PinPressed"', async () => {
            return await this.pinPressed();
        });
    }

}
export let pinPressed = new PinPressed();