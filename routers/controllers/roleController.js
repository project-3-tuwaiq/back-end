const { Role } = require("../../models/roleDB");
//Create Role
const createRole = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  Role.findOne({
    title: title,
  })
    .then((savedRole) => {
      if (savedRole) {
        return res
          .status(404)
          .json({ error: "role already exists with that title" });
      }

      const role = new Role({
        title,
        createdId: "superAdminId",
        createdDate: new Date().toDateString(),
      });

      role
        .save()
        .then((role) => {
          res.json({ status: "success", message: "saved successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get Roles
const getRoles = (req, res) => {
  console.log("getRoles working")
  Role.find({ isDeleted: false })
    .then((response) => {
      console.log("found")
      res.status(200).json(response)})
    .catch((err) => {
      console.log(err);
      res.send(err)
    });
};
//Delete Roles

const deleteRole = (req, res) => {
  const Id = req.params.id;

  Role.findOneAndUpdate({ _id: Id }, { isDeleted: true })
    .then((result) => {
      res.status(202).json({ message: "role have been updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error can not updated");
    });
};

module.exports = {
  createRole,
  getRoles,
  deleteRole
};