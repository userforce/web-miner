import Miner from '../index';
import * as fileSystem from 'fs';
import * as path from 'path';

jest.setTimeout(500000);
test('Test Mainer Scraper', async () => {
    let miner = new Miner();
    let screenshotFile = process.cwd()+"/test-screen.png";

    let results = await miner.scrape([
        {name: 'open', params: { value: "https://example.com/" }},
        {name: 'remember', params: { selector: "body > div > p:nth-child(3) > a" }},
        {name: 'click', params: { selector: "body > div > p:nth-child(3) > a" }},
        {name: 'remember', params: { selector: "#sidebar_left > div > h2" }},
        {name: 'open', params: { value: "https://ibmachine.com/" }},
        {name: 'screenshot', params: { value: "test-screen", selector: "body > div.content > div.content-width > div.introduction" }},
    ]);

    await fileSystem.promises.unlink(screenshotFile);

    console.log(results);
});