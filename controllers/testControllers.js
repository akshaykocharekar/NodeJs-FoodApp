const testUserModalController = (req, res) => {
  try {
    res.status(200).send({
      Success: true,
      message: "Test user Data Api",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { testUserModalController };
