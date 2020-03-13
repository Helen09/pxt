import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards} = require('../lib/css-value');

class SpriteBasedGames extends DomObject {

    async spriteBasedGames() {

        await this.click(codingCards.spriteBasedGames,codingCards.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('spriteBasedGames');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "SpriteBasedGames"', async () => {
            return await this.spriteBasedGames();
        });
    }

}
export let spriteBasedGames = new SpriteBasedGames();