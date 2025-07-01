import { expect } from '@wdio/globals';
import registerPage from '../pageobjects/register.page';
import registerformPage from '../pageobjects/registerform.page';
import { getOtp } from '../../helper/otp';

const invaliEmail = "invaliemail";
const validEmail = "testerandroid2123@mailnesia.com";
const invalidReferralCode1 = '213';
const invalidReferralCode2 = '12345678';

describe('Register Screen UI Tests', () => {
	beforeEach(async () => {
		if ((driver as any).reset) {
			await (driver as any).reset();
		}
	});

	it('should display Page Register', async () => {
		await registerPage.tapRegisterFromWelcomeScreen();
		expect(await registerPage.title.isDisplayed()).toBe(true);
	});

	it('should display Email Input', async () => {
		expect(await registerPage.title.isDisplayed()).toBe(true);
		expect(await registerPage.emailInput.isDisplayed()).toBe(true);
    });
	
	it('should display Next Button', async () => {
		expect(await registerPage.title.isDisplayed()).toBe(true);
		expect(await registerPage.nextButton.isDisplayed()).toBe(true);
    });

  	it('should show error hint when blank email', async () => {
		expect(await registerPage.emailInput.isDisplayed()).toBe(true);
		await registerPage.tapNext();

		await browser.waitUntil(async () => {
			const hint = await registerPage.getEmailHint();
				return hint.includes('メールアドレスを入力してください');
			}, {
				timeout: 5000,
				timeoutMsg: 'Expected email error hint was not displayed'
		});

		const hint = await registerPage.getEmailHint();
		expect(hint).toContain('メールアドレスを入力してください');
	});

  	it('should show error hint when invalid email entered', async () => {
		expect(await registerPage.emailInput.isDisplayed()).toBe(true);
		await registerPage.enterEmail(invaliEmail);
		await registerPage.tapNext();

		await browser.waitUntil(async () => {
			const hint = await registerPage.getEmailHint();
				return hint.includes('メールアドレスの形式が正しくありません');
			}, {
				timeout: 5000,
				timeoutMsg: 'Expected email error hint was not displayed'
		});

		const hint = await registerPage.getEmailHint();
		expect(hint).toContain('メールアドレスの形式が正しくありません');
	});

	it('should redirect to registration screen', async () => {
		await registerPage.enterEmail(validEmail);
		await registerPage.tapNext();

		await registerformPage.title.waitForDisplayed({ timeout: 5000 });
		expect(await registerformPage.title.isDisplayed()).toBe(true);
	});

	it('should return error when invalid otp entered', async () => {
		await registerformPage.enterOtp("1234");
		await registerformPage.tapNext();

		await registerformPage.invaliOtp.waitForDisplayed({ timeout: 5000 });
		expect(await registerformPage.invaliOtp.isDisplayed()).toBe(true);
	});

	it('should move to membership id when otp entered', async () => {
		const otpResponse = await getOtp({ email: validEmail, isAdmin: false });

		if (otpResponse) {
			await registerformPage.enterOtp(otpResponse);
		} else {
			throw new Error('OTP retrieval failed or no OTP returned');
		}

		await registerformPage.tapNext();
		await registerformPage.membershipIdTitle.waitForDisplayed({ timeout: 5000 });;
		expect(await registerformPage.membershipIdTitle.isDisplayed()).toBe(true);
	});

	it('should move to membership information when click dont have membership', async () => {
		expect(await registerformPage.membershipIdTitle.isDisplayed()).toBe(true);
		await registerformPage.tapDontHaveMembership();
		await registerformPage.tapNext();

		await registerformPage.memberInformationTitle.waitForDisplayed({ timeout: 5000 });;
		expect(await registerformPage.memberInformationTitle.isDisplayed()).toBe(true);
	});

	it('should fill all necessary information in membership information', async () => {
		expect(await registerformPage.receiveCouponNewsEmail.isDisplayed()).toBe(true);
		await registerformPage.tapReceiveCouponNewsEmail();

		await registerformPage.enterPassword("Testing123-!");
		await registerformPage.enterName('tester', 'automation', 'テスター', 'テスター');
		await registerformPage.tapYear(2010);
		await registerformPage.tapMonth(6);
		await registerformPage.tapDay(6);
		await registerformPage.enterPhoneNumber("0801234543");

		await registerformPage.tapGenderMale();
		await registerformPage.enterPostalCode(1040061);
	});

	it('should move to referer screen after click button next', async () => {
		await registerformPage.tapNext();
		expect(await registerformPage.noneButton.isDisplayed()).toBe(true);
	});

    it('should check to referral code validation', async () => {
        await registerformPage.tapYesReferral();
        await registerformPage.enterReferralCode(invalidReferralCode1);

        await registerformPage.tapConfirmationScreenButton();
        await registerformPage.errorReferralCode8Aplhanumeric.waitForDisplayed({ timeout: 5000 });
        expect(await registerformPage.errorReferralCode8Aplhanumeric.isDisplayed()).toBe(true);

        await registerformPage.enterReferralCode(invalidReferralCode2);
        await registerformPage.tapConfirmationScreenButton();
        await registerformPage.errorReferralCodeIncorrect.waitForDisplayed({ timeout: 5000 });
        expect(await registerformPage.errorReferralCodeIncorrect.isDisplayed()).toBe(true);

        expect(await registerformPage.noneButton.isDisplayed()).toBe(true);
    });

	it('should tap none button', async () => {
		await registerformPage.tapNone();
	});

	it('should tap goto confirmation screen button', async () => {
		await registerformPage.tapConfirmationScreenButton();

		// await driver
		// 	.action('pointer')
		// 	.move({ duration: 0, x: 593, y: 2281 })
		// 	.down({ button: 0 })
		// 	.move({ duration: 1000, x: 576, y: 1032 })
		// 	.up({ button: 0 })
		// 	.perform();
		// await driver
		// 	.action('pointer')
		// 	.move({ duration: 0, x: 593, y: 2281 })
		// 	.down({ button: 0 })
		// 	.move({ duration: 1000, x: 576, y: 1032 })
		// 	.up({ button: 0 })
		// 	.perform();
		// await driver
		// 	.action('pointer')
		// 	.move({ duration: 0, x: 593, y: 2281 })
		// 	.down({ button: 0 })
		// 	.move({ duration: 1000, x: 576, y: 1032 })
		// 	.up({ button: 0 })
		// 	.perform();
		
		// expect(await registerformPage.agreeButton.isDisplayed()).toBe(true);
		// await registerformPage.agreeButton.waitForDisplayed({ timeout: 5000 });
		// await registerformPage.tapAgreeButton();
	});
});
