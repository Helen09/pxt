import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class MakeATrundleWheel extends DomObject {

    async makeATrundleWheel() {

        await this.click(codingCards.makeATrundleWheel,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('makeATrundleWheel');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "MakeATrundleWheel"', async () => {
            return await this.makeATrundleWheel();
        });
    }

}
export let makeATrundleWheel = new MakeATrundleWheel();