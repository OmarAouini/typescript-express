//create new employee
exports.create = async (req :Request, res :Response) => {
    try {
      if (!req.body) {
        //res.status(400).send({ message: "article not valid!" });
        return;
      }
  
      //prepare for saving, creating entity from request body
      //let toBeSaved = new article({});
  
      //saving
      //await 

    } catch (error) {
      //res.status(500).send({message: `error while creating new article: + ${error}`});
    }
  };