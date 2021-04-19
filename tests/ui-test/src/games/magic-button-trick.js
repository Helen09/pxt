import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { games, commonActions } from '../lib/css-value';

class MagicButtonTrick extends DomObject {

    async magicButtonTrick() {

        console.log('Start test magicButtonTrick()');

        await this.click(games.magicButtonTrick, commonActions.showInstructions);

        await this.switchToNewWindow();
         
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Magic Button Trick');
        console.debug(`The title of the current page is "${headerTitle}"`);

        await this.click(commonActions.playButton);

        await this.switchToIframe('.embed iframe');

        await this.click(commonActions.videoPlay);

        let videoTitle = await this.getText(commonActions.videoTitle);
        assert.equal(videoTitle, 'microbit magic button trick demo');
        console.debug(`The video title is "${videoTitle}"`); 

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the Magic Button Trick', async () => {
            return await this.magicButtonTrick();
        });
    }

}
export let magicButtonTrick = new MagicButtonTrick();