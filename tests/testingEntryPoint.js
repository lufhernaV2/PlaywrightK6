import { browser } from 'k6/experimental/browser';
import { LoginAndShop } from '../page-objects/loginAndShop.js';

export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 2,
      iterations: 2,
      startTime: "0s",
      options: {
        browser: {
          type: 'chromium'
        }
      }
    }
  }
};


export default async function() {
  const page = browser.newPage();
  const loginAndShop = new LoginAndShop(page);
  await loginAndShop.loginAndShop();
}
