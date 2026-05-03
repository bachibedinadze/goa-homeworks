const phone = require("../models/phone");

const deletePhone = async (req, res) => {
    try {
        const { id } = req.params;

        const phone = await Phone.findById(id);

        if (!phone) {
            return res.status(404).json({ message: "Phone not found" });
        }
        
        await phone.findByIdAndDelete(id);

        return res.status(204).send();
    }   catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = deletePhone;