import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { tutorials, commonActions } = require('../lib/css-value');

class LoveMeter extends DomObject {

    async loveMeter() {

        console.log('Start test loveMeter()');
        
        await this.click(tutorials.loveMeter, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Love Meter');
        console.debug(`The title of the current window is "${headerTitle}"`);

        await this.click(commonActions.okButton);

        for (let i = 1; i < 5; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Love Meter');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo, commonActions.seeMoreOfTutorials);

    }

    test() {
        it('Start learning the Love Meter', async () => {
            return await this.loveMeter();
        });
    }

}
export let loveMeter = new LoveMeter();