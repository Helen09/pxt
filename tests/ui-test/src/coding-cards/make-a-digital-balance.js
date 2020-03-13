import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class MakeADigitalBalance extends DomObject {

    async makeADigitalBalance() {

        await this.click(codingCards.makeADigitalBalance,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('makeADigitalBalance');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "MakeADigitalBalance"', async () => {
            return await this.makeADigitalBalance();
        });
    }

}
export let makeADigitalBalance = new MakeADigitalBalance();