const { body } = require('express-validator')

exports.validationCheck = [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'password should be at least 6 caracters').isLength({ min: 6 }),
    body('firstname','FirstName is required').isLength({min:2}),
    body('lastname','LasName is required').isLength({min:2})
]


 exports.DataValidationLogin = [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password should be at least 8 caracters').isLength({ min: 6 }),

    
] 

/* exports.DataPostValidation = [
    body('name', 'Name is required').isLength({ min: 2 }),
    body('imageUrl','image is required').isLength({min:2}),
    body('description','Description Type is required').isLength({min:2}),
    body('price','Price is required').isNumeric(),
    body('countInStock','Stocke is required').isNumeric(),
    body('categorie','Nb of Candidate is required').isLength({min:1}),
    
    
] */