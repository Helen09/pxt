import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { behindTheMakeCodeHardware} = require('../lib/css-value');

class ServoMotor extends DomObject {

    async servoMotor() {

        console.log('Start test servoMotor()');

        await this.click(behindTheMakeCodeHardware.servoMotor,behindTheMakeCodeHardware.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(behindTheMakeCodeHardware.videoTitle);
        assert.equal(videoTitle, 'Behind the MakeCode Hardware - Servo Motors with micro:bit');
        console.debug(`The video title of ServoMotor is "${videoTitle}"`);

        await this.catchScreenShot('videoOfServoMotor');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "ServoMotor"', async () => {
            return await this.servoMotor();
        });
    }

}
export let servoMotor = new ServoMotor();