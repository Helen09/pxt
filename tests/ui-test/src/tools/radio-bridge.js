import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { tools, commonActions } from '../lib/css-value';

class RadioBridge extends DomObject {

    async radioBridge() {

        console.log('Start test radioBridge()');

        await this.click(tools.radioBridge, tools.openExample);

        let projectName = await this.getAttribute(commonActions.projectName,'value');
        assert.equal(projectName, 'radio bridge');
        console.log(`The project name is "${projectName}"`);
        
        await this.catchScreenShot('ExampleOfRadioBridge');

        await this.click(commonActions.microbitLogo);

    }

    test() {

        it('Start learning the "Radio Bridge"', async () => {
            return await this.radioBridge();
        });
    }
}
export let radioBridge = new RadioBridge();