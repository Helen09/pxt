import { DomObject } from '../lib/dom-object';
import assert from 'assert';
let { helpOfProject, commonActions } = require('../lib/css-value');

class GetHelpList extends DomObject {

    async helpList() {

        console.log('Start test helpList()');

        await this.click(helpOfProject.helpButton, helpOfProject.support);

        await this.switchToNewWindow();

        let titleOfSupport = await this.getText(helpOfProject.headerTitleOfSupport);
        assert.equal(titleOfSupport, 'How can we help you today?');
        console.log(`The title of support page is "${titleOfSupport}"`);

        await this.closeCurrentWindow();

        await this.click(helpOfProject.helpButton, helpOfProject.reference);

        await this.switchToIframe(commonActions.idOfIframe);

        let referenceTitle = await this.getText(commonActions.titleOfNewOpenedWindow);

        assert.equal(referenceTitle, 'Reference');

        console.debug(`The side docs toggle text is: ${referenceTitle}`);

        await this.switchToDefaultFrame();

        await this.click(helpOfProject.openLinkButton);

        await this.switchToNewWindow();

        let newPageTitle = await this.getText(commonActions.titleOfNewOpenedWindow);

        assert.equal(newPageTitle, 'Reference');

        console.debug(`The title of new page is: ${newPageTitle}`);

        await this.closeCurrentWindow();

        await this.click(helpOfProject.helpButton, helpOfProject.hardware);

        await this.switchToIframe(commonActions.idOfIframe);

        let deviceTitle = await this.getText(commonActions.titleOfNewOpenedWindow);

        assert.equal(deviceTitle, 'Device');

        console.debug(`The side docs toggle text is: ${deviceTitle}`);

        await this.switchToDefaultFrame();

        await this.click(helpOfProject.openLinkButton);

        await this.switchToNewWindow();

        let pageTitle = await this.getText(commonActions.titleOfNewOpenedWindow);

        assert.equal(pageTitle, 'Device');

        console.debug(`The title of new page is: ${newPageTitle}`);

        await this.closeCurrentWindow();

        await this.click(helpOfProject.helpButton, helpOfProject.buy);

        await this.switchToNewWindow();

        let headerOfBuyPage = await this.getText(helpOfProject.headerTitleOfBuy);

        assert.equal(headerOfBuyPage, 'Buy the micro:bit');

        console.debug(`The header of buy page is: ${headerOfBuyPage}`);

        await this.closeCurrentWindow();

        await this.click(helpOfProject.helpButton, helpOfProject.blocks);

        await this.switchToIframe(commonActions.idOfIframe);

        let blocksTitle = await this.getText(commonActions.titleOfNewOpenedWindow);

        assert.equal(blocksTitle, 'Blocks language');

        console.debug(`The side docs toggle text is: ${blocksTitle}`);

        // await this.click(helpOfProject.goBackButton);

        // let goBackResult = await this.getText(commonActions.titleOfNewOpenedWindow);

        // assert.notEqual(goBackResult, 'Blocks language');

        await this.switchToDefaultFrame();

        await this.click(helpOfProject.collapseButton);

    }

    test() {
        it('Start test GetHelpList()', async () => {
            return await this.helpList();
        });
    }
}

export let getHelpList = new GetHelpList();
