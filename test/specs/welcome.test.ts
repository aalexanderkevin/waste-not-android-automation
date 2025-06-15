// import { expect } from '@wdio/globals';
// import WelcomePage from '../pageobjects/welcome.page';
// import RegisterPage from '../pageobjects/register.page';

// describe('Welcome Screen UI Tests', () => {
//   beforeEach(async () => {
//     if ((driver as any).reset) {
//       await (driver as any).reset();
//     }
//   });

//   it('should display all key buttons correctly', async () => {
//     // Check if elements are visible and enabled
//     expect(await WelcomePage.registerButton.isDisplayed()).toBe(true);
//     expect(await WelcomePage.registerButton.isEnabled()).toBe(true);

//     expect(await WelcomePage.loginButton.isDisplayed()).toBe(true);
//     expect(await WelcomePage.loginButton.isEnabled()).toBe(true);

//     expect(await WelcomePage.guestStartButton.isDisplayed()).toBe(true);

//     expect(await WelcomePage.languageSelectorButton.isDisplayed()).toBe(true);
//     expect(await WelcomePage.languageSelectorButton.isEnabled()).toBe(true);
//   });

//   it('should verify button content-desc (accessibility ID)', async () => {
//     const attr = await WelcomePage.registerButton.getAttribute('content-desc');
//     expect(attr).toBe('新規会員登録');
//   });

//   it('should check button size & position', async () => {
//     const element = WelcomePage.registerButton;
//     const elementId = await element.elementId;
//     const rect = await driver.getElementRect(elementId);

//     console.log('Button size:', rect.width, 'x', rect.height);
//     console.log('Button position:', rect.x, rect.y);

//     expect(rect.width).toBeGreaterThan(100);
//     expect(rect.height).toBeGreaterThan(40);
//   });

//   it('should change language to English when tap language English', async () => {
//     await WelcomePage.tapLanguageSelector();
//     await WelcomePage.tapEnglishLanguageSelector();

//     await expect(WelcomePage.loginEnglishButton).toBeDisplayed();
//     await expect(WelcomePage.loginEnglishButton).toBeEnabled();

//     await WelcomePage.tapEnglishLanguageSelectorButon();
//     await WelcomePage.tapJapaneseLanguageSelector();
//     await expect(WelcomePage.loginButton).toBeDisplayed();
//     await expect(WelcomePage.loginButton).toBeEnabled();
//   });

//   it('should tap buttons and capture screenshot on fail', async () => {
//     try {
//       await WelcomePage.tapRegister();
//       const title = RegisterPage.title;

//       await expect(title).toBeDisplayed();
//     } catch (err) {
//       await driver.saveScreenshot(
//         `./_results_/Welcome-failure-${Date.now()}.png`
//       );
//       throw err;
//     }
//   });
// });
