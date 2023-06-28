const express = require('express');
const router = express.Router();

// Define a route
// router.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
router.get('/add', (req, res) => {
    const oneskills = new skills({
        title: 'java',
        // age: 25,
        rate: '78'
      });
      
      // Save the document
      oneskills.save()
        .then((doc) => {
          console.log('Saved document:', doc);
        })
        .catch((err) => {
          console.error('Error saving document:', err);
        })
    
  })

// Export the router
module.exports = router;
