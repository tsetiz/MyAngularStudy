import { Assignment3Page } from './app.po';

describe('assignment-3 App', function() {
  let page: Assignment3Page;

  beforeEach(() => {
    page = new Assignment3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
