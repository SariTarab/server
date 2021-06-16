const Employee = require("../models/employee")

const addNewEmployee = async (req, res) => {
    const NewEmployee = new Employee(req.body);
    try {
        const employee = await NewEmployee.save();
        res.json({ employee: employee })
    }
    catch (err) {
        console.log(err);
    }
}

const getAllEmployee = async(req, res) => {
    await Employee.find()
     .then(employes => {
         res.status(200).json({employes: employes});
         console.log("employee find");
     }).catch(err => {
         console.log("employee is'nt find");
     })
}
module.exports= {addNewEmployee, getAllEmployee};
