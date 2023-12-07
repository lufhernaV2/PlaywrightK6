import { browser } from 'k6/experimental/browser';
import { Homepage } from '../page-objects/homepage.js';


export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 100,
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
 
}
