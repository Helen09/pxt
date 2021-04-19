import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { codingCards, commonActions} from '../lib/css-value';
class SpriteBasedGames extends DomObject {

    async spriteBasedGames() {

        console.log('Start test spriteBasedGames()');

        await this.click(codingCards.spriteBasedGames,commonActions.showInstructions);

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