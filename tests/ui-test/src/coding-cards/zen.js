import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class Zen extends DomObject {

    async zen() {

        await this.click(codingCards.zen,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('zen');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Zen"', async () => {
            return await this.zen();
        });
    }

}
export let zen = new Zen();