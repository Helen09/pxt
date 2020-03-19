import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class SparkFunInventorsKit extends DomObject {

    async sparkFunInventorsKit() {

        console.log('Start test sparkFunInventorsKit()');

        await this.click(courses.sparkFunInventorsKit, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.maintitleOfSparkFun);
        assert.equal(headerTitle, "SparkFun Inventor's Kit for micro:bit Experiment Guide");
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "SparkFun Inventors Kit"', async () => {
            return await this.sparkFunInventorsKit();
        });
    }

}
export let sparkFunInventorsKit = new SparkFunInventorsKit();