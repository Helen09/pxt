import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { games, commonActions } = require('../lib/css-value');

class SevenSeconds extends DomObject {

    async sevenSeconds() {

        console.log('Start test sevenSeconds()');

        await this.click(games.sevenSecounds, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, '7 seconds game');
        console.debug(`The title of the current window is "${headerTitle}"`);
    
        await this.click(commonActions.okButton);

        for (let i = 1; i < 7; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, '7 seconds');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the 7 Seconds', async () => {
            return await this.sevenSeconds();
        });
    }

}
export let sevenSeconds = new SevenSeconds();