import Customers from "../models/Customers.js"

const customerLogin = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" })
    }
    const user = await Customers.findOne({ email })
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" })
    }
    console.log("match")
    res.status(200).json({
      id: user._id,
      email: user.email,
      name: user.name
    })
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
}

const googleLogin = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" })
    }
    const user = await Customers.findOne({ email })
    console.log(user)
    if (!user || !(user.password == password)) {
      return res.status(401).json({ error: "Invalid credentials" })
    }
    console.log("match")
    res.status(200).json({
      id: user._id,
      email: user.email,
      name: user.name
    })
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
  
}

const userLogged =  async (req, res) => {
  res.status(200).json(req.user)
}


export default {
    customerLogin,
    userLogged,
}