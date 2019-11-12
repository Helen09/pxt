import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { tutorials } = require('../lib/css-value');

class FireFlies extends DomObject {

    async fireFlies() {

        await this.click(tutorials.fireFlies, tutorials.closeButton,
            tutorials.fireFlies, tutorials.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(tutorials.titleOfFireflies);
        assert.equal(headerTitle, 'Fireflies');
        console.debug(`The title of the current page is "${headerTitle}"`);

        await this.click(tutorials.playButton);

        await this.switchToIframe('.embed iframe');

        await this.click(tutorials.videoPlay);

        let videoTitle = await this.getText(tutorials.videoTitle);
        assert.equal(videoTitle, 'Synchronizing Fireflies');
        console.debug(`The video title is "${videoTitle}"`); 
    
        await this.closeCurrentWindow();

        await this.click(tutorials.closeButton);

    }

    test() {
        it('Start learning the Fireflies', async () => {
            return await this.fireFlies();
        });
    }

}
export let fireFlies = new FireFlies();