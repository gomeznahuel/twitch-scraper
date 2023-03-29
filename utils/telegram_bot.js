const sendMessage = async (message) => {
  require("dotenv").config();
  const configBot = `${process.env.BASE_URL}${process.env.ID_BOT}/sendMessage?chat_id=${process.env.ID_USER}&text=${message}`;

  try {
    const response = await fetch(configBot);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMessage;
