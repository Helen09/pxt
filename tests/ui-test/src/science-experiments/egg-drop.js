import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { scienceExperiments} from '../lib/css-value';

class EggDrop extends DomObject {

    async eggDrop() {

        console.log('Start test eggDrop()');
        
        await this.click(scienceExperiments.eggDrop,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 06 Egg Drop');
        
        console.debug(`The video title of EggDrop is "${videoTitle}"`);

        await this.catchScreenShot('eggDrop');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "EggDrop"', async () => {
            return await this.eggDrop();
        });
    }

}
export let eggDrop = new EggDrop();