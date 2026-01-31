const express = require("express");
const router = express.Router();
const Task = require("../modules/Task");

router.put("/:id", async (req, res) => {
  try {
    const { title, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;