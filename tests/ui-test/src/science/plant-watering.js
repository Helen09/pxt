import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { science, commonActions } = require('../lib/css-value');

class PlantWatering extends DomObject {

    async plantWatering() {

        console.log('Start test plantWatering()');

        await this.click(science.plantWatering, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Plant Watering');
        console.debug(`The header of the new page is "${headerTitle}"`);
        
        await this.click(commonActions.playButton);

        await this.switchToIframe('.embed iframe');

        await this.click(commonActions.videoPlay);

        let videoTitle = await this.getText(commonActions.videoTitle);
        assert.equal(videoTitle, 'micro:bit plant watering');
        console.debug(`The video title is "${videoTitle}"`);

        await this.closeCurrentWindow();
        
        await this.click(commonActions.closeButton);

    }

    test() {
        
        it('Start learning the "Plant Watering"', async () => {
            return await this.plantWatering();
        });
    }

}
export let plantWatering = new PlantWatering();