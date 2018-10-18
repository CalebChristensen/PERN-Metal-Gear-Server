let router = require('express').Router();
let TestData = require('../db').import('../models/1-test');

// || Controller Method #1: Simple Repsonse ||
router.get('/one', function(req, res){
    
  TestData
  .findAll({
    attributes: ['id', 'nameOfCharacter', 'nationality', 'birth', 'death', 'favoriteWeapon']
  })
  .then(
    function findAllSuccess(data) {
      console.log("Controller data:", data);
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

router.get('/:id', function(req,res) {
  let data = req.params.id;

  TestData
  .findOne({
    where: { id: data },
    attributes: ['id', 'nameOfCharacter', 'nationality', 'birth', 'death', 'favoriteWeapon']
  }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      res.send(500, err.message);
    }
  );
});

// || Controller Method #2: Persisting Data ||
router.post('/two', function (req, res) {

    TestData
    .create({
      nameOfCharacter:"The Boss",
      nationality:"American",
      birth: "1922",
      death: "9/2/1964, Tselinoyarsk, USSR",
      favoriteWeapon: "The Patriot",
    }).then(dataFromDatabase => {
        res.send("Test two was success.. For now..")
    })
});

// || Controller Method #3 req.body ||
router.post('/three', function (req, res) {
    let testData = req.body.test.item;

    TestData
    .create({
        testdata: testData
    })
    res.send("Huh? Test 3 endpoint? hmmm...")
    console.log("Huh? Test 3 endpoint? hmmm...")
})

// ||STEP 4 - Use this with Postman ||
router.post('/four', function (req, res) {
    let testData = req.body.testdata.item;
    TestData
    .create({
        testdata: testData
    })
    .then(
        function message() {
            res.send("METAL GEAR?? Sons of the Patriots 4")
        }
    )
})

// || Route 5: Return data in a Promise ||
router.post('/five', function (req, res) {
    let testData = req.body.testdata.item;
    TestData.create({testdata: testData}).then(function message(data) {res.send(data);});
});
module.exports = router;

// || Route 6: Return response as JSON ||
router.post('/six', function (req, res) {
    let testData = req.body.testdata.item;
    TestData.create({testdata: testData}).then(function message(testdata){res.json({testdata: testdata});});
});

// || Route 7: Handle errors ||
router.post('/seven', function (req, res) {
    let testData = req.body.testdata.item;
    TestData.create({testdata: testData}).then(function createSuccess(testdata){res.json({testdata: testdata});}, function createError(err){res.send(500, err.message);});
});

// || GET: Get simple message from server
router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client.')
})

router.put('/update/:id', (req, res) => {
  if (!req.errors) {
    TestData.update(req.body, { where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

router.delete('/delete/:id', function(req, res) {
  let data = req.params.id;

  TestData
  .destroy({
    where: { id: data }
  }).then(
    function deleteLogSuccess(data){
      res.send("you removed a log");
    },
    function deleteLogError(err){
      res.send(500, err.message);
    }
  );
});

module.exports = router;