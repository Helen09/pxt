import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { tools, commonActions }from '../lib/css-value';

class ServoCalibrator extends DomObject {

    async servoCalibrator() {

        console.log('Start test servoCalibrator()');

        await this.click(tools.servoCalibrator, commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Servo Calibrator');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);
        
        await this.switchToDefaultFrame();
        await this.click(commonActions.microbitLogo, tools.seeMoreButton);

    }

    test() {
        
        it('Start learning the "Servo Calibrator"', async () => {
            return await this.servoCalibrator();
        });
    }

}
export let servoCalibrator = new ServoCalibrator();