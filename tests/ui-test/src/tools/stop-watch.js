import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { tools, commonActions } from '../lib/css-value';

class StopWatch extends DomObject {

    async stopWatch() {

        console.log('Start test stopWatch()');

        await this.click(tools.stopWatch, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Stopwatch');
        console.debug(`The title of the current window is "${headerTitle}"`);
    
        await this.click(commonActions.okButton);

        for (let i = 1; i < 7; i++) {

            await this.click(commonActions.goNextButton);
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);

        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Stopwatch');
        console.debug(`The current project name is "${projectName}"`);

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the StopWatch', async () => {
            return await this.stopWatch();
        });
    }

}
export let stopWatch = new StopWatch();