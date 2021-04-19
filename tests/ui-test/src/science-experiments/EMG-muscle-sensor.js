import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { scienceExperiments} from '../lib/css-value';

class EMGMuscleSensor extends DomObject {

    async eMGMuscleSensor() {

        console.log('Start test EMGMuscleSensor()');
        
        await this.click(scienceExperiments.EMGMuscleSensor,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 05 EMG Sensor');
        
        console.debug(`The video title of EMGMuscleSensor is "${videoTitle}"`);

        await this.catchScreenShot('EMGMuscleSensor');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "EMGMuscleSensor"', async () => {
            return await this.eMGMuscleSensor();
        });
    }

}
export let eMGMuscleSensor = new EMGMuscleSensor();