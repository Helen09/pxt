import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { scienceExperiments} = require('../lib/css-value');

class PopulationTraitCounter extends DomObject {

    async populationTraitCounter() {

        console.log('Start test populationTraitCounter()');
        
        await this.click(scienceExperiments.populationTraitCounter,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 02 Population Trait Counter');
        
        console.debug(`The video title of PopulationTraitCounter is "${videoTitle}"`);

        await this.catchScreenShot('populationTraitCounter');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "PopulationTraitCounter"', async () => {
            return await this.populationTraitCounter();
        });
    }

}
export let populationTraitCounter = new PopulationTraitCounter();