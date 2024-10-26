module.exports = (req, res, next) => {
    const userRole = req.user.role;  // Assuming req.user is set by the authenticator middleware
    if (userRole !== 'Admin') {
      return res.status(403).json({ message: 'Access denied: Only admins can perform this action.' });
    }
    next(); // If the user is an admin, proceed with the request
  };
  