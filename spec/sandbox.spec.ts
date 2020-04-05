import { assert } from "chai";
import { before } from "mocha";
import { browser, by, element } from "protractor";

const url: string = "https://e2e-boilerplate.github.io/sandbox/";

describe("Sandbox", () => {
  before(() => {
    browser.get(url);
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    assert.strictEqual(title, "Sandbox");

    const header = await element(by.css("h1")).getText();
    assert.strictEqual(header, "Sandbox");
  });
}).timeout(5000);
