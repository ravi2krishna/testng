import { Ng2AppPage } from './app.po';

describe('ng2-app App', () => {
  let page: Ng2AppPage;

  beforeEach(() => {
    page = new Ng2AppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
