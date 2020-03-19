import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { games, commonActions } = require('../lib/css-value');

class Salute extends DomObject {

    async salute() {

        console.log('Start test salute()');
        //fix error
        await driver.sleep(1000);
        
        await this.click(games.salute, commonActions.showInstructions);

        await this.switchToNewWindow();
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Salute!');
        console.debug(`The title of the current page is "${headerTitle}"`);

        await this.click(commonActions.playButton);

        await this.switchToIframe('.embed iframe');

        await this.click(commonActions.videoPlay);

        let videoTitle = await this.getText(commonActions.videoTitle);
        assert.equal(videoTitle, 'How to Play Salute!');
        console.debug(`The video title is "${videoTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the Salute!', async () => {
            return await this.salute();
        });
    }

}
export let salute = new Salute();