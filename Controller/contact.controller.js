// contact.controller.js
import Contact from "../model/contact.model.js";

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({ name, email, message });
        await newContact.save();    

        res.status(201).json({ message: "Contact message saved successfully!" });
    } catch (error) {
        console.error("Error saving contact message:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
