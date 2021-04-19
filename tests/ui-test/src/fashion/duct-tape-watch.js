import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { fashion, commonActions } from '../lib/css-value';

class DuctTapeWatch extends DomObject {

    async ductTapeWatch() {

        console.log('Start test ductTapeWatch()');

        await this.click(fashion.ductTapeWatch, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Duct Tape Watch');
        console.debug(`The header of the new page is "${headerTitle}"`);
        
        await this.closeCurrentWindow();
        
        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Duct Tape Watch"', async () => {
            return await this.ductTapeWatch();
        });
    }

}
export let ductTapeWatch = new DuctTapeWatch();