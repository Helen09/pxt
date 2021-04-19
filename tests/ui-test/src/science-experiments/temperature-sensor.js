import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { scienceExperiments} from '../lib/css-value';

class TemperatureSensor extends DomObject {

    async _temperatureSensor() {

        console.log('Start test temperatureSensor()');
        
        await this.click(scienceExperiments.temperatureSensor,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 03 Temperature Sensor');
        
        console.debug(`The video title of TemperatureSensor is "${videoTitle}"`);

        await this.catchScreenShot('temperatureSensor');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "TemperatureSensor"', async () => {
            return await this._temperatureSensor();
        });
    }

}
export let _temperatureSensor = new TemperatureSensor();