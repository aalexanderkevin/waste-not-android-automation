/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
	async waitAndClick(el: ChainablePromiseElement) {
		await el.waitForDisplayed({ timeout: 5000 });
		await el.click();
	}

	async pause(ms: number) {
		await driver.pause(ms);
	}
}
