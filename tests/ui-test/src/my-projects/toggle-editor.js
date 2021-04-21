import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { switchButton } from '../lib/css-value';

class ToggleDisplayForm extends DomObject {

    async toggleDisplayForm() {

        console.log("Start test toggleDisplayForm()");

        await this.click(switchButton.switchToJavaScript);

        let explorerToolbar = await this.getText(switchButton.titleOfExplorer);

        assert.equal(explorerToolbar, 'Explorer');

        console.debug(`The ${explorerToolbar} toolbar appears after toggling to JavaScript option`);

        await this.click(switchButton.dropDownMenu, switchButton.switchToPython);

        let firstLineOfPython = await this.getText(switchButton.pythonSrc1);
        assert.equal(firstLineOfPython, 'def');
        console.log(`The first line of python script is :${firstLineOfPython}`);

        await this.click(switchButton.switchToBlocks);

    }

    test() {
        it('Toggle to Blocks or JavaScript', async () => {

            return await this.toggleDisplayForm();

        });
    }
}

export let toggleDisplayForm = new ToggleDisplayForm();


