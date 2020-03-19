import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class SparkFunVideos extends DomObject {

    async sparkFunVideos() {

        console.log('Start test sparkFunVideos()');

        await this.click(courses.sparkFunVideos, commonActions.showInstructions);

        await this.switchToNewWindow();

        await this.catchScreenShot('sparkfun');

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "SparkFun Videos"', async () => {
            return await this.sparkFunVideos();
        });
    }

}
export let sparkFunVideos = new SparkFunVideos();