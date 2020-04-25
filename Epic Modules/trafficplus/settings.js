async function main(settings) {
settings.on('submit', function (data) {
    if (data.myText !== 'Hello') {
      // We can return a custom Error object like so to prevent the settings from being saved
      // The input will automatically be highlighted for the user
      return {
        error: new Error('Please make this field exactly match: "Hello"'),
        input: 'myText'
      }
    }
  })
}
module.exports = main;
