module.exports = function (app) {

// NEW BENEFITS FLOW

  /////////////////////////////////////////////////////////
  // 1. SOCAIL FUND DEBT
  /////////////////////////////////////////////////////////	

  app.post('/new-benefits-flow-v2/1-outstanding-social-fund-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/new-benefits-flow-v2/x-social-fund');
    } else {
      res.redirect('/new-benefits-flow-v2/2-benefit');
    }
  });

  /////////////////////////////////////////////////////////
  // 2. BENEFITS
  /////////////////////////////////////////////////////////

  // Benefit
  app.get('/new-benefits-flow-v2/2-benefit', function (req, res) {
    res.render('new-benefits-flow/2-benefit', {'partner': res.locals.hasPartner} );
  });

  app.post('/new-benefits-flow-v2/2-benefit', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
      res.redirect('/new-benefits-flow-v2/2-pension-credit');
    // Income Support
    } else if (req.body.benefit === 'is') {
      res.redirect('/new-benefits-flow-v2/2-income-support');
    // Employment and Support
    } else if (req.body.benefit === 'esa') {
      res.redirect('/new-benefits-flow-v2/2-esa');
    // Job Seeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
      res.redirect('/new-benefits-flow-v2/2-jsa');
    // None of the above
    } else {
      res.redirect('/new-benefits-flow-v2/x-benefit');
    }
  });

  // ESA
  app.post('/new-benefits-flow-v2/2-esa', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow-v2/2-esa-type');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow-v2/2-esa-previous-partner');
    } else {
      res.redirect('/new-benefits-flow-v2/2-esa-linked-benefit');
    }
  });

  // ESA type
  app.get('/new-benefits-flow-v2/2-esa-type', function (req, res) {
    res.render('new-benefits-flow-v2/2-esa-type', {'partner': res.locals.hasPartner} );
  });
  app.post('/new-benefits-flow-v2/2-esa-type', function (req, res) {
    if (req.body.answers === 'contribution') {
      res.redirect('/new-benefits-flow-v2/x-esa-type');
    } else {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    }
  });

  // ESA previous partner
  app.post('/new-benefits-flow-v2/2-esa-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/2-esa-linked-benefit');
    }
  });

  // ESA linked benefit
  app.post('/new-benefits-flow-v2/2-esa-linked-benefit', function (req, res) {
    if (req.body.answer1 === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/x-benefit-length');
    }
  });
  
  // Benefit JSA
  app.post('/new-benefits-flow-v2/2-jsa', function (req, res) {
    if (req.body.answers === '12') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow-v2/2-jsa-type');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow-v2/2-jsa-previous-partner');
    } else {
      res.redirect('/new-benefits-flow-v2/2-jsa-linked-benefit');
    }
  });

  // JSA type
  app.get('/new-benefits-flow-v2/2-jsa-type', function (req, res) {
    res.render('new-benefits-flow/2-jsa-type', {'partner': res.locals.hasPartner} );
  });
  app.post('/new-benefits-flow-v2/2-jsa-type', function (req, res) {
    if (req.body.answers === 'contribution') {
      res.redirect('/new-benefits-flow-v2/x-jsa-type');
    } else {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    }
  });

  // JSA previous partner
  app.post('/new-benefits-flow-v2/2-jsa-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/2-jsa-linked-benefit');
    }
  });

  // JSA linked benefit
  app.post('/new-benefits-flow-v2/2-jsa-linked-benefit', function (req, res) {
    if (req.body.answer1 === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/x-benefit-length');
    }
  });

  // Income Support
  app.post('/new-benefits-flow-v2/2-income-support', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow-v2/2-income-support-previous-partner');
    } else {
      res.redirect('/new-benefits-flow-v2/2-income-support-linked-benefit');
    }
  });

  // Income Support previous partner
  app.post('/new-benefits-flow-v2/2-income-support-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/2-income-support-linked-benefit');
    }
  });

  // Income Support linked benefit
  app.post('/new-benefits-flow-v2/2-income-support-linked-benefit', function (req, res) {
    if (req.body.answer1 === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/x-benefit-length');
    }
  });

  // Benefit Pension Credit
  app.post('/new-benefits-flow-v2/2-pension-credit', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow-v2/2-pension-credit-previous-partner');
    } else {
      res.redirect('/new-benefits-flow-v2/2-pension-credit-linked-benefit');
    }
  });

  // Pension Credit previous partner
  app.post('/new-benefits-flow-v2/2-pension-credit-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/2-pension-credit-linked-benefit');
    }
  });

  // Pension Credit linked benefit
  app.post('/new-benefits-flow-v2/2-pension-credit-linked-benefit', function (req, res) {
    if (req.body.answer1 === 'yes') {
      res.redirect('/new-benefits-flow-v2/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow-v2/x-benefit-length');
    }
  });

  ///////////////////////////////////////////////////////
  /// 3. LOAN AMOUNT
  ///////////////////////////////////////////////////////

  // Borrow amount
  app.post('/new-benefits-flow-v2/3-borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/new-benefits-flow-v2/4-industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/new-benefits-flow-v2/not-eligible-borrow-amount');
    }
  });

/////////////////////////////////////////////////////////
/// 4. INDUSTRIAL ACTION
/////////////////////////////////////////////////////////

// Industrial action
  app.post('/new-benefits-flow-v2/4-industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/new-benefits-flow-v2/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/new-benefits-flow-v2/5-partner');
    }
  });

  ////////////////////////////////////////////////////////
  /// 5. PARTNER
  ////////////////////////////////////////////////////////

  // Partner question
  app.post('/new-benefits-flow-v2/5-partner', function (req, res) {
    if (req.body.answer === 'yes') {
      res.redirect('/new-benefits-flow-v2/6-child-partner');
    } else {
      res.redirect('/new-benefits-flow-v2/6-child-no-partner');
    }
  });

  
 }