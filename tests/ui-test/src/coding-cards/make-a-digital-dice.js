import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class MakeADigitalDice extends DomObject {

    async makeADigitalDice() {

        await this.click(codingCards.makeADigitalDice,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('makeADigitalDice');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "MakeADigitalDice"', async () => {
            return await this.makeADigitalDice();
        });
    }

}
export let makeADigitalDice = new MakeADigitalDice();