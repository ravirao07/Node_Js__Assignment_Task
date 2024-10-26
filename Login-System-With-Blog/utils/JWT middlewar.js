// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//   // const token = req.cookies.token; 
//   console.log(token)
//   res.send("okok")
  
//   // if (!token) {
//   //   return res.status(401).json({ message: 'Authorization denied, no token provided' });
//   // }

//   // try {
//   //   const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
//   //   req.user = decoded; // Attach user info to req object
//   //   next(); // Proceed to next middleware
//   // } catch (error) {
//   //   res.status(401).json({ message: 'Token is not valid' });
//   // }
// };
// module.exports=verifyToken
