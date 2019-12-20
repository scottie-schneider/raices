

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ name: 'Scottie rubber duck'})
      break 
    case 'POST':
      res.status(200).json({ name: 'Post :)'})
      break
    default: 
      res.status(405).end() //method not allowed
      break
  }
}