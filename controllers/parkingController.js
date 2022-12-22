let parkings = [];

exports.createParking = (req, res) => {
    console.log(req.body)
    let linkString = req.body
    parkings.push(req.body)
    res.send(linkString)
}

exports.getParkings = (req, res) => {
    console.log('getParkings')
    res.send(parkings)
}

exports.getParking = (req, res) => {
    res.send(parkings[req.params.id])
}

exports.deleteParking = (req, res) => {
    parkings[req.params.id].pop();
    return res.send(parkings)
}

exports.search_Parking = (req, res) => {
    console.log('search_Parking')
    res.send(parkings) 
}