import Miner from '../index';
test('Test Main', async () => {
    let miner = new Miner();
    let results = await miner.scrape([




        {name: 'open', params: { value: "https://example.com/" }},
        {name: 'remember', params: { selector: "body > div > p:nth-child(3) > a" }},
        {name: 'click', params: { selector: "body > div > p:nth-child(3) > a" }},
        {name: 'remember', params: { selector: "body > div > p:nth-child(3) > a" }},






    ]);
    console.log(results);
});