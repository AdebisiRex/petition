const handleError = (err, res) => {
  res.send({
    success: false,
    message: "There was an error creating petition",
    error: err.message,
  });
};

module.exports = { handleError };
