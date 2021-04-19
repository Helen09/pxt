import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { scienceExperiments} from '../lib/css-value';

class SoilMoistureSensor extends DomObject {

    async soilMoistureSensor() {

        console.log('Start test soilMoistureSensor()');
        
        await this.click(scienceExperiments.soilMoistureSensor,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 04 Soil Moisture Sensor');
        
        console.debug(`The video title of SoilMoistureSensor is "${videoTitle}"`);

        await this.catchScreenShot('soilMoistureSensor');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "SoilMoistureSensor"', async () => {
            return await this.soilMoistureSensor();
        });
    }

}
export let soilMoistureSensor = new SoilMoistureSensor();