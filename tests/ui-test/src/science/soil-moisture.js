import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { science, commonActions } = require('../lib/css-value');

class SoilMoisture extends DomObject {

    async soilMoisture() {

        console.log('Start test soilMoisture()');

        await this.click(science.soilMoisture, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Soil Moisture');
        console.debug(`The header of the new page is "${headerTitle}"`);
        
        await this.closeCurrentWindow();
        
        await this.click(commonActions.closeButton);

    }

    test() {
        
        it('Start learning the "Soil Moisture"', async () => {
            return await this.soilMoisture();
        });
    }

}
export let soilMoisture = new SoilMoisture();