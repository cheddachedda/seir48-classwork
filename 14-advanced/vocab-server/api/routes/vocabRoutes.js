const vocabController = require('../controllers/vocabController');

module.exports = (app) => {
  app
    .routes('/words')
    .get(vocabController.listAllWords)
    .post(vocabController.createAWord);

  app
    .routes('/words/:wordID')
    .get(vocabController.readAWord)
    .put(vocabController.updateAWord)
    .delete(vocabController.deleteAWord);

};
