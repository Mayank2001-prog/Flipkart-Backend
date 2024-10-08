import User from "../model/user-schema.js"; // Change variable name to uppercase "User"

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username }); // Use uppercase "User"
    if (exist) {
      return response.status(401).json({ message: "Username already exists" }); // Corrected message
    }

    const user = request.body; // Use a different variable name for clarity
    const newUser = new User(user); // Use uppercase "User" for model
    await newUser.save();

    response.status(200).json({ message: user }); // Send response with userData, or you can send a success message if needed
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return response.status(200).json({ data: user });
    } else {
      return response.status(401).json("Invalid login");
    }
  } catch (error) {
    response.status(500).json("Error ", error.message);
  }
};
