import Page from './page';

class RegisterFormPage extends Page {
	get title() {
		return $('~メール認証済\n会員IDの有無\n会員情報の登録\n登録完了');
	}

	get membershipIdTitle() {
		return $('//android.view.View[@content-desc="会員IDをお持ちですか？\nお持ちの会員IDがあるかどうかご確認ください。"]');
	}

	get memberInformationTitle() {
		return $('//android.view.View[@content-desc="クーポンやニュースなどのお得な情報を受け取る"]');
	}

	get refererTitle() {
		return $('~紹介者の情報'); // referer information
	}

	get confirmationScreenTitle() {
		return $('~会員情報の登録'); // Registration of member information
	}
	
	get dontHaveMembershipRadioButton() {
		return $('//android.widget.RadioButton[@content-desc="持っていない"]');
	}

	get otpInput() {
		return $('//android.widget.EditText[@class="android.widget.EditText" and @focusable="true" and @clickable="true"]');
	}
	
	get receiveCouponNewsEmail() {
		return $(`~クーポンやニュースなどのお得な情報を受け取る`);
	}

	get passwordInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="パスワードを入力"]`);
	}

	get passwordConfirmationInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="パスワードを入力"]`);
	}

	get surnameInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="例）田中"]`);
	}

	get firstNameInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="例）太郎"]`);
	}

	get surnameJapaneseInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="例）タナカ"]`);
	}

	get firstNameJapaneseInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="例）タロウ"]`);
	}

	get phoneNumberInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="例）08012345678"]`);
	}

	get genderMaleOption() {
		return $('accessibility id:その他'); // male
	}
	get genderFemaleOption() {
		return $('accessibility id:男性'); // female
	}
	get genderOtherOption() {
		return $('accessibility id:その他'); // other
	}
	get genderNoAnswerOption() {
		return $('accessibility id:無回答'); // no answer
	}

	get yearDateofBirth() {
		return $("//android.widget.Button[@content-desc='2000']")
	}
	get monthDatefBirth() {
		return $("(//android.widget.Button[@content-desc='01'])[1]");
	}
	get dayDatefBirth() {
		return driver.$('accessibility id:01');
		// return $("(//android.widget.Button[@content-desc='01']");
	}

	get postalCodeInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText" and @hint="例）1040061"]`);
	}

	get noneButton() {
		return $('//android.view.View[@content-desc="無"]'); // None
	}

	get nextButton() {
		return $('~次へ'); // Next
	}
	
	get invaliOtp() {
		return $('//android.view.View[contains(@content-desc, "認証コードが正しくありません")]'); // invalid authentication code
	}
	
	get confirmationScreenButton() {
		return $('//android.widget.Button[@content-desc="確認画面へ"]'); // Next
	}

	get agreeButton() {
		return $('//android.widget.Button[@content-desc="同意して会員登録する"]'); // Agree
	}
	
	get yesReferalButton() {
        return driver.$('accessibility id:有'); // Yes
    }

    get referralCodeInput() {
		return $(`//android.widget.EditText[@class="android.widget.EditText"`);
    }

	get errorReferralCode8Aplhanumeric() {
        return driver.$(
            '//*[contains(@label, "半角英数字8桁でご入力してください")]'
        ); // Please enter 8 alphanumeric characters
    }
    get errorReferralCodeIncorrect() {
		return driver.$(
            '//*[contains(@label, "紹介コードが正しくありません。再度ご確認ください。")]'
        );// The referral code is incorrect. Please check again.
    }

	async enterOtp(otp: string): Promise<void> {
		const otpInput = this.otpInput;
		await this.waitAndClick(otpInput);

		await otpInput.clearValue();
		await otpInput.addValue(otp);
	}

	async tapNext(): Promise<void> {
		await this.waitAndClick(this.nextButton);
	}

	async tapNone(): Promise<void> {
		await this.waitAndClick(this.noneButton);
	}
	
	async tapConfirmationScreenButton(): Promise<void> {
		await this.waitAndClick(this.confirmationScreenButton);
	}

	async tapAgreeButton(): Promise<void> {
		await this.waitAndClick(this.agreeButton);
	}

	async enterPassword(password: string): Promise<void> {
		const passwordInput = this.passwordInput;
		await this.waitAndClick(passwordInput);

		await passwordInput.clearValue();
		await passwordInput.addValue(password);

    	await driver.hideKeyboard();

		const passwordConfirmationInput = this.passwordConfirmationInput;
		await this.waitAndClick(passwordConfirmationInput);

		await passwordConfirmationInput.clearValue();
		await passwordConfirmationInput.addValue(password);
		await driver.hideKeyboard();
	}

	async enterPhoneNumber(phoneNumber: string): Promise<void> {
		await driver.action('pointer')
			.move({ duration: 0, x: 549, y: 2304 })
			.down({ button: 0 })
			.move({ duration: 1000, x: 509, y: 756 })
			.up({ button: 0 })
			.perform();
	  
		const phoneNumberInput = this.phoneNumberInput;
		await this.waitAndClick(phoneNumberInput);

		await phoneNumberInput.clearValue();
		await phoneNumberInput.addValue(phoneNumber);
	}

	async tapDontHaveMembership(): Promise<void> {
		await this.waitAndClick(this.dontHaveMembershipRadioButton);
	}

	async tapReceiveCouponNewsEmail(): Promise<void> {
		await this.waitAndClick(this.receiveCouponNewsEmail);
	}

	async tapGenderMale(): Promise<void> {
		await this.waitAndClick(this.genderMaleOption);
	}

	async tapGenderFemale(): Promise<void> {
		await this.waitAndClick(this.genderFemaleOption);
	}

	async tapGenderOther(): Promise<void> {
		await this.waitAndClick(this.genderOtherOption);
	}

	async tapGenderNoAnswer(): Promise<void> {
		await this.waitAndClick(this.genderNoAnswerOption);
	}

	async tapYear(year: number): Promise<void> {
		await driver.action('pointer')
			.move({ duration: 0, x: 573, y: 1728 })
			.down({ button: 0 })
			.move({ duration: 1000, x: 576, y: 1122 })
			.up({ button: 0 })
			.perform();

		await this.waitAndClick(this.yearDateofBirth);

		const yearOption = $(`//android.widget.Button[@content-desc='${year}']`);
		await yearOption.click();
	}

	async tapMonth(month: number): Promise<void> {
		await this.waitAndClick(this.monthDatefBirth);

		const monthOption = $(`//android.widget.Button[@content-desc='${month}']`);
		await monthOption.click();
	}

	async tapDay(day: number): Promise<void> {
		await driver.action('pointer')
			.move({ duration: 0, x: 753, y: 1415 })
			.down({ button: 0 })
			.move({ duration: 1000, x: 756, y: 1275 })
			.up({ button: 0 })
			.perform();

		await this.waitAndClick(this.dayDatefBirth);

		const dayOption = $(`//android.widget.Button[@content-desc='${day}']`);
		await dayOption.click();
	}

	async enterName(firstName: string, surname: string, firstNameJapanese: string, surnameJapanese: string): Promise<void> {
		await driver.action('pointer')
			.move({ duration: 0, x: 573, y: 1728 })
			.down({ button: 0 })
			.move({ duration: 1000, x: 576, y: 1122 })
			.up({ button: 0 })
			.perform();
		
		await this.firstNameInput.waitForDisplayed({ timeout: 5000 });
		const firstNameInput = this.firstNameInput;
		await firstNameInput.click();
		await firstNameInput.clearValue();
		await firstNameInput.addValue(firstName);

		const surnameInput = this.surnameInput;
		await surnameInput.click();
		await surnameInput.clearValue();
		await surnameInput.addValue(surname);

		const firstNameJapaneseInput = this.firstNameJapaneseInput;
		await firstNameJapaneseInput.click();
		await firstNameJapaneseInput.clearValue();
		await firstNameJapaneseInput.addValue(firstNameJapanese);

		const surnameJapaneseInput = this.surnameJapaneseInput;
		await surnameJapaneseInput.click();
		await surnameJapaneseInput.clearValue();
		await surnameJapaneseInput.addValue(surnameJapanese);
	}

	async enterPostalCode(postalCode: number): Promise<void> {
		await this.postalCodeInput.waitForDisplayed({ timeout: 5000 });
		const postalCodeInput = this.postalCodeInput;
		await postalCodeInput.click();
		await postalCodeInput.clearValue();
		await postalCodeInput.addValue(postalCode);
		await driver.action('pointer')
		.move({ duration: 0, x: 753, y: 1415 })
		.down({ button: 0 })
		.move({ duration: 1000, x: 756, y: 1275 })
		.up({ button: 0 })
		.perform();	  
	}
	
    async tapYesReferral(): Promise<void> {
        await this.waitAndClick(this.yesReferalButton);
    }


    async enterReferralCode(referralCode: string): Promise<void> {
        await this.referralCodeInput.waitForDisplayed({ timeout: 5000 });
        const referralCodeInput = this.referralCodeInput;
        await referralCodeInput.click();
        await referralCodeInput.clearValue();
        await referralCodeInput.addValue(referralCode);
        await driver.hideKeyboard();
    }
	
}

export default new RegisterFormPage();
