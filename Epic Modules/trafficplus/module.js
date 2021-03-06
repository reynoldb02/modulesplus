let somiibo;
let counter;

// When reach page with no links, 50% chance to go all the way back to first page
// If visits page it has already been to, 50% chance to click other link, otherwise leave

async function main(mod) {
  somiibo = mod;

  // Configure can only run once in a given module's lifecycle
  // It should be used to configure the module or set up things
  somiibo.initialize(() => {
    counter = 0;
  });

	somiibo.alert({
  type: 'success', // 'success', 'warning', 'danger', 'info',
  title: 'Hello, World!',
  content: somiibo.getSetting('myText'),
  button: 'Goodbye',
});
    somiibo.stop();
  
}

module.exports = main;
