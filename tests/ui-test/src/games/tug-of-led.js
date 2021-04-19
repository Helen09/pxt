import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { games, commonActions } from '../lib/css-value';

class TugOfLED extends DomObject {

    async tugOfLED() {

        console.log('Start test tugOfLED()');

        await this.click(games.tugOfLed, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Tug-Of-LED');
        console.debug(`The title of the current window is "${headerTitle}"`);
    
        await this.click(commonActions.okButton);

        for (let i = 1; i < 7; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Tug-Of-LED');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo, games.seeMoreButton);

    }

    test() {
        it('Start learning the Tug-Of-LED', async () => {
            return await this.tugOfLED();
        });
    }

}
export let tugOfLED = new TugOfLED();