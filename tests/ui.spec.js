const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');


test('ui basics step', async ({browser, page})=>
{
       //const context=  await browser.newContext();
       // const page = await context.newPage();

       const username = page.locator('#username');
       const applybtn = page.locator('[name="signin"]');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await username.fill("rahulshetty");
        await page.locator('#password').fill("learning");
        const dropdown = await page.locator('select.form-control');
        dropdown.selectOption("teach");
        await page.locator('.radiotextsty').last().click();
        await page.locator('#okayBtn').click();
        //await applybtn.click();
        await expect(page.locator('.radiotextsty').last()).toBeChecked();

        await page.locator('#terms').click();
        await expect(page.locator('.radiotextsty').last()).toBeChecked();
        await page.locator('#terms').uncheck();
         expect( await page.locator('#terms').isChecked()).toBeFalsy();

});

test.only('child windows  step', async ({browser})=>
    {
           const context=  await browser.newContext();
           const page = await context.newPage();
    
           //const username = page.locator('#username');
           //const applybtn = page.locator('[name="signin"]');
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            const docLink = page.locator('[href *=documents-request]');

           const [newPage] = await Promise.all([
              context.waitForEvent('page'),
              docLink.click(),
            ])


           const text = await newPage.locator('.red').textContent();
          const arr1= text.split("@");
          const email1= arr1[1].split(" ")
           console.log(email1[0])

    });