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
    //parkings[req.params.id].pop();
    console.log('delete', req.params.id)

    parkings.splice(req.params.id, 1)
    return res.send(parkings) 
}

