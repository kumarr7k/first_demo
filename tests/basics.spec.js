const {test, expect} = require('@playwright/test')


test.only('first step', async ({browser, page})=>
{
       //const context=  await browser.newContext();
       // const page = await context.newPage();

       const username = page.locator('#username');
       const applybtn = page.locator('[name="signin"]');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await username.fill("rahulshetty");
        await page.locator('#password').fill("learning");
        await applybtn.click();
       console.log( await page.locator('[style*="block"]').textContent());
       await expect(page.locator('[style*="block"]')).toContainText("Incorrect");

       await username.fill("");
       await username.fill("rahulshettyacademy");
       await applybtn.click();

      //console.log(await page.locator('.card-title a').first().textContent());
       //console.log(await page.locator('.card-title a').nth(3).textContent());
       console.log(await page.locator('.card-title a').allTextContents());


});



test('second step', async ({browser})=>
    {
           const context=  await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://google.com");
           console.log (await page.title());
          await expect(page).toHaveTitle("Google");
            });