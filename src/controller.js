exports.getHome = (req, res) => {
  res.status(200).json({ message: "DevSecOps Demo App Running" });
};

exports.getHealth = (req, res) => {
  res.status(200).json({ status: "UP" });
};
