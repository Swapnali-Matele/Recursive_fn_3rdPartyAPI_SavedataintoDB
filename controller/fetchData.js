const quoteSchema = require('../model/quoteSchema');

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
	},
	body: '[{"operator":"or","operands":[{"operator":"EQ","operands":["exchange","NAS"]},{"operator":"EQ","operands":["exchange","NYQ"]}]}]'
};


const getPost = async (req, res) =>{
    let  dataLimit = req.body.limit;
    let dataSkip = req.body.skip;
    
    try{

     await fetch(`https://yh-finance.p.rapidapi.com/screeners/list?quoteType=MUTUALFUND&sortField=fundnetassets&region=US&size=${dataLimit}&offset=${dataSkip}&sortType=DESC`,options)
     .the(apiData => apiData.json())
        .then( actualData => {
            //console.log(actualData);
            const finance = actualData.finance
            //console.log(finance.result[0].quotes[1]['quoteType']);
            const finalFinanceData = finance.result[0]
          if(finalFinanceData>0){
            if(finalFinanceData< 100){
                console.log("All Data consumed last")
            }else{  

            for (let i =0; i< finalFinanceData.quotes.length; i++){

                    
        
                    const quotes = new quoteSchema({
                        fullExchangeName:finalFinanceData.quotes[i]['fullExchangeName'],
                        quoteType:finalFinanceData.quotes[i]['quoteType'],
                        market:finalFinanceData.quotes[i]['market'],
                        region:finalFinanceData.quotes[i]['region'],
                        currency:finalFinanceData.quotes[i]['currency'],
                        longName: finalFinanceData.quotes[i]['longName']
                    })
                    
                    quotes.save();
                    console.log(quotes);
                }
                    getPost({body : {limit: dataLimit + 100, skip: dataSkip + limit}})
               

        }

        }else{
            return console.log("All data Consumed empty");

        }
    
        //res.status(200).json({status: 200, data:{ }, message: "Quotes saved in database"})
    })
    .catch(err => {
            console.log(err);
        });
    

    }catch(err){
        console.log(err)
    }

}
getPost()

