import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { tools, commonActions } from '../lib/css-value';

class Level extends DomObject {

    async level() {

        console.log('Start test level()');

        await this.click(tools.level, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Level');
        console.debug(`The title of the current window is "${headerTitle}"`);
    
        await this.click(commonActions.okButton);

        for (let i = 1; i < 6; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Level');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the Level', async () => {
            return await this.level();
        });
    }

}
export let level = new Level();