import Page from './page';

class Welcome extends Page {
	get loginButton() {
		return $('~ログイン');
	}

	get loginEnglishButton() {
		return $('~Login');
	}

	get registerButton() {
		return $('~新規会員登録');
	}

	get guestStartButton() {
		return $('~ゲストとして始める');
	}

	get languageSelectorButton() {
		return $('~日本語');
	}

	get languageEnglishSelectorButton() {
		return $('~英語');
	}

	get EnglishSelectorButton() {
		return $('~英語・English');
	}

	get JapaneseSelectorButton() {
		return $('~日本語・Japanese');
	}

	async tapRegister() {
		await this.waitAndClick(this.registerButton);
	}

	async tapLogin() {
		await this.waitAndClick(this.loginButton);
	}

	async tapGuestStart() {
		await this.waitAndClick(this.guestStartButton);
	}

	async tapLanguageSelector() {
		await this.waitAndClick(this.languageSelectorButton);
	}

	async tapEnglishLanguageSelectorButon() {
		await this.waitAndClick(this.languageEnglishSelectorButton);
	}

	async tapEnglishLanguageSelector() {
		await this.waitAndClick(this.EnglishSelectorButton);
	}

	async tapJapaneseLanguageSelector() {
		await this.waitAndClick(this.JapaneseSelectorButton);
	}
}

export default new Welcome();
