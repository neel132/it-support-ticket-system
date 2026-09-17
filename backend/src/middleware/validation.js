function validateTicket(req, res, next) {
  const {
    employeeId,
    employeedName,
    email,
    category,
    priority,
    subject,
    description,
  } = req.body;
  const errors = [];
  if(!employeeId) {
    errors.push("Employee ID is required.")
  }
  if(employeeId && !/^EMP\d{4}$/.test(employeeId)) {
    errors.push("Employee ID must be like EMP1001")
  }
  if(!employeedName) {
    errors.push("Employee name is required");
  }
  if(!email) {
    errors.push("Email is required")
  }
  const allowCategories = [
    "VPN",
    "Laptop",
    "Email",
    "Software",
    "Internet",
    "Printer",
    "Other"
  ]
  if(!category || !allowCategories.includes(category)) {
    errors.push("Invalid category");
  }

  const allowedPriorities = [
    "Low",
    "Medium",
    "High",
    "Critical"
  ]
  if(!priority || !allowedPriorities.includes(priority)) {
    errors.push("Invalid priority.");
  }
  if(!subject) {
    errors.push("Subject is required.");
  }
  if(!description) {
    errors.push("Description is required");
  }

  if(errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors
    })
  }
  next();
}

function validateStatus(req, res, next) {
  const allowedStatuses = [
    "Pending",
    "In Progress",
    "Resolved",
    "Closed"
  ]
  const {status} = req.body;
  if(!allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ticket status."
    })
  }
  next();
}

module.exports = {
  validateTicket,
  validateStatus
}