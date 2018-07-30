module.exports = {
  pay: async function(address, currency, amount) {
	app.balances.increase(address, currency, amount * 100000000);
  }	
}
