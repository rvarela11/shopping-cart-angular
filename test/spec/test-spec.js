describe('home page', function() {

  var searchInput = element(by.model('movieTitle')),
    searchButton = element.all(by.tagName('button')).get(0);


  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should read "Angular OMDb API Search"', function() {
    expect(element.all(by.tagName('h2')).get(0).getText()).toBe(
      'Angular OMDb API Search')
  });

  it('Should show the input box on page load', function() {
    expect(searchInput.isPresent()).toBe(true);
  });

  it('Should show a submit button', function() {
    expect(searchButton.isPresent()).toBe(true);
  });

  it('should give results', function() {
    searchInput.sendKeys(
      'Rocky');
    searchButton.click();
    expect(element.all(by.repeater('movie in results')).count()).toBe(
      10);
  });

  it('should give results', function() {
    searchInput.sendKeys(
      'Rocky');
    searchButton.click();
    element.all(by.repeater('movie in results').row(0).column(
        'movie.Title'))
      .click();
    expect(browser.getCurrentUrl()).toContain(
      'http://localhost:8000/#/details/tt0075148');
  });

});

describe('details page', function() {

  var searchInput = element(by.model('movieTitle')),
    searchButton = element.all(by.tagName('button')).get(0);

  beforeEach(function() {
    browser.get('http://localhost:8000/#/details/tt0075148');
  });

  it('should read "Angular OMDb API Search"', function() {
    expect(element.all(by.tagName('h2')).get(0).getText()).toBe(
      'Angular OMDb API Search')
  });

  it('Should show the input box on page load', function() {
    expect(searchInput.isPresent()).toBe(true);
  });

  it('Should show a submit button', function() {
    expect(searchButton.isPresent()).toBe(true);
  });

  it('Should show the movie poster', function() {
    expect(element.all(by.tagName('img')).get(0).getAttribute('src')).toEqual(
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg"
    )
  });

  it('should show the title', function() {
    expect(element.all(by.repeater('(key, value) in movieInfo').row(0))
        .getText())
      .toContain("Title: Rocky");
  })

});
