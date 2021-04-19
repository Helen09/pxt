import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { dragBlocks, commonActions } from '../lib/css-value';

class BlocklyToolBox extends DomObject {


    async dragBlocks() {

        console.log('Start test dragBlocks()');

        await this.click(dragBlocks.basicItem);

        let target = await this.getRect(dragBlocks.foreverBlock);

        let start = await this.getRect(dragBlocks.showStringBlock);

        let xOffSet = Math.ceil(target.x - start.x);
        let yOffSet = Math.ceil(target.y - start.y + target.height / 2);
        await this.dragAndDropByCoordinate(dragBlocks.showStringBlock, xOffSet, yOffSet);

        await this.click(dragBlocks.basicItem);

        await this.dragAndDropByElement(dragBlocks.showStringBlock, dragBlocks.trashArea);

        await this.contextClick(dragBlocks.insertBlock1);
            
        await this.click(dragBlocks.duplicateOptionOfInsertBlock);

        let classValueOfDuplication = await this.getAttribute(dragBlocks.duplicateBlock, 'class');

        assert.equal(classValueOfDuplication, 'blocklyDraggable blocklySelected blocklyDisabled');

        console.log(`This is the class value of duplication:${classValueOfDuplication}`);

        await this.contextClick(dragBlocks.duplicateBlock);

        await this.click(dragBlocks.deleteDuplicateBlock);
        
        await this.contextClick(dragBlocks.insertBlock2);

        await this.click(dragBlocks.addComment);

        await this.sendKeys(dragBlocks.textBox, 'fortest');

        await this.click(dragBlocks.commentDeleteButton);

        await this.contextClick(dragBlocks.insertBlock2);
        
        await this.click(dragBlocks.helpOptionOfInsertBlock);

        await this.switchToIframe(commonActions.idOfIframe);

        let sideDocsTitle = await this.getText(commonActions.titleOfNewOpenedWindow);

        await this.switchToDefaultFrame();

        assert.equal(sideDocsTitle, 'Show String');
        
        console.info(`The side docs title is ${sideDocsTitle}`);

        await this.click(dragBlocks.collapseButton);
        // await this.acceptAlert();
           
        await this.click(dragBlocks.fullScreenButton);

        await this.catchScreenShot('LaunchInFullScreen');

        await this.click(dragBlocks.exitFullScreen, dragBlocks.microbitLogo);
            
    }
    test() {
        it('Drag and drop blocks', async () => {
            return await this.dragBlocks();
        });

    }
}

export let blocklyToolBox = new BlocklyToolBox();