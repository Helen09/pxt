import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class ShakeTheBottle extends DomObject {

    async shakeTheBottle() {

        await this.click(codingCards.shakeTheBottle,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('shakeTheBottle');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "ShakeTheBottle"', async () => {
            return await this.shakeTheBottle();
        });
    }

}
export let shakeTheBottle = new ShakeTheBottle();