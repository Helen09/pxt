import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { scienceExperiments} = require('../lib/css-value');

class TemperatureSensor extends DomObject {

    async temperatureSensor() {

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
            return await this.temperatureSensor();
        });
    }

}
export let temperatureSensor = new TemperatureSensor();