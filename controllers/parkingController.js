const parkings = [];

exports.createParking = (req, res) => {
    console.log(req.body)
    let linkString = req.body
    parkings.push(req.body)
    res.send(linkString)
}
