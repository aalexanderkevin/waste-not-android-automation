import Page from './page';
import WelcomePage from './welcome.page';

class RegisterPage extends Page {
	get title() {
		return $('~新規会員登録');
	}

	get emailInput() {
		return $('//android.widget.EditText[contains(@hint, "メールアドレス")]');
	}

	get nextButton() {
		return $('~次へ'); // Next
	}

	async getEmailHint(): Promise<string> {
		return await this.emailInput.getAttribute('hint');
	}

	async enterEmail(email: string): Promise<void> {
		const emailField = this.emailInput;
		await this.waitAndClick(emailField);
		await driver
			.action('pointer')
			.move({ duration: 0, x: 637, y: 509 })
			.down({ button: 0 })
			.pause(50)
			.up({ button: 0 })
			.perform();

		await emailField.clearValue();
		await emailField.addValue(email);
	}

	async tapNext(): Promise<void> {
		await this.waitAndClick(this.nextButton);
	}

	async tapRegisterFromWelcomeScreen() {
		await WelcomePage.tapRegister();
	}
}

export default new RegisterPage();
