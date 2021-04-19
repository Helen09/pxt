import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { scienceExperiments} from '../lib/css-value';

class DataCollection extends DomObject {

    async dataCollection() {

        console.log('Start test dataCollection()');
        
        await this.click(scienceExperiments.dataCollection,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 01 Data Collection');
        
        console.debug(`The video title of DataCollection is "${videoTitle}"`);

        await this.catchScreenShot('dataCollection');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "DataCollection"', async () => {
            return await this.dataCollection();
        });
    }

}
export let dataCollection = new DataCollection();