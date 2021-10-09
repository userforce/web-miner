import Miner from '../index';
import * as fileSystem from 'fs';
import * as path from 'path';

jest.setTimeout(500000);
test('Test Mainer Scraper', async () => {
    let miner = new Miner();
    let screenshotFile = process.cwd()+"/test-screen.png";

    await miner.scrape([
        {name: 'open', params: { value: "https://ibmachine.com/" }},
        {name: 'insert', params: { value: "test", selector: "body > div.home-banner > div > form > div > input" }},
        {name: 'click', params: { selector: "body > div.home-banner > div > form > button" }},
        {name: 'screenshot', params: { value: screenshotFile, selector: "body" }},
        // {name: 'remember', params: { selector: "body > div.content > div.content-width > div.linear-board-block.board-by-type.active > div > div:nth-child(2) > div.post-back > div.post-block.name > div.board-company-name > a" }}
    ]);

    // await fileSystem.promises.unlink(screenshotFile);
});