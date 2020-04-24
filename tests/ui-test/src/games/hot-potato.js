import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { games, commonActions } = require('../lib/css-value');

class HotPotato extends DomObject {

    async hotPotato() {

        console.log('Start test hotPotato()');

        await this.click(games.hotPotato, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Hot Potato');
        console.debug(`The title of the current window is "${headerTitle}"`);
    
        await this.click(commonActions.okButton);

        for (let i = 1; i < 7; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Hot Potato');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the Hot Potato', async () => {
            return await this.hotPotato();
        });
    }

}
export let hotPotato = new HotPotato();