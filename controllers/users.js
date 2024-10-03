const signup = (req, res) => {
    console.log(req.body);
    // const { email, phone, birthday, password } = req.body
    return res.json({
        msg: "User has been successfully created!",
        user: { ...req.body, password: [...req.body.password].map((char) => "●").join('') }
    })
}

module.exports = { signup };