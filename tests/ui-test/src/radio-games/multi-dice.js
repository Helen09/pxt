import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { radioGames, commonActions } = require('../lib/css-value');

class MultiDice extends DomObject {

    async multiDice() {

        console.log('Start test multiDice()');

        await this.click(radioGames.multiDice, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Multi Dice');
        console.debug(`The title of the current window is "${headerTitle}"`);

        await this.click(commonActions.okButton);

        for (let i = 1; i < 6; i++) {

            await this.click(commonActions.goNextButton);

            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');
        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Multi Dice');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the Multi Dice', async () => {
            return await this.multiDice();
        });
    }

}
export let multiDice = new MultiDice();