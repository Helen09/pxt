import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class Nervous extends DomObject {

    async nervous() {

        await this.click(codingCards.nervous,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('nervous');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Nervous"', async () => {
            return await this.nervous();
        });
    }

}
export let nervous = new Nervous();