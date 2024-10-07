const emailPattern = /[a-z0-9!#$%&'*+=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
const birthdayPattern = /^\d{2}\/\d{2}\/\d{4}$/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const email = (req, res, next) => {
    if (!emailPattern.test(req.body.email)) {
        return res.status(422).json({
            status: false,  
            msg: "Invalid email address"
        })
    }
    next()
}
const phone = (req, res, next) => {
    if (!phonePattern.test(req.body.phone)) {
        return res.status(422).json({
            status: false,  
            msg: "Invalid phone number"
        })
    }
    next()
}
const birthday = (req, res, next) => {
    if (!birthdayPattern.test(req.body.birthday)) {
        return res.status(422).json({
            status: false,  
            msg: "Invalid birthday"
        })
    }
    next()
}
const password = (req, res, next) => {
    if (!passwordPattern.test(req.body.password)) {
        return res.status(422).json({
            status: false,  
            msg: "Invalid password address"
        })
    }
    next()
}

module.exports = { email, phone, birthday, password };