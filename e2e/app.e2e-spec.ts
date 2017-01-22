import { ProjectNgPage } from './app.po';

describe('project-ng App', function() {
  let page: ProjectNgPage;

  beforeEach(() => {
    page = new ProjectNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
