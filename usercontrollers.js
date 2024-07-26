const user = require('../models/user')
exports.uers = async(req, res) => {
    const { name, email} = req.body
    const user = new user({
        
    name:name,
    email:email
});

getAllUser = app.Usercontroller();

UserById.User = ('/update/:id',users)
  await user.save();
  res.status(200).json({
    success:true,
    data:user
  })
}