const userModel = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const demo = (req, res) => {
  res.send("Hello, World! ,Login Blogs");
}

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 5); 
    const user = await userModel.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials: User not found' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials: Incorrect password' });
  
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Login successful', token })

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { demo, signup, login }