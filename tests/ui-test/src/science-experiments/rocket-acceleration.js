import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { scienceExperiments} = require('../lib/css-value');

class RocketAcceleration extends DomObject {

    async rocketAcceleration() {

        console.log('Start test rocketAcceleration()');
        
        await this.click(scienceExperiments.rocketAcceleration,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 08 Rocket Acceleration');
        
        console.debug(`The video title of RocketAcceleration is "${videoTitle}"`);

        await this.catchScreenShot('rocketAcceleration');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "RocketAcceleration"', async () => {
            return await this.rocketAcceleration();
        });
    }

}
export let rocketAcceleration = new RocketAcceleration();