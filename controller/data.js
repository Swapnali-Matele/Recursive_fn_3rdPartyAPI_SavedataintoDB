//finance schema for save
for (let i = 0; i < finalFinanceData.quotes.length; i++) {
    const quotes = new quoteSchema({
      fullExchangeName:finalFinanceData.quotes[i]["fullExchangeName"],
      quoteType: finalFinanceData.quotes[i]["quoteType"],
      market: finalFinanceData.quotes[i]["market"],
      region: finalFinanceData.quotes[i]["region"],
      currency: finalFinanceData.quotes[i]["currency"],
      longName: finalFinanceData.quotes[i]["longName"],
    });

    quotes.save();
    console.log(quotes);
  }