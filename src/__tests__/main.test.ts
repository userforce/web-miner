import Miner from '../index';
import * as fileSystem from 'fs';
import * as path from 'path';

jest.setTimeout(500000);
test('Test Mainer Scraper', async () => {
    let miner = new Miner();
    let screenshotFile = process.cwd()+"/test-screen.png";

    let results = await miner.scrape([
        {name: 'open', params: { value: "https://ibmachine.com/" }},
        {name: 'insert', params: { value: "test", selector: "body > div.home-banner > div > form > div > input" }},
        {name: 'click', params: { selector: "body > div.home-banner > div > form > button" }},
        {name: 'screenshot', params: { value: "test-screen" }},
        // {name: 'remember', params: { selector: "body > div.content > div.content-width > table > tbody > tr > td:nth-child(1) > table:nth-child(2) > tbody > tr:nth-child(1) > td.post-details-data > b" }}
    ]);

    // await fileSystem.promises.unlink(screenshotFile);

    console.log(results);
});