import Miner from '../index';
import * as fileSystem from 'fs';

const screenshotFile = process.cwd()+"/test-screen.png";

afterAll(async () => {
    await fileSystem.promises.unlink(screenshotFile);
});

jest.setTimeout(500000);
test('Test Miner', async () => {
    let miner = new Miner();

    let result = await miner.scrape([
        {name: 'open', params: { value: "https://ibmachine.com/" }},
        {name: 'insert', params: { value: "test", selector: "body > div.home-banner > div > form > div > input" }},
        {name: 'click', params: { selector: "body > div.home-banner > div > form > button" }},
        {name: 'remember', params: { selector: "body > div.content > div.content-width > div.linear-board-block.board-by-type.active > div > div:nth-child(2) > div.post-back > div.post-block.name > div.board-company-name > a" }},
        {name: 'select', params: { selector: "body > div.content > div.content-width > form > div:nth-child(1) > div.keywords-block > div:nth-child(2) > div.double.right > div.double.left > div > select", value: "1" }},
        {name: 'click', params: { selector: "body > div.content > div.content-width > form > div:nth-child(1) > button" }},
        {name: 'screenshot', params: { value: screenshotFile, selector: "body" }},
        {name: 'remember', params: { selector: "body > div.content > div.content-width > div.linear-board-block.board-by-type.active > div > div:nth-child(2) > div.post-back > div.post-block.name > div.board-company-name > a" }},
    ]);

    expect(result[3].result.length).not.toEqual(0);
    expect(result[7].result.length).not.toEqual(0);
});

test('Test Stealth', async () => {
    let securityUrlsRequestsRegex = /securepubads/i;
    let miner = new Miner();
    miner.setRequestsToPrevent(securityUrlsRequestsRegex);

    let result = await miner.scrape([
        {name: 'open', params: { value: "https://411.com/" }},
        {name: 'delay', params: { value: "2000"}},
        {name: 'screenshot', params: { value: screenshotFile, selector: "body" }},
    ]);
    
    expect(result[0].result.length).not.toEqual(0);
});

test('Test Condition', async () => {
    let miner = new Miner();

    let result = await miner.scrape([
        {name: 'open', params: { value: "https://ibmachine.com/" }},
        {name: 'condition', params: { selector: "body > div.home-banner > div > form > div > input .fake", value: '9' }},
        {name: 'insert', params: { value: "test", selector: "body > div.home-banner > div > form > div > input" }},
        {name: 'condition', params: { selector: "body > div.home-banner > div > form > button", value: '9' }},
        {name: 'click', params: { selector: "body > div.home-banner > div > form > button" }},
        {name: 'remember', params: { selector: "body > div.content > div.content-width > div.linear-board-block.board-by-type.active > div > div:nth-child(2) > div.post-back > div.post-block.name > div.board-company-name > a" }},
        {name: 'select', params: { selector: "body > div.content > div.content-width > form > div:nth-child(1) > div.keywords-block > div:nth-child(2) > div.double.right > div.double.left > div > select", value: "1" }},
        {name: 'click', params: { selector: "body > div.content > div.content-width > form > div:nth-child(1) > button" }},
        {name: 'screenshot', params: { value: screenshotFile, selector: "body" }},
    ]);

    console.log(result)
});
