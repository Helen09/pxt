import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { scienceExperiments} = require('../lib/css-value');

class BatteryTester extends DomObject {

    async batteryTester() {

        console.log('Start test batteryTester()');

        await this.click(scienceExperiments.batteryTester,scienceExperiments.playVideo);

        await this.switchToNewWindow();
        
        let videoTitle = await this.getText(scienceExperiments.videoTitle);

        assert.equal(videoTitle, 'Science Experiments 07 Battery Tester');
        
        console.debug(`The video title of BatteryTester is "${videoTitle}"`);

        await this.catchScreenShot('batteryTester');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "BatteryTester"', async () => {
            return await this.batteryTester();
        });
    }

}
export let batteryTester = new BatteryTester();