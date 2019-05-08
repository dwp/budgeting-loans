module.exports = function (app) {

// NEW BENEFITS FLOW

  /////////////////////////////////////////////////////////
  // 1. SOCAIL FUND DEBT
  /////////////////////////////////////////////////////////	

  app.post('/new-benefits-flow/1-outstanding-social-fund-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/new-benefits-flow/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/new-benefits-flow/2-benefit');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/new-benefits-flow/not-sure-eligible-social-fund');
    }
  });

  /////////////////////////////////////////////////////////
  // 2. BENEFITS
  /////////////////////////////////////////////////////////

  // Benefit
  app.get('/new-benefits-flow/2-benefit', function (req, res) {
    res.render('new-benefits-flow/2-benefit', {'partner': res.locals.hasPartner} );
  });

  app.post('/new-benefits-flow/2-benefit', function (req, res) {
    // Pension Credit
    if (req.body.benefit === 'pc') {
      res.redirect('/new-benefits-flow/2-pension-credit');
    // Income Support
    } else if (req.body.benefit === 'is') {
      res.redirect('/new-benefits-flow/2-income-support');
    // Employment and Support
    } else if (req.body.benefit === 'esa') {
      res.redirect('/new-benefits-flow/2-esa');
    // Job Seeker’s Allowance
    } else if (req.body.benefit === 'jsa') {
      res.redirect('/new-benefits-flow/2-jsa');
    // None of the above
    } else {
      res.redirect('/new-benefits-flow/x-benefit');
    }
  });

  // ESA
  app.post('/new-benefits-flow/2-esa', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow/2-esa-type');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow/2-esa-previous-partner');
    } else {
      res.redirect('/new-benefits-flow/2-esa-linked-benefit');
    }
  });

  // ESA type
  app.get('/new-benefits-flow/2-esa-type', function (req, res) {
    res.render('new-benefits-flow/2-esa-type', {'partner': res.locals.hasPartner} );
  });
  app.post('/new-benefits-flow/2-esa-type', function (req, res) {
    if (req.body.answers === 'contribution') {
      res.redirect('/new-benefits-flow/x-esa-type');
    } else {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    }
  });

  // ESA previous partner
  app.post('/new-benefits-flow/2-esa-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow/2-esa-linked-benefit');
    }
  });

  // ESA linked benefit
  app.post('/new-benefits-flow/2-esa-linked-benefit', function (req, res) {
    if (req.body.answer3 === 'no') {
      res.redirect('/new-benefits-flow/x-benefit-length');
    } else {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    }
  });
  
  // Benefit JSA
  app.post('/new-benefits-flow/2-jsa', function (req, res) {
    if (req.body.answers === '12') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow/2-jsa-type');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow/2-jsa-previous-partner');
    } else {
      res.redirect('/new-benefits-flow/2-jsa-linked-benefit');
    }
  });

  // JSA type
  app.get('/new-benefits-flow/2-jsa-type', function (req, res) {
    res.render('new-benefits-flow/2-jsa-type', {'partner': res.locals.hasPartner} );
  });
  app.post('/new-benefits-flow/2-jsa-type', function (req, res) {
    if (req.body.answers === 'contribution') {
      res.redirect('/new-benefits-flow/x-jsa-type');
    } else {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    }
  });

  // JSA previous partner
  app.post('/new-benefits-flow/2-jsa-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow/2-jsa-linked-benefit');
    }
  });

  // JSA linked benefit
  app.post('/new-benefits-flow/2-jsa-linked-benefit', function (req, res) {
    if (req.body.answer3 === 'no') {
      res.redirect('/new-benefits-flow/x-benefit-length');
    } else {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    }
  });

  // Income Support
  app.post('/new-benefits-flow/2-income-support', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow/2-income-support-previous-partner');
    } else {
      res.redirect('/new-benefits-flow/2-income-support-linked-benefit');
    }
  });

  // Income Support previous partner
  app.post('/new-benefits-flow/2-income-support-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow/2-income-support-linked-benefit');
    }
  });

  // Income Support linked benefit
  app.post('/new-benefits-flow/2-income-support-linked-benefit', function (req, res) {
    if (req.body.answer3 === 'no') {
      res.redirect('/new-benefits-flow/x-benefit-length');
    } else {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    }
  });

  // Benefit Pension Credit
  app.post('/new-benefits-flow/2-pension-credit', function (req, res) {
    if (req.body.answers === '6') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else if (req.body.answers === '3') {
      res.redirect('/new-benefits-flow/2-pension-credit-previous-partner');
    } else {
      res.redirect('/new-benefits-flow/2-pension-credit-linked-benefit');
    }
  });

  // Pension Credit previous partner
  app.post('/new-benefits-flow/2-pension-credit-previous-partner', function (req, res) {
    if (req.body.answers === 'yes') {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    } else {
      res.redirect('/new-benefits-flow/2-pension-credit-linked-benefit');
    }
  });

  // Pension Credit linked benefit
  app.post('/new-benefits-flow/2-pension-credit-linked-benefit', function (req, res) {
    if (req.body.answer4 === 'no') {
      res.redirect('/new-benefits-flow/x-benefit-length');
    } else {
      res.redirect('/new-benefits-flow/3-borrow-amount');
    }
  });

  ///////////////////////////////////////////////////////
  /// 3. LOAN AMOUNT
  ///////////////////////////////////////////////////////

  // Borrow amount
  app.post('/new-benefits-flow/3-borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/new-benefits-flow/4-industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/new-benefits-flow/not-eligible-borrow-amount');
    }
  });

/////////////////////////////////////////////////////////
/// 4. INDUSTRIAL ACTION
/////////////////////////////////////////////////////////

// Industrial action
  app.post('/new-benefits-flow/4-industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/new-benefits-flow/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/new-benefits-flow/5-partner');
    }
  });
  
 }