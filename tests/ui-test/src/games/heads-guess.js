import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { games, commonActions } = require('../lib/css-value');

class HeadsGuess extends DomObject {

    async headsGuess() {

        console.log('Start test headsGuess()');

        await this.click(games.headsGuess, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Heads Guess!');
        console.debug(`The title of the current window is "${headerTitle}"`);
    
        await this.click(commonActions.okButton);

        for (let i = 1; i < 9; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Heads Guess!');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo, commonActions.seeMoreOfGames);

    }

    test() {
        it('Start learning the Heads Guess!', async () => {
            return await this.headsGuess();
        });
    }

}
export let headsGuess = new HeadsGuess();