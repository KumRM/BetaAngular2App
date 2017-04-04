import { MyRegisPage } from './app.po';

describe('my-regis App', () => {
  let page: MyRegisPage;

  beforeEach(() => {
    page = new MyRegisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
