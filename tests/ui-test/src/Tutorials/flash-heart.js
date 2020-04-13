import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { tutorials, commonActions } = require('../lib/css-value');

class FlashingHeart extends DomObject {

    async flashingHeart() {
        console.log('Start test flashingHeart()');

        await this.click(tutorials.flashingHeart, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Flashing Heart');
        console.debug(`The title of the current window is "${headerTitle}"`);
        
        await this.click(commonActions.okButton);

        await this.click(tutorials.tutorialHint);

        let hiddenHintValue = await this.getAttribute(tutorials.hiddenHint, 'class');
        assert.equal(hiddenHintValue, 'tutorialhint hidden');

        await this.click(tutorials.tutorialHint);
        let showHintValue = await this.getAttribute(tutorials.showHint, 'class');
        assert.equal(showHintValue, 'tutorialhint ');

        for (let i = 1; i < 4; i++) {

            await this.click(commonActions.goNextButton);
            
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

            let selectLabel = await this.getAttribute(commonActions.selectedLabel, 'aria-label');
            console.log(selectLabel);

            if(i==3){
                await this.click(tutorials.basicBlocks);

                let target = await this.getRect(tutorials.foreverBlock);

                let start = await this.getRect(tutorials.showLeds);

                let xOffSet = Math.ceil(target.x - start.x);
                let yOffSet = Math.ceil(target.y - start.y + target.height / 2);
                await this.dragAndDropByCoordinate(tutorials.showLeds, xOffSet, yOffSet);
            }
        }

        await this.click(commonActions.finishButton);
       
        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Flashing Heart');
        console.debug(`The current project name is "${projectName}"`);
       
        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the flashing heart', async () => {
            return await this.flashingHeart();
        });
    }

}
export let flashingHeart = new FlashingHeart();